import { FC } from 'react'

interface SkillBadgeProps {
	skill: string
}

export const SkillBadge: FC<SkillBadgeProps> = ({ skill }) => {
	return (
		// 	<span className='relative group'>
		// 		{/* Background with gradient on hover */}
		// 		<span
		// 			className='absolute inset-0 bg-gradient-to-r from-[rgb(var(--primary-light))] to-[rgb(var(--accent-light))]
		//                opacity-0 group-hover:opacity-10 rounded-lg transition-all duration-300'
		// 		/>

		// 		{/* Skill badge */}
		// 		{/* <span
		// 			// bg-[var(--badge-bg-light)] dark:bg-[var(--badge-bg-dark)]
		// 			className='relative block px-2 py-1.5 rounded-lg text-sm font-medium
		// 		bg-[rgb(var(--badge-bg-light))]
		// 			       text-[var(--badge-text-light)] dark:text-[var(--badge-text-dark)]
		// 			       border border-[var(--badge-border-light)] dark:border-[var(--badge-border-dark)]
		// 			       hover:bg-[var(--badge-bg-light)]/80 dark:hover:bg-[var(--badge-bg-dark)]/10
		// 			       hover:border-[var(--badge-border-light)]/80 dark:hover:border-[var(--badge-border-dark)]/80
		// 				   shadow-sm dark:shadow-none
		// 			       transition-all duration-300'
		// 		>
		// 			{skill}
		// 		</span> */}
		// 		{/* bg-[rgb(var(--badge-bg-light),0.2)] dark:bg-[rgb(var(--badge-bg-dark),0.2)]
		// text-[rgb(var(--badge-text-light))] dark:text-[rgb(var(--badge-text-dark))]

		// border border-[rgb(var(--badge-border-light))] border-opacity-20
		// dark:border-[rgb(var(--badge-border-dark))] dark:border-opacity-10 */}
		// 		<span
		// 			className='relative inline-flex px-2 py-1.5 rounded-lg text-sm font-medium
		// 			bg-[rgb(var(--primary-light),0.05)]

		//                           text-[rgb(var(--primary-light))]
		//                           border border-[rgb(var(--primary-light),0.2)]

		// hover:bg-opacity-20 dark:hover:bg-opacity-20
		// hover:border-opacity-30 dark:hover:border-opacity-30
		// shadow-sm dark:shadow-none
		// transition-all duration-300'
		// 		>
		// 			{skill}
		// 		</span>
		// 	</span>
		<span className='badge'>{skill}</span>
	)
}

export default SkillBadge
