'use client'

import { FC, useState, useRef, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import Image from 'next/image'
import { FaGithub } from 'react-icons/fa'
import { ExternalLink, ChevronDown, Maximize2 } from 'lucide-react'
import type { Project } from '@/types'
import { ImageModal } from './ImageModal'

interface ProjectCardProps {
	project: Project
	index: number
}

export const ProjectCard: FC<ProjectCardProps> = ({ project, index }) => {
	const [isExpanded, setIsExpanded] = useState(false)
	const [isOverflowing, setIsOverflowing] = useState(false)
	const [isModalOpen, setIsModalOpen] = useState(false)
	const descriptionRef = useRef<HTMLParagraphElement>(null)

	useEffect(() => {
		const checkOverflow = () => {
			if (descriptionRef.current) {
				const isTextOverflowing = descriptionRef.current.scrollHeight > 72
				setIsOverflowing(isTextOverflowing)
			}
		}

		checkOverflow()
		window.addEventListener('resize', checkOverflow)
		return () => window.removeEventListener('resize', checkOverflow)
	}, [project.description])

	return (
		<>
			<motion.div
				className='bg-[var(--card-light)] dark:bg-[var(--card-dark)] 
                    rounded-lg overflow-hidden     
                    hover:border-[rgb(var(--primary-light))]/20
                    shadow-sm hover:shadow-md
                    transition-all duration-300 
                    flex flex-col h-full'
			>
				{/* Image Container */}
				<div className='relative h-48 w-full overflow-hidden group'>
					<Image
						src={project.images[0].url}
						alt={project.images[0].alt}
						className='object-cover object-top transform group-hover:scale-110 transition-transform duration-500'
						fill
						sizes='(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw'
						priority={index < 2}
					/>
					<div
						className='absolute inset-0 bg-gradient-to-t 
                        from-[rgb(var(--primary-light))]/60 to-transparent 
                        opacity-0 group-hover:opacity-100 
                        transition-opacity duration-300'
					>
						<button
							onClick={() => setIsModalOpen(true)}
							className='absolute bottom-4 right-4 p-2 
                        bg-[var(--card-light)]/90 dark:bg-[var(--card-dark)]/90 
                        rounded-full backdrop-blur-sm
                        border border-[rgb(var(--primary-light))]/10
                        hover:border-[rgb(var(--primary-light))]/20
                        transition-all duration-300'
							title='View full size'
						>
							<Maximize2
								size={20}
								className='text-gray-600 dark:text-gray-300'
							/>
						</button>
					</div>

					{/* Image Counter Badge */}
					{project.images.length > 1 && (
						<div
							className='absolute bottom-4 left-4 px-2 py-1 
                          bg-[var(--card-dark)]/50 backdrop-blur-sm
                          rounded-full text-white text-sm
                          border border-[rgb(var(--primary-light))]/10'
						>
							{project.images.length} images
						</div>
					)}

					{/* Project Type Badge */}
					<div className='absolute top-2 right-4'>
						<span className='relative group'>
							{/* Background with gradient on hover */}
							<span
								className='absolute inset-0 bg-gradient-to-r from-[rgb(var(--primary-light))] to-[rgb(var(--accent-light))]
                            opacity-0 group-hover:opacity-10 rounded-lg transition-all duration-300'
							/>

							{/* Project type badge */}
							{/* <span
								className='relative block px-2 py-1.5 rounded-lg text-sm font-medium
                            bg-[var(--badge-bg-light)] dark:bg-[var(--badge-bg-dark)] 
                            text-[var(--badge-text-light)] dark:text-[var(--badge-text-dark)]
                            border border-[var(--badge-border-light)] dark:border-[var(--badge-border-dark)]
                            hover:bg-[var(--badge-bg-light)]/80 dark:hover:bg-[var(--badge-bg-dark)]/80
                            hover:border-[var(--badge-border-light)]/80 dark:hover:border-[var(--badge-border-dark)]/80
                            shadow-sm dark:shadow-none backdrop-blur-sm
                            transition-all duration-300'
							>
								{project.type}
							</span> */}
							<span className='badge badge-outline'>{project.type}</span>
						</span>
					</div>
				</div>

				<div className='p-6 flex flex-col flex-grow'>
					{/* Title and Tech Stack */}
					<div className='mb-4'>
						<h3 className='text-xl font-semibold text-gray-900 dark:text-white mb-2'>
							{project.title}
						</h3>
						<div className='flex flex-wrap gap-2'>
							{project.tech.map((tech) => (
								<span key={tech} className='relative group'>
									{/* Background with gradient on hover */}
									<span
										className='absolute inset-0 bg-gradient-to-r from-[rgb(var(--primary-light))] to-[rgb(var(--accent-light))]
                                opacity-0 group-hover:opacity-10 rounded-lg transition-all duration-300'
									/>

									{/* Tech badge */}
									{/* <span
										className='relative block px-2 py-1.5 rounded-lg text-sm font-medium
                                bg-[rgb(var(--badge-bg-light))] dark:bg-[rgb(var(--badge-text-dark))]
                                text-[var(--badge-text-light)] dark:text-[var(--badge-text-dark)]
                                border border-[var(--badge-border-light)] dark:border-[var(--badge-border-dark)]
                                hover:bg-[var(--badge-bg-light)] dark:hover:bg-[var(--badge-bg-dark)]
                                hover:border-[var(--badge-border-light)] dark:hover:border-[var(--badge-border-dark)]
                                shadow-sm dark:shadow-none
                                transition-all duration-300'
									>
										{tech}
									</span> */}

									<span className='badge '>{tech}</span>
								</span>
							))}
						</div>
					</div>

					{/* Description */}
					<div className='relative flex-grow'>
						<div
							className={`${
								!isExpanded && 'max-h-[4.5rem]'
							} overflow-hidden transition-all duration-300`}
						>
							<p
								ref={descriptionRef}
								className='text-gray-600 dark:text-gray-300'
							>
								{project.description}
							</p>
						</div>
						{isOverflowing && (
							<button
								onClick={() => setIsExpanded(!isExpanded)}
								className='mt-2 text-[rgb(var(--primary-light))] hover:text-[rgb(var(--primary-light))]/80 
                          flex items-center transition-colors duration-300'
							>
								{isExpanded ? 'Show less' : 'Read more'}
								<ChevronDown
									className={`ml-1 transform transition-transform ${
										isExpanded ? 'rotate-180' : ''
									}`}
									size={16}
								/>
							</button>
						)}
					</div>

					{/* Links */}
					<div className='mt-6 pt-4 border-t border-[rgb(var(--primary-light))]/10 flex space-x-6'>
						{project.githubUrl && (
							<a
								href={project.githubUrl}
								target='_blank'
								rel='noopener noreferrer'
								className='flex items-center space-x-2 
                          text-gray-600 dark:text-gray-400 
                          hover:text-[rgb(var(--primary-light))] dark:hover:text-[rgb(var(--primary-light))]
                          transition-colors duration-300'
							>
								<FaGithub size={20} />
								<span className='text-sm'>View Code</span>
							</a>
						)}
						{project.liveUrl && (
							<a
								href={project.liveUrl}
								target='_blank'
								rel='noopener noreferrer'
								className='flex items-center space-x-2 
                          text-gray-600 dark:text-gray-400 
                          hover:text-[rgb(var(--primary-light))] dark:hover:text-[rgb(var(--primary-light))]
                          transition-colors duration-300'
							>
								<ExternalLink size={20} />
								<span className='text-sm'>Live Demo</span>
							</a>
						)}
					</div>
				</div>
			</motion.div>

			{/* Image Modal */}
			<AnimatePresence>
				{isModalOpen && (
					<ImageModal
						images={project.images}
						isOpen={isModalOpen}
						onClose={() => setIsModalOpen(false)}
					/>
				)}
			</AnimatePresence>
		</>
	)
}
