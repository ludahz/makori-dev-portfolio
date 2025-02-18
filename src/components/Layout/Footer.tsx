'use client'

import { motion } from 'framer-motion'
import { FaGithub, FaLinkedin } from 'react-icons/fa'
import { Mail } from 'lucide-react'
import { JSX } from 'react'

interface SocialLink {
	href: string
	icon: JSX.Element
	label: string
}

export function Footer(): JSX.Element {
	const currentYear = new Date().getFullYear()

	const socialLinks: SocialLink[] = [
		{
			href: 'https://github.com/yourusername',
			icon: <FaGithub size={20} />,
			label: 'GitHub',
		},
		{
			href: 'https://linkedin.com/in/lawrence-makori-230bb348',
			icon: <FaLinkedin size={20} />,
			label: 'LinkedIn',
		},
		{
			href: 'mailto:ludahmaxs@gmail.com',
			icon: <Mail size={20} />,
			label: 'Email',
		},
	]

	return (
		<footer
			className='border-t backdrop-blur-sm
      bg-[var(--section-light-alt)] dark:bg-[var(--section-dark-alt)] 
      border-[rgb(var(--primary-light))]/10 transition-all duration-300'
		>
			<div className='max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-8'>
				<div className='flex flex-col items-center justify-center space-y-6'>
					{/* Logo */}
					<motion.h2
						initial={{ opacity: 0 }}
						animate={{ opacity: 1 }}
						className='text-xl font-bold gradient-text cursor-pointer
              hover:opacity-80 transition-opacity duration-200'
						onClick={() => {
							window.scrollTo({
								top: 0,
								behavior: 'smooth',
							})
						}}
					>
						Makori
					</motion.h2>

					{/* Social Links */}
					<motion.div
						initial={{ opacity: 0, y: 20 }}
						animate={{ opacity: 1, y: 0 }}
						className='flex space-x-6'
					>
						{socialLinks.map((link) => (
							<motion.a
								key={link.label}
								href={link.href}
								target='_blank'
								rel='noopener noreferrer'
								className='p-2 rounded-lg text-[rgb(var(--primary-light))] 
                  hover:bg-[rgb(var(--primary-light))]/10 
                  transition-colors duration-200'
								aria-label={link.label}
								whileHover={{ scale: 1.05 }}
								whileTap={{ scale: 0.95 }}
							>
								{link.icon}
							</motion.a>
						))}
					</motion.div>

					{/* Copyright */}
					<motion.p
						initial={{ opacity: 0 }}
						animate={{ opacity: 1 }}
						className='text-gray-600 dark:text-gray-400 text-sm'
					>
						© {currentYear} Lawrence Makori. All rights reserved.
					</motion.p>
				</div>
			</div>
		</footer>
	)
}
