// src/components/home/Skills.tsx
'use client'

import { FC } from 'react'
import { motion } from 'framer-motion'
import { SectionTitle } from '../shared/SectionTitle'
import { skills } from '@/constants/skills'
import { SkillBadge } from '../shared/SkillBadge'
import { Skill } from '@/types'
import { Section } from '../Layout/Section'

export const Skills: FC = () => {
	return (
		<Section isDark className='py-20 relative'>
			{/* Gradient overlay */}
			<div className='absolute inset-0 bg-gradient-to-br from-[rgb(var(--primary-light))/5] to-transparent' />

			<div className='relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8'>
				<SectionTitle>Skills & Expertise</SectionTitle>
				<div className='grid grid-cols-1 md:grid-cols-3 gap-8 mt-12'>
					{skills.map((skillGroup: Skill, index: number) => (
						<motion.div
							key={skillGroup.category}
							initial={{ opacity: 0, y: 20 }}
							animate={{ opacity: 1, y: 0 }}
							transition={{ delay: index * 0.1 }}
							className='bg-[var(--card-light)] dark:bg-[var(--card-dark)]
                        backdrop-blur-sm rounded-lg p-6
                        border border-[rgb(var(--primary-light))/10 
                        hover:border-[rgb(var(--primary-light))/20
                        shadow-sm hover:shadow-md
                        transition-all duration-300'
						>
							{/* Category header with gradient accent */}
							<div className='relative mb-4 flex items-center'>
								<div
									className='absolute -left-2 w-1 h-8
                              bg-gradient-to-b from-[rgb(var(--primary-light))] 
                              to-[rgb(var(--accent-light))] rounded-full'
								/>
								<h3 className='text-lg font-semibold ml-4 text-gray-900 dark:text-white'>
									{skillGroup.category}
								</h3>
							</div>

							{/* Skills grid */}
							<div className='flex flex-wrap gap-2'>
								{skillGroup.items.map((skill) => (
									<SkillBadge key={skill} skill={skill} />
								))}
							</div>
						</motion.div>
					))}
				</div>
			</div>
		</Section>
	)
}
