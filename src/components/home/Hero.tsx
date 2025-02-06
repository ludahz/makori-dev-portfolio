// 'use client'

// import { motion } from 'framer-motion'
// import { FaGithub, FaLinkedin } from 'react-icons/fa'
// import { Mail } from 'lucide-react'
// import { SocialLink } from '../shared/SocialLink'

// export function Hero() {
// 	const containerVariants = {
// 		hidden: { opacity: 0 },
// 		visible: {
// 			opacity: 1,
// 			transition: {
// 				staggerChildren: 0.2,
// 			},
// 		},
// 	}

// 	const itemVariants = {
// 		hidden: { opacity: 0, y: 20 },
// 		visible: {
// 			opacity: 1,
// 			y: 0,
// 			transition: {
// 				duration: 0.5,
// 			},
// 		},
// 	}

// 	return (
// 		<section
// 			id='#'
// 			className='relative min-h-[90vh] flex items-center justify-center bg-gradient-to-b from-primary/5 via-transparent to-accent/5 dark:from-primary/10 dark:via-transparent dark:to-accent/10 overflow-hidden'
// 		>
// 			{/* Background decorative elements */}
// 			<div className='absolute inset-0 overflow-hidden'>
// 				<div className='absolute -left-10 top-20 w-72 h-72 bg-primary/20 rounded-full blur-3xl' />
// 				<div className='absolute right-0 bottom-10 w-96 h-96 bg-accent/20 rounded-full blur-3xl' />
// 			</div>

// 			<div className='relative max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-20'>
// 				<motion.div
// 					variants={containerVariants}
// 					initial='hidden'
// 					animate='visible'
// 					className='text-center'
// 				>
// 					<motion.h1
// 						variants={itemVariants}
// 						className='text-5xl sm:text-6xl font-bold mb-6'
// 					>
// 						Hi, I'm <span className='gradient-text'>Makori</span>
// 					</motion.h1>

// 					<motion.h2
// 						variants={itemVariants}
// 						className='text-3xl sm:text-4xl font-semibold text-gray-700 dark:text-gray-300 mb-6'
// 					>
// 						Full Stack Developer
// 					</motion.h2>

// 					<motion.p
// 						variants={itemVariants}
// 						className='text-xl text-gray-600 dark:text-gray-400 mb-8 max-w-2xl mx-auto'
// 					>
// 						I build exceptional digital experiences with modern web
// 						technologies. Specializing in React, Next.js, and Node.js
// 						development.
// 					</motion.p>

// 					<motion.div
// 						variants={itemVariants}
// 						className='flex justify-center space-x-8'
// 					>
// 						<SocialLink
// 							href='https://github.com/ludahz'
// 							icon={<FaGithub size={24} />}
// 							label='Github'
// 							className='transform hover:scale-110 hover:text-primary dark:hover:text-primary-light transition-all duration-300'
// 						/>
// 						<SocialLink
// 							href='https://www.linkedin.com/in/makori-l-230bb348/'
// 							icon={<FaLinkedin size={24} />}
// 							label='LinkedIn'
// 							className='transform hover:scale-110 hover:text-primary dark:hover:text-primary-light transition-all duration-300'
// 						/>
// 						<SocialLink
// 							href='mailto:ludahmaxs@gmail.com'
// 							icon={<Mail size={24} />}
// 							label='Email'
// 							className='transform hover:scale-110 hover:text-primary dark:hover:text-primary-light transition-all duration-300'
// 						/>
// 					</motion.div>

// 					{/* Optional: Add a scroll indicator */}
// 					<motion.div
// 						initial={{ opacity: 0, y: 0 }}
// 						animate={{ opacity: 1, y: 10 }}
// 						transition={{
// 							duration: 1,
// 							repeat: Infinity,
// 							repeatType: 'reverse',
// 						}}
// 						className='absolute bottom-8 left-1/2 transform -translate-x-1/2'
// 					>
// 						<div className='w-6 h-10 border-2 border-gray-400 dark:border-gray-500 rounded-full p-1'>
// 							<div className='w-1.5 h-3 bg-gray-400 dark:bg-gray-500 rounded-full' />
// 						</div>
// 					</motion.div>
// 				</motion.div>
// 			</div>
// 		</section>
// 	)
// }

// src/components/home/Hero.tsx
'use client'

import { motion } from 'framer-motion'
import { FaGithub, FaLinkedin } from 'react-icons/fa'
import { Mail } from 'lucide-react'
import { SocialLink } from '../shared/SocialLink'

export function Hero() {
	return (
		<section
			id='/'
			className='min-h-[90vh] flex items-center justify-center bg-gradient-to-b from-surface-light to-white dark:from-surface-dark dark:to-black'
		>
			<div className='max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-20'>
				<motion.div
					initial={{ opacity: 0, y: 20 }}
					animate={{ opacity: 1, y: 0 }}
					transition={{ duration: 0.5 }}
					className='text-center'
				>
					<h1 className='text-5xl sm:text-6xl font-bold text-gray-900 dark:text-white mb-6'>
						Hi, I'm <span className='gradient-text'>Makori</span>
					</h1>
					<h2 className='text-3xl sm:text-4xl font-semibold text-gray-700 dark:text-gray-300 mb-6'>
						Full Stack Developer
					</h2>
					<p className='text-xl text-gray-600 dark:text-gray-400 mb-8 max-w-2xl mx-auto'>
						I build exceptional digital experiences with modern web
						technologies. Specializing in React, Next.js, and Node.js
						development.
					</p>
					<div className='flex justify-center space-x-6'>
						<SocialLink
							href='https://github.com/ludahz'
							icon={<FaGithub size={24} />}
							label='Github'
						/>
						<SocialLink
							href='https://www.linkedin.com/in/makori-l-230bb348/'
							icon={<FaLinkedin size={24} />}
							label='LinkedIn'
						/>
						<SocialLink
							href='mailto:ludahmaxs@gmail.com'
							icon={<Mail size={24} />}
							label='Email'
						/>
					</div>
				</motion.div>
				{/* Optional: Add a scroll indicator */}
				<motion.div
					initial={{ opacity: 0, y: 0 }}
					animate={{ opacity: 1, y: 10 }}
					transition={{
						duration: 1,
						repeat: Infinity,
						repeatType: 'reverse',
					}}
					className='absolute bottom-8 left-1/2 transform -translate-x-1/2'
				>
					<div className='w-6 h-10 border-2 border-gray-400 dark:border-gray-500 rounded-full p-1'>
						<div className='w-1.5 h-3 bg-gray-400 dark:bg-gray-500 rounded-full' />
					</div>
				</motion.div>
			</div>
		</section>
	)
}
