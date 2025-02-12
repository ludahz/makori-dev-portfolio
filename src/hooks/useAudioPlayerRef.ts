// import { useState, useRef, useEffect } from 'react'
// import * as musicMetadata from 'music-metadata-browser'
// import {
// 	AudioPlayerState,
// 	IPlayerControls,
// 	AudioMetadata,
// 	Track,
// } from '@/types/player'

// const DEFAULT_STATE: AudioPlayerState = {
// 	isPlaying: false,
// 	isMuted: false,
// 	volume: 1,
// 	currentTime: 0,
// 	duration: 0,
// 	currentTrackIndex: -1,
// 	tracks: [],
// 	metadata: {},
// 	albumArt: '',
// 	isLoading: false,
// }

// export const useAudioPlayer = (
// 	onAudioLoad?: (audio: HTMLAudioElement) => void
// ): { state: AudioPlayerState; controls: IPlayerControls } => {
// 	const [state, setState] = useState<AudioPlayerState>(DEFAULT_STATE)
// 	const audioRef = useRef<HTMLAudioElement | null>(null)
// 	const loadingRef = useRef<boolean>(false)

// 	useEffect(() => {
// 		const audio = new Audio()
// 		audio.volume = state.volume
// 		audioRef.current = audio

// 		if (onAudioLoad) {
// 			onAudioLoad(audio)
// 		}

// 		const cleanup = setupAudioListeners(audio)

// 		return () => {
// 			cleanup()
// 			if (audio.src) {
// 				audio.pause()
// 				URL.revokeObjectURL(audio.src)
// 			}
// 		}
// 	}, [])

// 	const extractMetadata = async (file: File): Promise<AudioMetadata> => {
// 		try {
// 			const metadata = await musicMetadata.parseBlob(file)
// 			let picture = ''

// 			if (metadata.common.picture?.[0]) {
// 				const { data, format } = metadata.common.picture[0]
// 				const base64String = arrayBufferToBase64(data)
// 				picture = `data:${format};base64,${base64String}`
// 			}

// 			return {
// 				title: metadata.common.title,
// 				artist: metadata.common.artist,
// 				album: metadata.common.album,
// 				picture,
// 			}
// 		} catch (error) {
// 			console.error('Error reading metadata:', error)
// 			return {}
// 		}
// 	}

// 	const arrayBufferToBase64 = (buffer: Uint8Array): string => {
// 		let binary = ''
// 		const bytes = new Uint8Array(buffer)
// 		for (let i = 0; i < bytes.byteLength; i++) {
// 			binary += String.fromCharCode(bytes[i])
// 		}
// 		return btoa(binary)
// 	}

// 	const setupAudioListeners = (audio: HTMLAudioElement) => {
// 		const handleTimeUpdate = () => {
// 			setState((prev) => ({ ...prev, currentTime: audio.currentTime }))
// 		}

// 		const handleLoadedMetadata = () => {
// 			setState((prev) => ({ ...prev, duration: audio.duration }))
// 		}

// 		const handleEnded = () => {
// 			setState((prev) => ({ ...prev, isPlaying: false, currentTime: 0 }))
// 			controls.nextTrack()
// 		}

// 		const handlePlay = () => {
// 			setState((prev) => ({ ...prev, isPlaying: true }))
// 		}

// 		const handlePause = () => {
// 			setState((prev) => ({ ...prev, isPlaying: false }))
// 		}

// 		const handleLoadStart = () => {
// 			setState((prev) => ({ ...prev, isLoading: true }))
// 		}

// 		const handleCanPlay = () => {
// 			setState((prev) => ({ ...prev, isLoading: false }))
// 			if (loadingRef.current) {
// 				setTimeout(() => {
// 					if (audioRef.current) {
// 						audioRef.current.play().catch((error) => {
// 							if (error.name !== 'AbortError') {
// 								console.error('Error playing audio:', error)
// 								setState((prev) => ({ ...prev, isPlaying: false }))
// 							}
// 						})
// 					}
// 				}, 100)
// 				loadingRef.current = false
// 			}
// 		}

// 		audio.addEventListener('timeupdate', handleTimeUpdate)
// 		audio.addEventListener('loadedmetadata', handleLoadedMetadata)
// 		audio.addEventListener('ended', handleEnded)
// 		audio.addEventListener('play', handlePlay)
// 		audio.addEventListener('pause', handlePause)
// 		audio.addEventListener('loadstart', handleLoadStart)
// 		audio.addEventListener('canplay', handleCanPlay)

// 		return () => {
// 			audio.removeEventListener('timeupdate', handleTimeUpdate)
// 			audio.removeEventListener('loadedmetadata', handleLoadedMetadata)
// 			audio.removeEventListener('ended', handleEnded)
// 			audio.removeEventListener('play', handlePlay)
// 			audio.removeEventListener('pause', handlePause)
// 			audio.removeEventListener('loadstart', handleLoadStart)
// 			audio.removeEventListener('canplay', handleCanPlay)
// 		}
// 	}

// 	const controls: IPlayerControls = {
// 		async play() {
// 			if (!audioRef.current || state.isLoading) return
// 			try {
// 				await audioRef.current.play()
// 			} catch (error) {
// 				if (error instanceof Error) {
// 					if (error.name !== 'AbortError') {
// 						console.error('Error playing audio:', error.message)
// 						setState((prev) => ({ ...prev, isPlaying: false }))
// 					}
// 				}
// 			}
// 		},

// 		async pause() {
// 			if (!audioRef.current || state.isLoading) return
// 			audioRef.current.pause()
// 		},

// 		async playTrack(index: number) {
// 			if (index < 0 || index >= state.tracks.length) return

// 			const track = state.tracks[index]
// 			if (!audioRef.current) return

