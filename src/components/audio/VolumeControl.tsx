import React, { useState, useEffect, useCallback } from 'react'
import { Volume2, VolumeX } from 'lucide-react'
import { IPlayerControls } from '@/other/player'

interface VolumeControlProps {
	volume: number
	isMuted: boolean
	controls: IPlayerControls
}

export const VolumeControl: React.FC<VolumeControlProps> = ({
	volume,
	isMuted,
	controls,
}) => {
	const [isVisible, setIsVisible] = useState(false)
	const [localVolume, setLocalVolume] = useState(volume)

	// Update local volume when prop changes
	useEffect(() => {
		setLocalVolume(volume)
	}, [volume])

	const handleVolumeChange = useCallback(
		(e: React.ChangeEvent<HTMLInputElement>) => {
			const newVolume = Number(e.target.value)
			setLocalVolume(newVolume)
			controls.setVolume(newVolume)
		},
		[controls]
	)

	const handleMouseWheel = useCallback(
		(e: Event) => {
			const wheelEvent = e as WheelEvent
			if (isVisible) {
				wheelEvent.preventDefault()
				const delta = wheelEvent.deltaY > 0 ? -0.1 : 0.1
				const newVolume = Math.max(0, Math.min(1, localVolume + delta))
				setLocalVolume(newVolume)
				controls.setVolume(newVolume)
			}
		},
		[isVisible, localVolume, controls]
	)

	useEffect(() => {
		const volumeSlider = document.querySelector('.volume-slider')
		if (volumeSlider) {
			// Type assertion to EventListener
			volumeSlider.addEventListener('wheel', handleMouseWheel as EventListener)
		}
		return () => {
			if (volumeSlider) {
				volumeSlider.removeEventListener(
					'wheel',
					handleMouseWheel as EventListener
				)
			}
		}
	}, [handleMouseWheel])

	return (
		<div className='relative'>
			<button
				className='p-1.5 hover:bg-white/10 rounded-full transition-colors'
				onClick={controls.toggleMute}
				onMouseEnter={() => setIsVisible(true)}
			>
				{isMuted ? <VolumeX size={16} /> : <Volume2 size={16} />}
			</button>

			{isVisible && (
				<div
					className='absolute bottom-full left-0 mb-2 p-2 bg-black/90 rounded-lg'
					onMouseLeave={() => setIsVisible(false)}
				>
					<input
						type='range'
						min='0'
						max='1'
						step='0.01'
						value={localVolume}
						onChange={handleVolumeChange}
						className='volume-slider w-24 h-1 bg-white/20 rounded-lg appearance-none cursor-pointer'
						style={{
							backgroundSize: `${localVolume * 100}% 100%`,
							backgroundImage: 'linear-gradient(to right, white, white)',
							backgroundRepeat: 'no-repeat',
						}}
					/>
				</div>
			)}
		</div>
	)
}
