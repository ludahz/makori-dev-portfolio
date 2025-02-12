// src/components/shared/SectionTitle.tsx
import { FC } from 'react'
interface SectionTitleProps {
	children: React.ReactNode
}

export const SectionTitle: FC<SectionTitleProps> = ({ children }) => {
	return (
		<div className='relative'>
			<h2 className='text-4xl font-bold text-center highlight-text mb-4'>
				{children}
			</h2>
			<div
				className='absolute left-1/2 -bottom-2 transform -translate-x-1/2 
                    w-24 h-1 rounded-full
                    bg-gradient-to-r from-[rgb(var(--primary-light))] to-[rgb(var(--accent-light))]'
			/>
		</div>
	)
}
