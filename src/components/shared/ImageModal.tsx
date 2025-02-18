// 'use client'

import { useCallback, useEffect, useState } from 'react'
import { motion } from 'framer-motion'
import { ChevronLeft, ChevronRight, X } from 'lucide-react'
import Image from 'next/image'

interface ImageModalProps {
	images: { url: string; alt: string }[]
	isOpen: boolean
	onClose: () => void
}

export function ImageModal({ images, isOpen, onClose }: ImageModalProps) {
	const [currentImageIndex, setCurrentImageIndex] = useState(0)

	// Memoize navigation functions
	const nextImage = useCallback(() => {
		setCurrentImageIndex((prev) => (prev + 1) % images.length)
	}, [images.length])

	const previousImage = useCallback(() => {
		setCurrentImageIndex((prev) => (prev - 1 + images.length) % images.length)
	}, [images.length])

	// Handle scroll lock
	useEffect(() => {
		if (isOpen) {
			const scrollY = window.scrollY
			document.body.style.position = 'fixed'
			document.body.style.top = `-${scrollY}px`
			document.body.style.width = '100%'

			return () => {
				document.body.style.position = ''
				document.body.style.top = ''
				document.body.style.width = ''
				window.scrollTo(0, scrollY)
			}
		}
	}, [isOpen])

	// Handle keyboard navigation
	useEffect(() => {
		const handleKeyDown = (e: KeyboardEvent) => {
			if (!isOpen) return

			switch (e.key) {
				case 'ArrowLeft':
					previousImage()
					break
				case 'ArrowRight':
					nextImage()
					break
				case 'Escape':
					onClose()
					break
			}
		}

		window.addEventListener('keydown', handleKeyDown)
		return () => window.removeEventListener('keydown', handleKeyDown)
	}, [isOpen, nextImage, previousImage, onClose])

	if (!isOpen) return null

	return (
		<motion.div
			initial={{ opacity: 0 }}
			animate={{ opacity: 1 }}
			exit={{ opacity: 0 }}
			className='fixed inset-0 z-50 flex items-center justify-center bg-black/80 p-4 '
			onClick={onClose}
		>
			<div
				className='relative w-full max-w-7xl mx-auto'
				onClick={(e) => e.stopPropagation()}
			>
				{/* Close button */}
				<button
					onClick={onClose}
					className='absolute -top-4 -right-4 z-10 p-2 bg-white dark:bg-gray-800 rounded-full shadow-lg hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors'
				>
					<X size={20} className='text-gray-600 dark:text-gray-300' />
				</button>

				{/* Main image */}
				<div className='relative w-full h-[50vh] sm:h-[60vh] md:h-[70vh] lg:h-[80vh] max-h-[800px] bg-[var(--card-light)] dark:bg-[var(--card-dark)]  rounded-lg overflow-hidden'>
					<Image
						src={images[currentImageIndex].url}
						alt={images[currentImageIndex].alt}
						fill
						className='object-contain'
						sizes='(max-width: 1280px) 100vw, 1280px'
						priority
					/>
				</div>

				{/* Navigation arrows */}
				{images.length > 1 && (
					<>
						<button
							onClick={(e) => {
								e.stopPropagation()
								previousImage()
							}}
							className='absolute left-4 top-1/2 -translate-y-1/2 p-2 bg-white/80 dark:bg-gray-800/80 rounded-full hover:bg-white dark:hover:bg-gray-800 transition-colors'
						>
							<ChevronLeft
								size={24}
								className='text-gray-600 dark:text-gray-300'
							/>
						</button>
						<button
							onClick={(e) => {
								e.stopPropagation()
								nextImage()
							}}
							className='absolute right-4 top-1/2 -translate-y-1/2 p-2 bg-white/80 dark:bg-gray-800/80 rounded-full hover:bg-white dark:hover:bg-gray-800 transition-colors'
						>
							<ChevronRight
								size={24}
								className='text-gray-600 dark:text-gray-300'
							/>
						</button>
					</>
				)}

				{/* Thumbnails */}
				{images.length > 1 && (
					<div className='flex justify-center mt-4 gap-2'>
						{images.map((image, index) => (
							<button
								key={index}
								onClick={() => setCurrentImageIndex(index)}
								className={`relative w-20 h-20 rounded-lg overflow-hidden transition-all ${
									currentImageIndex === index
										? 'ring-2 ring-blue-500 scale-110'
										: 'opacity-70 hover:opacity-100'
								}`}
							>
								<Image
									src={image.url}
									alt={`Thumbnail ${index + 1}`}
									fill
									className='object-cover'
									sizes='80px'
								/>
							</button>
						))}
					</div>
				)}

				{/* Image counter */}
				<div className='absolute bottom-4 left-4 px-3 py-1 bg-black/50 rounded-full text-white text-sm'>
					{currentImageIndex + 1} / {images.length}
				</div>
			</div>
		</motion.div>
	)
}
