// import { Hero } from '@/components/home/Hero'
import { About } from '@/components/home/About'
import Hero from '@/components/home/Hero'
import { Skills } from '@/components/home/Skills'
import { Navbar } from '@/components/Layout/Navbar'
import Image from 'next/image'

export default function Home() {
	return (
		<>
			<Navbar />
			<Hero />
			<About />
			<Skills />
		</>
	)
}
