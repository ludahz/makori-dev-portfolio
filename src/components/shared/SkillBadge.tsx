import { FC } from 'react'

interface SkillBadgeProps {
	skill: string
}

export const SkillBadge: FC<SkillBadgeProps> = ({ skill }) => {
	return (
		<span className='relative group'>
			{/* Background with gradient on hover */}
			<span
				className='absolute inset-0 bg-gradient-to-r from-[rgb(var(--primary-light))] to-[rgb(var(--accent-light))]
                   opacity-0 group-hover:opacity-10 rounded-lg transition-all duration-300'
			/>

			{/* Skill badge */}
			<span
				className='relative block px-2 py-1.5 rounded-lg text-sm font-medium
						bg-[var(--badge-bg-light)] dark:bg-[var(--badge-bg-dark)]
				       text-[var(--badge-text-light)] dark:text-[var(--badge-text-dark)]
				       border border-[var(--badge-border-light)] dark:border-[var(--badge-border-dark)]
				       hover:bg-[var(--badge-bg-light)]/80 dark:hover:bg-[var(--badge-bg-dark)]/80
				       hover:border-[var(--badge-border-light)]/80 dark:hover:border-[var(--badge-border-dark)]/80
					   shadow-sm dark:shadow-none
				       transition-all duration-300'
			>
				{skill}
			</span>
		</span>
	)
}

export default SkillBadge
