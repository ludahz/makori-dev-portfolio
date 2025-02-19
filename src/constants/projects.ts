import { Project } from '@/types'
// import image from '/images/manta-reollo.png'

// src/constants/projects.ts
export const projects: Project[] = [
	{
		id: 'reollo-travel',
		title: 'Reollo Travel B2B Platform',
		description:
			'Built a comprehensive B2B travel booking platform with React and Node.js, featuring TourPlan API integration for real-time rates and bookings.',
		images: [
			{ url: '/images/reollo-1.png', alt: 'reollo-travel' },
			{ url: '/images/reollo-2.png', alt: 'reollo-travel' },
		],
		liveUrl: 'https://webconnect.reollo.travel/',
		githubUrl: 'https://github.com/reollo-travel/reollo-b2b-2023',
		tech: ['React', 'Node.js', 'API Integration', 'TypeScript'],
		type: 'Professional',
	},
	{
		id: 'manta-reollo',
		title: 'Manta-Reollo Travel Platform',
		description:
			'Promotional website for Reollo Travel featuring Manta Air direct flights from Bengaluru to Maldives. Built with Next.js and TypeScript, featuring an inquiry system that connects travelers with the reservation team. Showcases vacation packages including family packages, honeymoon specials, and adventure trips.',
		images: [{ url: '/images/manta-reollo.png', alt: 'manta-reollo' }],
		githubUrl: 'https://github.com/ludahz/next-manta-reollo-package',
		liveUrl: '',
		tech: [
			'Next.js',
			'TypeScript',
			'React',
			'Tailwind CSS',
			'Email Integration',
		],
		type: 'Professional',
	},
	{
		id: 'portfolio',
		title: 'Personal Portfolio',
		description:
			'Modern portfolio website built with Next.js and Tailwind CSS, featuring responsive design and dark mode support.',
		images: [{ url: '/images/makori-portfolio.png', alt: 'reollo-travel' }],

		githubUrl: 'https://github.com/ludahz/makori-dev-portfolio',
		liveUrl: 'https://makori-dev-portfolio.vercel.app/',
		tech: ['Next.js', 'Tailwind CSS', 'TypeScript'],
		type: 'Personal',
	},
]
