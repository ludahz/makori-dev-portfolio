'use client'

import { motion } from 'framer-motion'

export function ScrollIndicator() {
	return (
		<motion.div
			initial={{ opacity: 0 }}
			animate={{ opacity: 0.7 }}
			transition={{ delay: 2.5, duration: 2 }}
			className='absolute bottom-8 left-1/2 transform -translate-x-1/2'
		>
			<motion.div
				animate={{
					y: [0, 8, 0],
				}}
				transition={{
					duration: 5,
					repeat: Infinity,
					repeatType: 'loop',
					ease: 'easeInOut',
				}}
				className='flex flex-col items-center'
			>
				<span className='text-gray-400/70 text-sm mb-2'>Scroll</span>
				<div className='w-5 h-8 border-2 border-gray-400/20 rounded-full p-1'>
					<motion.div
						animate={{
							y: [0, 12, 0],
						}}
						transition={{
							duration: 5,
							repeat: Infinity,
							repeatType: 'loop',
							ease: 'easeInOut',
						}}
						className='w-1 h-2 bg-gradient-to-b from-[rgb(var(--primary-light))] to-[rgb(var(--accent-light))] rounded-full opacity-50'
					/>
				</div>
			</motion.div>
		</motion.div>
	)
}
