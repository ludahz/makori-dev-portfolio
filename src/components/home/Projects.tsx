'use client'

import { FC, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Search, X } from 'lucide-react'
import { SectionTitle } from '@/components/shared/SectionTitle'
import { projects } from '@/constants/projects'
import { Section } from '../Layout/Section'
import { ProjectCard } from '../shared/ProjectCard'

export const Projects: FC = () => {
	const [searchTerm, setSearchTerm] = useState('')
	const [selectedType, setSelectedType] = useState<
		'All' | 'Professional' | 'Personal'
	>('All')
	const [currentPage, setCurrentPage] = useState(1)
	const projectsPerPage = 4

	const allTechStacks = Array.from(
		new Set(projects.flatMap((project) => project.tech))
	)

	const handleClearSearch = () => {
		setSearchTerm('')
		setCurrentPage(1)
	}

	const filteredProjects = projects.filter((project) => {
		const matchesSearch =
			project.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
			project.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
			project.tech.some((tech) =>
				tech.toLowerCase().includes(searchTerm.toLowerCase())
			)

		const matchesType = selectedType === 'All' || project.type === selectedType

		return matchesSearch && matchesType
	})

	const indexOfLastProject = currentPage * projectsPerPage
	const indexOfFirstProject = indexOfLastProject - projectsPerPage
	const currentProjects = filteredProjects.slice(
		indexOfFirstProject,
		indexOfLastProject
	)
	const totalPages = Math.ceil(filteredProjects.length / projectsPerPage)

	return (
		<Section id='projects' className='py-20 relative'>
			{/* Gradient overlay */}
			<div className='absolute inset-0 bg-gradient-to-br from-[rgb(var(--primary-light))/5] to-transparent' />

			<div className='relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8'>
				<SectionTitle>Featured Projects</SectionTitle>

				{/* Filters and Search */}
				<div className='mt-8 mb-12 space-y-4 md:space-y-0 md:flex md:items-center md:justify-between'>
					<div className='flex items-center space-x-4'>
						<div className='relative'>
							<Search
								className='absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400'
								size={20}
							/>
							<input
								type='text'
								placeholder='Search projects...'
								value={searchTerm}
								onChange={(e) => {
									setSearchTerm(e.target.value)
									setCurrentPage(1)
								}}
								className='pl-10 pr-10 py-2 rounded-lg 
                                border border-[rgb(var(--primary-light))/10
                                hover:border-[rgb(var(--primary-light))/20
                                bg-[var(--card-light)] dark:bg-[var(--card-dark)]
                                text-gray-900 dark:text-white 
                                focus:ring-2 focus:ring-[rgb(var(--primary-light))/30
                                outline-none w-56
                                transition-all duration-300'
							/>
							{searchTerm && (
								<button
									onClick={handleClearSearch}
									className='absolute right-3 top-1/2 transform -translate-y-1/2 
                                    text-gray-400 hover:text-gray-600 dark:hover:text-gray-200'
								>
									<X size={16} />
								</button>
							)}
						</div>

						<select
							value={selectedType}
							onChange={(e) => {
								setSelectedType(
									e.target.value as 'All' | 'Professional' | 'Personal'
								)
								setCurrentPage(1)
							}}
							className='px-4 py-2 rounded-lg
                            border border-[rgb(var(--primary-light))/10
                            hover:border-[rgb(var(--primary-light))/20
                            bg-[var(--card-light)] dark:bg-[var(--card-dark)]
                            text-gray-900 dark:text-white
                            focus:ring-2 focus:ring-[rgb(var(--primary-light))/30
                            outline-none
                            transition-all duration-300'
						>
							<option value='All'>All Projects</option>
							<option value='Professional'>Professional</option>
							<option value='Personal'>Personal</option>
						</select>
					</div>

					{/* Tech Stack Tags */}
					<div className='flex flex-wrap gap-2'>
						{allTechStacks.slice(0, 5).map((tech) => (
							<button
								key={tech}
								onClick={() => setSearchTerm(tech)}
								className={`px-3 py-1 text-sm rounded-full transition-all duration-300
                                ${
																	searchTerm === tech
																		? 'bg-gradient-to-r from-[rgb(var(--primary-light))] to-[rgb(var(--accent-light))] text-white'
																		: 'bg-[rgb(var(--primary-light))/10 text-gray-900 dark:text-white hover:bg-[rgb(var(--primary-light))/20'
																}`}
							>
								{tech}
							</button>
						))}
					</div>
				</div>

				{/* Projects Grid */}
				<AnimatePresence mode='wait'>
					<motion.div
						key={selectedType + currentPage}
						initial={{ opacity: 0, y: 20 }}
						animate={{ opacity: 1, y: 0 }}
						exit={{ opacity: 0, y: -20 }}
						className='grid grid-cols-1 md:grid-cols-2 gap-8'
					>
						{currentProjects.map((project, index) => (
							<ProjectCard key={project.id} project={project} index={index} />
						))}
					</motion.div>
				</AnimatePresence>

				{/* Pagination */}
				{totalPages > 1 && (
					<div className='mt-12 flex justify-center space-x-2'>
						{Array.from({ length: totalPages }, (_, i) => i + 1).map(
							(pageNum) => (
								<button
									key={pageNum}
									onClick={() => setCurrentPage(pageNum)}
									className={`px-4 py-2 rounded-lg transition-all duration-300
                                ${
																	pageNum === currentPage
																		? 'bg-gradient-to-r from-[rgb(var(--primary-light))] to-[rgb(var(--accent-light))] text-white'
																		: 'bg-[rgb(var(--primary-light))/10 text-gray-900 dark:text-white hover:bg-[rgb(var(--primary-light))/20'
																}`}
								>
									{pageNum}
								</button>
							)
						)}
					</div>
				)}

				{/* No Results */}
				{currentProjects.length === 0 && (
					<motion.div
						initial={{ opacity: 0 }}
						animate={{ opacity: 1 }}
						className='text-center py-12'
					>
						<p className='text-gray-600 dark:text-gray-400'>
							No projects found matching your criteria.
						</p>
					</motion.div>
				)}
			</div>
		</Section>
	)
}
