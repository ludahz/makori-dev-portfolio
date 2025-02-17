'use client'

import { JSX, useState, useEffect } from 'react'
import { User, Code, Briefcase, Mail, Home } from 'lucide-react'

interface NavigationItem {
	title: string
	href: string
	icon: JSX.Element
}

interface NavigationProps {
	isMobile?: boolean
}

export function Navigation({ isMobile = false }: NavigationProps): JSX.Element {
	const [activeSection, setActiveSection] = useState<string>('')

	const navigationItems: NavigationItem[] = [
		{ title: 'About', href: '#about', icon: <User size={18} /> },
		{ title: 'Skills', href: '#skills', icon: <Code size={18} /> },
		{ title: 'Projects', href: '#projects', icon: <Briefcase size={18} /> },
		{ title: 'Work', href: '#experience', icon: <Home size={18} /> },
		{ title: 'Contact', href: '#contact', icon: <Mail size={18} /> },
	]

	useEffect(() => {
		const handleScroll = () => {
			const sections = navigationItems
				.map((item) => document.getElementById(item.href.replace('#', '')))
				.filter((section): section is HTMLElement => section !== null)

			const scrollPosition = window.scrollY + window.innerHeight / 3

			for (const section of sections) {
				const sectionTop = section.offsetTop
				const sectionBottom = sectionTop + section.offsetHeight

				if (scrollPosition >= sectionTop && scrollPosition < sectionBottom) {
					setActiveSection(section.id)
					break
				}
			}
		}

		handleScroll()
		window.addEventListener('scroll', handleScroll, { passive: true })

		return () => {
			window.removeEventListener('scroll', handleScroll)
		}
	}, [])

	const scrollToSection = (sectionId: string) => {
		const section = document.getElementById(sectionId)
		if (section) {
			const offset = 90 // Adjust this value based on your navbar height
			const bodyRect = document.body.getBoundingClientRect().top
			const sectionRect = section.getBoundingClientRect().top
			const sectionPosition = sectionRect - bodyRect
			const offsetPosition = sectionPosition - offset

			window.scrollTo({
				top: offsetPosition,
				behavior: 'smooth',
			})
		}
	}

	return (
		<div className={`flex ${isMobile ? 'flex-col space-y-2' : 'space-x-4'}`}>
			{navigationItems.map((item) => (
				<a
					key={item.href}
					href={item.href}
					onClick={(e) => {
						e.preventDefault()
						scrollToSection(item.href.replace('#', ''))
						setActiveSection(item.href.replace('#', ''))
					}}
					className={`nav-link ${
						activeSection === item.href.replace('#', '')
							? 'nav-link-active'
							: ''
					}`}
				>
					{item.icon}
					<span className='ml-2'>{item.title}</span>
				</a>
			))}
		</div>
	)
}
