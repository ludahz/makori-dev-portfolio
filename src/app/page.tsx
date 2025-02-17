// import { Hero } from '@/components/home/Hero'
import { About } from '@/components/home/About'
import Contact from '@/components/home/Contact'
import { Experience } from '@/components/home/Experience'
import Hero from '@/components/home/Hero'
import { Projects } from '@/components/home/Projects'

import { Skills } from '@/components/home/Skills'
import { Navbar } from '@/components/Layout/Navbar'

export default function Home() {
	return (
		<>
			<Navbar />
			<Hero />
			<About />
			<Skills />
			<Projects />
			<Experience />
			<Contact />
		</>
	)
}
