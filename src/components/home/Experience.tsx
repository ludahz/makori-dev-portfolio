'use client'

import { motion } from 'framer-motion'
import { SectionTitle } from '../shared/SectionTitle'
import { experience } from '@/constants/experience'
import { Calendar, Building2, Briefcase, ChevronRight } from 'lucide-react'
import { Section } from '../Layout/Section'

export function Experience() {
	return (
		<Section isDark id='experience' className='py-20'>
			<div className='max-w-5xl mx-auto px-4 sm:px-6 lg:px-8'>
				<SectionTitle>Work Experience</SectionTitle>
				<div className='mt-12 space-y-8'>
					{experience.map((job, index) => (
						<motion.div
							key={`${job.company}-${job.period}`}
							initial={{ opacity: 0, x: -20 }}
							animate={{ opacity: 1, x: 0 }}
							transition={{ delay: index * 0.1 }}
							className='group bg-[var(--card-light)] dark:bg-[var(--card-dark)] 
                       rounded-lg p-6 shadow-lg hover:shadow-xl 
                       
                       transition-all duration-300'
						>
							<div className='flex flex-col space-y-4'>
								{/* Header Section */}
								<div className='flex flex-col md:flex-row md:items-start md:justify-between'>
									{/* Title and Company */}
									<div className='space-y-2'>
										{/* Job Title */}
										<div className='flex items-center space-x-2'>
											<div
												className='p-2 rounded-lg bg-[rgb(var(--primary-light),0.1)]
                                  group-hover:bg-[rgb(var(--primary-light),0.2)]
                                  transition-colors duration-300'
											>
												<Briefcase
													className='text-[rgb(var(--primary-light))]'
													size={20}
												/>
											</div>
											<h3 className='text-xl font-semibold text-gray-900 dark:text-white'>
												{job.position}
											</h3>
										</div>

										{/* Company */}
										<div className='flex items-center space-x-2 ml-1'>
											<Building2
												className='text-gray-400 dark:text-gray-500'
												size={18}
											/>
											<span className='text-lg text-[rgb(var(--primary-light))] dark:text-[rgb(var(--primary-light))]'>
												{job.company}
											</span>
										</div>
									</div>

									{/* Period */}
									<div
										className='mt-2 md:mt-0 flex items-center space-x-2 
                              px-3 py-1.5 rounded-full max-w-fit
                              bg-[rgb(var(--primary-light),0.05)]
                              border border-[rgb(var(--primary-light),0.3)]
                              group-hover:border-[rgb(var(--primary-light),0.5)]
                              transition-all duration-300'
									>
										<Calendar
											className='text-[rgb(var(--primary-light))]'
											size={16}
										/>
										<span className='text-sm text-gray-600 dark:text-gray-300'>
											{job.period}
										</span>
									</div>
								</div>

								{/* Projects List */}
								<div className='mt-2 pl-1'>
									<ul className='space-y-2'>
										{job.projects.map((project, projectIndex) => (
											<li
												key={projectIndex}
												className='flex items-start space-x-2 text-gray-600 dark:text-gray-300'
											>
												<ChevronRight
													className='mt-1 flex-shrink-0 text-[rgb(var(--primary-light))]'
													size={16}
												/>
												<span className='leading-relaxed'>{project}</span>
											</li>
										))}
									</ul>
								</div>

								{/* Technologies */}
								<div className='mt-4 flex flex-wrap gap-2'>
									{job.technologies.map((tech) => (
										// 			<span
										// 				key={tech}
										// 				className='px-3 py-1 text-sm rounded-full
										//   bg-[rgb(var(--primary-light),0.05)]
										//   text-[rgb(var(--primary-light))]
										//   border border-[rgb(var(--primary-light),0.2)]
										//   group-hover:border-[rgb(var(--primary-light),0.5)]
										//   transition-all duration-300'
										// 			>
										// 				{tech}
										// 			</span>
										<span
											key={tech}
											className='badge badge-outlined group-hover:border-[rgb(var(--accent-dark),0.9)]'
										>
											{tech}
										</span>
									))}
								</div>
							</div>
						</motion.div>
					))}
				</div>
			</div>
		</Section>
	)
}
