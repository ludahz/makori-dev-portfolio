'use client'

import { FaGithub, FaLinkedin } from 'react-icons/fa'
import { Mail } from 'lucide-react'
import { SocialLink } from '../shared/SocialLink'

export function HeroContent() {
	return (
		<div className='text-center animate-fade-up'>
			<h1 className='text-6xl sm:text-7xl font-bold highlight-text  mb-8 animate-fade-up delay-500'>
				Hi, I&apos;m{' '}
				<span className='gradient-text relative inline-block'>
					Makori
					<span className='absolute -bottom-2 left-0 w-full h-0.5 bg-gradient-primary dark:bg-gradient-primary-dark rounded-full opacity-70 animate-grow-width delay-2000' />
				</span>
			</h1>

			<h2 className='text-3xl sm:text-4xl font-semibold highlight-text-secondary mb-8 animate-fade-up delay-1000'>
				Full Stack Developer
			</h2>

			<p className='text-xl text-gray-400/90 mb-12 max-w-2xl mx-auto leading-relaxed animate-fade-up delay-1500'>
				I build exceptional digital experiences with modern web technologies.
				Specializing in React, Next.js, and Node.js development.
			</p>

			<div className='flex justify-center space-x-8 animate-fade-up delay-2000'>
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
		</div>
	)
}
