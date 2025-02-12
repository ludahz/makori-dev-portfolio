import { AudioPlayerState, IPlayerControls, Track } from '@/other/player'
import { useMetadataExtractor } from './useMetadataExtractor'
import { useRef } from 'react'

type MutableRef<T> = { current: T }

export const useAudioControls = (
	audioRef: MutableRef<HTMLAudioElement | null>,
	loadingRef: MutableRef<boolean>,
	state: AudioPlayerState,
	setState: (updater: (prev: AudioPlayerState) => AudioPlayerState) => void
): IPlayerControls => {
	const { extractMetadata } = useMetadataExtractor()
	let playPromiseRef = useRef<Promise<void> | null>(null)

	const controls: IPlayerControls = {
		// Replace the play and togglePlay functions in useAudioControls

		async play() {
			if (!audioRef.current || state.isLoading) return

			try {
				console.log('Play called')
				const playPromise = audioRef.current.play()
				if (playPromise !== undefined) {
					await playPromise
					setState((prev) => ({ ...prev, isPlaying: true }))
					console.log('Play successful')
				}
			} catch (error) {
				if (error instanceof Error && error.name !== 'AbortError') {
					console.error('Error playing audio:', error)
					setState((prev) => ({ ...prev, isPlaying: false }))
				}
			}
		},

		async pause() {
			if (!audioRef.current) return
			console.log('Pause called')
			audioRef.current.pause()
			setState((prev) => ({ ...prev, isPlaying: false }))
		},

		togglePlay() {
			console.log('Toggle play called, current state:', state.isPlaying)
			if (state.isPlaying) {
				controls.pause()
			} else {
				controls.play()
			}
		},

		async playTrack(index: number) {
			if (index < 0 || index >= state.tracks.length || !audioRef.current) return

			const track = state.tracks[index]
			try {
				loadingRef.current = true

				// First update state
				setState((prev) => ({
					...prev,
					isLoading: true,
					currentTrackIndex: index,
					metadata: {
						title:
							track.metadata.title || track.file.name.replace(/\.[^/.]+$/, ''),
						artist: track.metadata.artist,
						album: track.metadata.album,
						picture: track.metadata.picture,
					},
					albumArt: track.metadata.picture || '/api/placeholder/300/300',
					isPlaying: false,
					currentTime: 0,
					duration: 0,
				}))

				// Then handle audio
				if (audioRef.current.src) {
					audioRef.current.pause()
					URL.revokeObjectURL(audioRef.current.src)
				}

				// Set new source and load
				audioRef.current.src = track.url
				audioRef.current.load()

				// Wait for metadata to load
				await new Promise((resolve) => {
					const handleMetadata = () => {
						audioRef.current?.removeEventListener(
							'loadedmetadata',
							handleMetadata
						)
						resolve(null)
					}
					audioRef.current?.addEventListener('loadedmetadata', handleMetadata)
				})

				// Start playback
				try {
					await audioRef.current.play()
					setState((prev) => ({ ...prev, isPlaying: true }))
				} catch (error) {
					if (error instanceof Error && error.name !== 'AbortError') {
						console.error('Playback failed:', error)
						setState((prev) => ({ ...prev, isPlaying: false }))
					}
				} finally {
					setState((prev) => ({ ...prev, isLoading: false }))
					loadingRef.current = false
				}
			} catch (error) {
				console.error('Error in playTrack:', error)
				setState((prev) => ({
					...prev,
					isLoading: false,
					isPlaying: false,
				}))
				loadingRef.current = false
			}
		},

		async loadFile(file: File) {
			try {
				const metadata = await extractMetadata(file)
				const url = URL.createObjectURL(file)
				const newTrack: Track = {
					id: Math.random().toString(36).substring(2, 9),
					file,
					metadata,
					url,
				}

				setState((prev) => {
					const newTracks = [...prev.tracks, newTrack]
					return {
						...prev,
						tracks: newTracks,
						currentTrackIndex:
							prev.currentTrackIndex === -1
								? newTracks.length - 1
								: prev.currentTrackIndex,
					}
				})

				if (state.currentTrackIndex === -1) {
					await controls.playTrack(state.tracks.length)
				}
			} catch (error) {
				console.error('Error in loadFile:', error)
			}
		},

		async addTracks(files: FileList) {
			setState((prev) => ({ ...prev, isLoading: true }))
			try {
				const newTracks = await Promise.all(
					Array.from(files).map(async (file) => {
						const metadata = await extractMetadata(file)
						const url = URL.createObjectURL(file)
						return {
							id: Math.random().toString(36).substring(2, 9),
							file,
							metadata,
							url,
						}
					})
				)

				setState((prev) => ({
					...prev,
					tracks: [...prev.tracks, ...newTracks],
					currentTrackIndex:
						prev.currentTrackIndex === -1
							? prev.tracks.length
							: prev.currentTrackIndex,
					isLoading: false,
				}))

				if (state.currentTrackIndex === -1 && newTracks.length > 0) {
					await controls.playTrack(state.tracks.length)
				}
			} catch (error) {
				console.error('Error adding tracks:', error)
				setState((prev) => ({ ...prev, isLoading: false }))
			}
		},

		nextTrack: () => controls.playTrack(state.currentTrackIndex + 1),
		previousTrack: () => controls.playTrack(state.currentTrackIndex - 1),

		seek(time: number) {
			if (audioRef.current) audioRef.current.currentTime = time
		},

		setVolume(volume: number) {
			if (!audioRef.current) return
			const clampedVolume = Math.max(0, Math.min(1, volume))
			audioRef.current.volume = clampedVolume
			setState((prev) => ({
				...prev,
				volume: clampedVolume,
				isMuted: clampedVolume === 0,
			}))
		},

		toggleMute() {
			if (!audioRef.current) return
			const newMutedState = !state.isMuted
			audioRef.current.muted = newMutedState
			setState((prev) => ({ ...prev, isMuted: newMutedState }))
		},

		removeTrack(id: string) {
			setState((prev) => {
				const trackIndex = prev.tracks.findIndex((track) => track.id === id)
				const isCurrentTrack = trackIndex === prev.currentTrackIndex

				if (isCurrentTrack && audioRef.current?.src) {
					audioRef.current.pause()
					URL.revokeObjectURL(audioRef.current.src)
				}

				return {
					...prev,
					tracks: prev.tracks.filter((track) => track.id !== id),
					...(isCurrentTrack
						? {
								currentTrackIndex: -1,
								isPlaying: false,
								currentTime: 0,
								duration: 0,
								metadata: {},
								albumArt: '',
								isLoading: false,
						  }
						: {
								currentTrackIndex:
									trackIndex < prev.currentTrackIndex
										? prev.currentTrackIndex - 1
										: prev.currentTrackIndex,
						  }),
				}
			})
		},

		clearPlaylist() {
			if (!audioRef.current) return
			audioRef.current.pause()
			if (audioRef.current.src) URL.revokeObjectURL(audioRef.current.src)

			setState((prev) => ({
				...prev,
				tracks: [],
				currentTrackIndex: -1,
				isPlaying: false,
				currentTime: 0,
				duration: 0,
				metadata: {},
				albumArt: '',
				isLoading: false,
			}))
		},
	}

	return controls
}
