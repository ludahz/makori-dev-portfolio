import React from 'react'

import { SectionTitle } from '../shared/SectionTitle'

interface SectionProps {
	children: React.ReactNode
	title?: string
	isDark?: boolean
	className?: string
}

export const Section: React.FC<SectionProps> = ({
	children,
	title,
	isDark = false,
	className = '',
}) => {
	// const sectionStyles = isDark
	// 	? 'bg-[var(--surface-light)] dark:bg-[var(--section-dark)]'
	// 	: 'bg-[var(--section-lighter)]'

	const sectionStyles = isDark
		? 'bg-[var(--section-light)] dark:bg-[var(--section-dark)]'
		: 'bg-[var(--section-light-alt)] dark:bg-[var(--section-dark-alt)]'

	return (
		<section className={`py-20 relative ${sectionStyles} ${className}`}>
			{/* Gradient overlay */}
			<div className='absolute inset-0 bg-gradient-to-br from-[rgb(var(--primary-light))/5] to-transparent' />

			<div className='relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8'>
				{title && <SectionTitle>{title}</SectionTitle>}
				{children}
			</div>
		</section>
	)
}
