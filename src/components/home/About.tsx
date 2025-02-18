'use client'

import { FC } from 'react'
import { motion } from 'framer-motion'
import { SectionTitle } from '../shared/SectionTitle'
import { Section } from '../Layout/Section'
import Image from 'next/image'

export const About: FC = () => {
	return (
		<Section id='about' className='py-20 relative'>
			{/* Gradient overlay */}
			<div className='absolute inset-0 bg-gradient-to-br from-[rgb(var(--primary-light))/5] to-transparent' />

			<div className='relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8'>
				<SectionTitle>About Me</SectionTitle>
				<motion.div
					initial={{ opacity: 0, y: 20 }}
					animate={{ opacity: 1, y: 0 }}
					className='mt-12 grid grid-cols-1 md:grid-cols-2 gap-12 items-center'
				>
					<div className='space-y-6 text-gray-300'>
						<p className='animate-fade-in'>
							I&apos;m a passionate Full Stack Developer with experience in
							building modern web applications. My journey in web development
							started with freelancing, and I&apos;ve since worked on various
							projects that have sharpened my skills in both frontend and
							backend development.
						</p>
						<p className='animate-fade-in delay-100'>
							Currently, I&apos;m working as a Junior Web Developer at Reollo
							Travel, where I build and maintain B2B travel booking platforms. I
							specialize in creating responsive, user-friendly applications
							using React, Next.js, and Node.js.
						</p>
						<p className='animate-fade-in delay-200'>
							I&apos;m always eager to learn new technologies and best practices
							to create better web experiences.
						</p>
					</div>
					{/* <motion.div
						initial={{ opacity: 0, scale: 0.8 }}
						animate={{ opacity: 1, scale: 1 }}
						className='relative h-96 w-full rounded-lg overflow-hidden'
					>
						<div className='absolute inset-0 bg-[var(--card-dark)] opacity-80' />
						
						<Image
							src='/images/manta-reollo.png'
							alt='Lawrence Makori'
							fill
							className='object-cover object-center rounded-lg'
							priority
						/>
					</motion.div> */}

					<motion.div
						initial={{ opacity: 0, scale: 0.8 }}
						animate={{ opacity: 1, scale: 1 }}
						className='relative h-96 w-full rounded-lg overflow-hidden bg-[var(--card-dark)] p-4'
					>
						{/* Editor Header */}
						<div className='flex items-center space-x-2 mb-4'>
							<div className='w-3 h-3 rounded-full bg-red-500' />
							<div className='w-3 h-3 rounded-full bg-yellow-500' />
							<div className='w-3 h-3 rounded-full bg-green-500' />
						</div>

						{/* Code Content */}
						<div className='font-mono text-sm space-y-2 text-gray-300'>
							<motion.div
								initial={{ opacity: 0, x: -20 }}
								animate={{ opacity: 1, x: 0 }}
								transition={{ delay: 0.2 }}
							>
								<span className='text-[rgb(var(--primary-light))]'>const</span>{' '}
								developer = {'{'}
							</motion.div>
							<motion.div
								initial={{ opacity: 0, x: -20 }}
								animate={{ opacity: 1, x: 0 }}
								transition={{ delay: 0.4 }}
								className='pl-4'
							>
								name:{' '}
								<span className='text-green-400'>
									&apos;Lawrence Makori&apos;
								</span>
								,
							</motion.div>
							<motion.div
								initial={{ opacity: 0, x: -20 }}
								animate={{ opacity: 1, x: 0 }}
								transition={{ delay: 0.6 }}
								className='pl-4'
							>
								skills: [
								<span className='text-green-400'>
									&apos;Full Stack Development&apos;
								</span>
								,<span className='text-green-400'>&apos;Nodejs&apos;</span>
								],
							</motion.div>
							<motion.div
								initial={{ opacity: 0, x: -20 }}
								animate={{ opacity: 1, x: 0 }}
								transition={{ delay: 0.8 }}
								className='pl-4'
							>
								passion:{' '}
								<span className='text-green-400'>
									&apos;Creating Amazing Web Experiences&apos;
								</span>
							</motion.div>
							<motion.div
								initial={{ opacity: 0, x: -20 }}
								animate={{ opacity: 1, x: 0 }}
								transition={{ delay: 1.0 }}
							>
								{'}'}
							</motion.div>
						</div>
					</motion.div>
				</motion.div>
			</div>
		</Section>
	)
}
