'use client'

import { FC } from 'react'
import { motion } from 'framer-motion'
import { SectionTitle } from '../shared/SectionTitle'
import { Section } from '../Layout/Section'

export const About: FC = () => {
	return (
		<Section className='py-20 relative'>
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
							I'm a passionate Full Stack Developer with experience in building
							modern web applications. My journey in web development started
							with freelancing, and I've since worked on various projects that
							have sharpened my skills in both frontend and backend development.
						</p>
						<p className='animate-fade-in delay-100'>
							Currently, I'm working as a Junior Web Developer at Reollo Travel,
							where I build and maintain B2B travel booking platforms. I
							specialize in creating responsive, user-friendly applications
							using React, Next.js, and Node.js.
						</p>
						<p className='animate-fade-in delay-200'>
							I'm always eager to learn new technologies and best practices to
							create better web experiences. When I'm not coding, I enjoy
							contributing to open-source projects and staying up-to-date with
							the latest web development trends.
						</p>
					</div>
					<motion.div
						initial={{ opacity: 0, scale: 0.8 }}
						animate={{ opacity: 1, scale: 1 }}
						className='relative h-96 w-full rounded-lg overflow-hidden'
					>
						<div className='absolute inset-0 bg-[var(--card-dark)] opacity-80' />
						<img
							src='/images/manta-reollo.png'
							alt='Lawrence Makori'
							className='object-cover object-center w-full h-full rounded-lg'
						/>
					</motion.div>
				</motion.div>
			</div>
		</Section>
	)
}