// 			// Set loading state before anything else
// 			setState((prev) => ({
// 				...prev,
// 				isLoading: true,
// 				currentTrackIndex: index,
// 				metadata: track.metadata,
// 				albumArt: track.metadata.picture || '/api/placeholder/300/300',
// 			}))

// 			// Pause and cleanup current track
// 			if (audioRef.current.src) {
// 				audioRef.current.pause()
// 				URL.revokeObjectURL(audioRef.current.src)
// 			}

// 			// Set loading flag
// 			loadingRef.current = true

// 			try {
// 				// Load new track
// 				audioRef.current.src = track.url
// 				audioRef.current.load()

// 				// Update playing state after load starts
// 				setState((prev) => ({
// 					...prev,
// 					isPlaying: true,
// 				}))
// 			} catch (error) {
// 				console.error('Error loading track:', error)
// 				setState((prev) => ({
// 					...prev,
// 					isLoading: false,
// 					isPlaying: false,
// 				}))
// 				loadingRef.current = false
// 			}
// 		},

// 		async nextTrack() {
// 			const nextIndex = state.currentTrackIndex + 1
// 			if (nextIndex < state.tracks.length) {
// 				await controls.playTrack(nextIndex)
// 			}
// 		},

// 		async previousTrack() {
// 			const prevIndex = state.currentTrackIndex - 1
// 			if (prevIndex >= 0) {
// 				await controls.playTrack(prevIndex)
// 			}
// 		},

// 		async loadFile(file: File) {
// 			const metadata = await extractMetadata(file)
// 			const url = URL.createObjectURL(file)

// 			const newTrack: Track = {
// 				id: Math.random().toString(36).substring(2, 9),
// 				file,
// 				metadata,
// 				url,
// 			}

// 			// Use setState with callback to get the latest state
// 			setState((prev) => {
// 				const newTracks = [...prev.tracks, newTrack]

// 				// If no track is currently playing, schedule the play action
// 				if (prev.currentTrackIndex === -1) {
// 					// Use the actual index of the new track
// 					setTimeout(() => {
// 						controls.playTrack(newTracks.length - 1)
// 					}, 0)
// 				}

// 				return {
// 					...prev,
// 					tracks: newTracks,
// 				}
// 			})
// 		},

// 		async addTracks(files: FileList) {
// 			const newTracks: Track[] = []

// 			try {
// 				for (let i = 0; i < files.length; i++) {
// 					const file = files[i]
// 					const metadata = await extractMetadata(file)
// 					const url = URL.createObjectURL(file)

// 					newTracks.push({
// 						id: Math.random().toString(36).substr(2, 9),
// 						file,
// 						metadata,
// 						url,
// 					})
// 				}

// 				// Use setState with callback to get the latest state
// 				setState((prev) => {
// 					const updatedTracks = [...prev.tracks, ...newTracks]

// 					// If no track is currently playing, schedule the play action
// 					if (prev.currentTrackIndex === -1 && newTracks.length > 0) {
// 						setTimeout(() => {
// 							controls.playTrack(prev.tracks.length)
// 						}, 0)
// 					}

// 					return {
// 						...prev,
// 						tracks: updatedTracks,
// 					}
// 				})
// 			} catch (error) {
// 				console.error('Error adding tracks:', error)
// 				setState((prev) => ({ ...prev, isLoading: false }))
// 			}
// 		},

// 		removeTrack(id: string) {
// 			setState((prev) => {
// 				const trackIndex = prev.tracks.findIndex((track) => track.id === id)
// 				if (trackIndex === prev.currentTrackIndex) {
// 					if (audioRef.current?.src) {
// 						audioRef.current.pause()
// 						URL.revokeObjectURL(audioRef.current.src)
// 					}
// 					return {
// 						...prev,
// 						tracks: prev.tracks.filter((track) => track.id !== id),
// 						currentTrackIndex: -1,
// 						isPlaying: false,
// 						currentTime: 0,
// 						duration: 0,
// 						metadata: {},
// 						albumArt: '',
// 					}
// 				}
// 				return {
// 					...prev,
// 					tracks: prev.tracks.filter((track) => track.id !== id),
// 					currentTrackIndex:
// 						trackIndex < prev.currentTrackIndex
// 							? prev.currentTrackIndex - 1
// 							: prev.currentTrackIndex,
// 				}
// 			})
// 		},

// 		togglePlay() {
// 			if (state.isPlaying) {
// 				controls.pause()
// 			} else {
// 				controls.play()
// 			}
// 		},

// 		seek(time: number) {
// 			if (!audioRef.current) return
// 			audioRef.current.currentTime = time
// 		},

// 		setVolume(volume: number) {
// 			if (!audioRef.current) return

// 			const clampedVolume = Math.max(0, Math.min(1, volume))
// 			audioRef.current.volume = clampedVolume

// 			setState((prev) => ({
// 				...prev,
// 				volume: clampedVolume,
// 				isMuted: clampedVolume === 0,
// 			}))
// 		},

// 		toggleMute() {
// 			if (!audioRef.current) return

// 			const newMutedState = !state.isMuted
// 			audioRef.current.muted = newMutedState

// 			setState((prev) => ({
// 				...prev,
// 				isMuted: newMutedState,
// 			}))
// 		},

// 		clearPlaylist() {
// 			if (!audioRef.current) return

// 			audioRef.current.pause()
// 			if (audioRef.current.src) {
// 				URL.revokeObjectURL(audioRef.current.src)
// 			}

// 			setState((prev) => ({
// 				...prev,
// 				tracks: [],
// 				currentTrackIndex: -1,
// 				isPlaying: false,
// 				currentTime: 0,
// 				duration: 0,
// 				metadata: {},
// 				albumArt: '',
// 			}))
// 		},
// 	}

// 	return { state, controls }
// }
