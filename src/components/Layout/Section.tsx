import React from 'react'

import { SectionTitle } from '../shared/SectionTitle'

interface SectionProps {
	children: React.ReactNode
	title?: string
	isDark?: boolean
	className?: string
	id?: string
}

export const Section: React.FC<SectionProps> = ({
	children,
	title,
	isDark = false,
	className = '',
	id = '',
}) => {
	const sectionStyles = isDark
		? 'bg-[var(--section-light)] dark:bg-[var(--section-dark)]'
		: 'bg-[var(--section-light-alt)] dark:bg-[var(--section-dark-alt)]'

	return (
		<section
			id={id}
			className={`py-20 w-full h-full ${sectionStyles} ${className}`}
		>
			{/* Gradient overlay */}
			<div className='absolute inset-0 bg-gradient-to-br from-[rgb(var(--primary-light))/5] to-transparent' />

			<div className='relative z-10 h-full max-w-5xl mx-auto '>
				{title && <SectionTitle>{title}</SectionTitle>}
				{children}
			</div>
		</section>
	)
}
