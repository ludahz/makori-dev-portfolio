// src/types/index.ts
// export interface Project {
// 	id: string
// 	title: string
// 	description: string
// 	imageUrl: string
// 	liveUrl?: string
// 	githubUrl?: string
// 	tech: string[]
// 	type: 'Professional' | 'Personal'
// }

export interface Project {
	id: string
	title: string
	description: string
	images: {
		url: string
		alt: string
	}[]
	liveUrl?: string
	githubUrl?: string
	tech: string[]
	type: 'Professional' | 'Personal'
}

export interface Experience {
	company: string
	position: string
	period: string
	projects: string[]
	technologies: string[]
}

export interface Skill {
	category: string
	items: string[]
}
