'use client'

import { Section } from '../Layout/Section'
import { HeroContent } from './HeroContent'

import { ScrollIndicator } from './ScrollIndicator'

export function Hero() {
	return (
		<Section isDark className='min-h-[100vh] flex items-center justify-center '>
			<div className='relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-20'>
				<HeroContent />
			</div>

			<ScrollIndicator />
		</Section>
	)
}

export default Hero
