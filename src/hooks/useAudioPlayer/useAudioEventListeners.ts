import { AudioPlayerState, IPlayerControls } from '@/other/player'

type MutableRef<T> = { current: T }

export const useAudioEventListeners = (
	audioRef: MutableRef<HTMLAudioElement | null>,
	loadingRef: MutableRef<boolean>,
	setState: (updater: (prev: AudioPlayerState) => AudioPlayerState) => void,
	controls: IPlayerControls
) => {
	const setupAudioListeners = (audio: HTMLAudioElement) => {
		const handleTimeUpdate = () => {
			setState((prev) => ({ ...prev, currentTime: audio.currentTime || 0 }))
		}

		const handleLoadedMetadata = () => {
			console.log('Metadata loaded:', {
				duration: audio.duration,
				currentTime: audio.currentTime,
			})

			// Update duration immediately when metadata is loaded
			if (audio.duration && !isNaN(audio.duration)) {
				setState((prev) => ({
					...prev,
					duration: audio.duration,
					currentTime: audio.currentTime || 0,
				}))
			}
		}

		const handleDurationChange = () => {
			console.log('Duration changed:', audio.duration)
			if (audio.duration && !isNaN(audio.duration)) {
				setState((prev) => ({ ...prev, duration: audio.duration }))
			}
		}

		const handleCanPlay = async () => {
			console.log('Can play event triggered')
			setState((prev) => ({ ...prev, isLoading: false }))

			if (loadingRef.current) {
				try {
					console.log('Attempting autoplay')
					await audio.play()
					setState((prev) => ({ ...prev, isPlaying: true }))
				} catch (error) {
					if (error instanceof Error && error.name !== 'AbortError') {
						console.error('Autoplay failed:', error)
						setState((prev) => ({ ...prev, isPlaying: false }))
					}
				}
				loadingRef.current = false
			}
		}

		const handlePlay = () => {
			console.log('Play event fired')
			setState((prev) => ({ ...prev, isPlaying: true }))
		}

		const handlePause = () => {
			console.log('Pause event fired')
			setState((prev) => ({ ...prev, isPlaying: false }))
		}

		const handleEnded = () => {
			console.log('Track ended')
			setState((prev) => ({ ...prev, isPlaying: false, currentTime: 0 }))
			// Small delay before playing next track
			setTimeout(() => {
				controls.nextTrack()
			}, 100)
		}

		const handleError = () => {
			const error = audio.error
			console.error('Audio error:', error)
			setState((prev) => ({
				...prev,
				isLoading: false,
				isPlaying: false,
			}))
			loadingRef.current = false
		}

		const events: Record<string, EventListener> = {
			timeupdate: handleTimeUpdate,
			loadedmetadata: handleLoadedMetadata,
			durationchange: handleDurationChange,
			canplay: handleCanPlay,
			play: handlePlay,
			pause: handlePause,
			ended: handleEnded,
			error: handleError,
		}

		// Remove existing listeners first
		Object.entries(events).forEach(([event, handler]) => {
			audio.removeEventListener(event, handler)
		})

		// Add new listeners
		Object.entries(events).forEach(([event, handler]) => {
			audio.addEventListener(event, handler)
		})

		return () => {
			Object.entries(events).forEach(([event, handler]) => {
				audio.removeEventListener(event, handler)
			})
		}
	}

	return { setupAudioListeners }
}
