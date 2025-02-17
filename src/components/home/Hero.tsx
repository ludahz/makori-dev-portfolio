import { Section } from '../Layout/Section'
import { HeroContent } from './HeroContent'
import { ScrollIndicator } from './ScrollIndicator'

export function Hero() {
	return (
		<Section isDark className='h-screen w-full'>
			<div className='h-full w-full flex flex-col justify-center items-center relative'>
				<div className='w-full max-w-5xl px-4 sm:px-6 lg:px-8'>
					<HeroContent />
				</div>
				<ScrollIndicator />
			</div>
		</Section>
	)
}

export default Hero
