'use client'

import React, { useState, useRef, useEffect } from 'react'
import {
	Play,
	Pause,
	SkipBack,
	SkipForward,
	Volume2,
	VolumeX,
	Upload,
} from 'lucide-react'
import * as musicMetadata from 'music-metadata-browser'

interface MusicPlayerProps {
	onAudioLoad?: (audio: HTMLAudioElement) => void
}

interface AudioMetadata {
	title?: string
	artist?: string
	album?: string
	picture?: string
}

const MusicPlayer = ({ onAudioLoad }: MusicPlayerProps) => {
	const [isPlaying, setIsPlaying] = useState(false)
	const [isMuted, setIsMuted] = useState(false)
	const [volume, setVolume] = useState(1)
	const [currentTime, setCurrentTime] = useState(0)
	const [duration, setDuration] = useState(0)
	const [currentTrack, setCurrentTrack] = useState<string>('')
	const [albumArt, setAlbumArt] = useState<string>('')
	const [metadata, setMetadata] = useState<AudioMetadata>({})
	const [isVolumeVisible, setIsVolumeVisible] = useState(false)
	const audioRef = useRef<HTMLAudioElement | null>(null)

	useEffect(() => {
		// Initialize audio element
		audioRef.current = new Audio()
		audioRef.current.volume = volume

		return () => {
			if (audioRef.current?.src) {
				audioRef.current.pause()
				URL.revokeObjectURL(audioRef.current.src)
			}
		}
	}, [])

	const extractMetadata = async (file: File) => {
		try {
			const metadata = await musicMetadata.parseBlob(file)
			let picture = ''

			if (metadata.common.picture && metadata.common.picture.length > 0) {
				const { data, format } = metadata.common.picture[0]
				picture = `data:${format};base64,${arrayBufferToBase64(data)}`
			}

			return {
				title: metadata.common.title,
				artist: metadata.common.artist,
				album: metadata.common.album,
				picture,
			}
		} catch (error) {
			console.error('Error reading metadata:', error)
			return {}
		}
	}

	const arrayBufferToBase64 = (buffer: Uint8Array) => {
		let binary = ''
		const bytes = new Uint8Array(buffer)
		for (let i = 0; i < bytes.byteLength; i++) {
			binary += String.fromCharCode(bytes[i])
		}
		return btoa(binary)
	}

	const handleFileUpload = async (
		event: React.ChangeEvent<HTMLInputElement>
	) => {
		const file = event.target.files?.[0]
		if (!file) return

		try {
			// Reset states
			setIsPlaying(false)
			setCurrentTime(0)

			// Clean up previous audio source if it exists
			if (audioRef.current?.src) {
				audioRef.current.pause()
				URL.revokeObjectURL(audioRef.current.src)
			}

			// Extract metadata first
			const metadata = await extractMetadata(file)
			setMetadata(metadata)
			if (metadata.picture) {
				setAlbumArt(metadata.picture)
			} else {
				setAlbumArt('/api/placeholder/300/300')
			}

			// Create object URL for the file
			const objectUrl = URL.createObjectURL(file)

			// Set up audio element
			if (!audioRef.current) {
				audioRef.current = new Audio()
			}

			audioRef.current.src = objectUrl
			audioRef.current.volume = volume

			// Set up event listeners
			const audio = audioRef.current

			audio.addEventListener('loadedmetadata', () => {
				setDuration(audio.duration)
				setCurrentTrack(metadata.title || file.name)

				if (onAudioLoad) {
					onAudioLoad(audio)
				}

				// Start playing
				audio
					.play()
					.then(() => {
						setIsPlaying(true)
					})
					.catch((error) => {
						console.error('Error playing audio:', error)
					})
			})

			audio.addEventListener('timeupdate', () => {
				setCurrentTime(audio.currentTime)
			})

			audio.addEventListener('ended', () => {
				setIsPlaying(false)
				setCurrentTime(0)
			})

			audio.addEventListener('error', (e) => {
				console.error('Audio error:', e)
			})
		} catch (error) {
			console.error('Error setting up audio:', error)
		}
	}

	// const togglePlay = async () => {
	// 	if (!audioRef.current) return

	// 	try {
	// 		if (isPlaying) {
	// 			await audioRef.current.pause()
	// 		} else {
	// 			await audioRef.current.play()
	// 		}
	// 		setIsPlaying(!isPlaying)
	// 	} catch (error) {
	// 		console.error('Error toggling playback:', error)
	// 	}
	// }

	const togglePlay = async () => {
		if (!audioRef.current?.src) return

		try {
			if (isPlaying) {
				await audioRef.current.pause()
			} else {
				await audioRef.current.play()
			}
			setIsPlaying(!isPlaying)
		} catch (error) {
			console.error('Error toggling playback:', error)
		}
	}

	const toggleMute = () => {
		if (!audioRef.current) return
		audioRef.current.muted = !isMuted
		setIsMuted(!isMuted)
	}

	const handleVolumeChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		const newVolume = Number(e.target.value)
		if (audioRef.current) {
			audioRef.current.volume = newVolume
		}
		setVolume(newVolume)
		setIsMuted(newVolume === 0)
	}

	const handleSeek = (e: React.ChangeEvent<HTMLInputElement>) => {
		if (!audioRef.current) return
		const time = Number(e.target.value)
		audioRef.current.currentTime = time
		setCurrentTime(time)
	}

	const formatTime = (time: number) => {
		const minutes = Math.floor(time / 60)
		const seconds = Math.floor(time % 60)
		return `${minutes}:${seconds.toString().padStart(2, '0')}`
	}

	useEffect(() => {
		return () => {
			if (audioRef.current?.src) {
				URL.revokeObjectURL(audioRef.current.src)
			}
		}
	}, [])

	return (
		<div className='fixed bottom-4 left-1/2 -translate-x-1/2 w-80 bg-black/50 backdrop-blur-md rounded-lg p-3 text-white shadow-2xl'>
			{/* Album Art and Track Info */}
			<div className='flex items-center gap-3 mb-2'>
				{albumArt ? (
					<img
						src={albumArt}
						alt='Album Art'
						className='w-12 h-12 rounded-lg object-cover'
					/>
				) : (
					<div className='w-12 h-12 rounded-lg bg-white/10 flex items-center justify-center'>
						<Upload size={20} className='text-white/50' />
					</div>
				)}
				<div className='flex-1 min-w-0'>
					<p className='font-medium truncate'>
						{metadata.title || currentTrack || 'No track selected'}
					</p>
					{metadata.artist && (
						<p className='text-sm text-white/70 truncate'>{metadata.artist}</p>
					)}
				</div>
			</div>

			{/* Progress Bar */}
			<div className='mb-2'>
				<input
					type='range'
					min='0'
					max={duration || 100}
					value={currentTime}
					onChange={handleSeek}
					className='w-full h-1 bg-white/20 rounded-lg appearance-none cursor-pointer'
					style={{
						backgroundSize: `${(currentTime / duration) * 100}% 100%`,
						backgroundImage: 'linear-gradient(to right, white, white)',
					}}
				/>
				<div className='flex justify-between text-xs mt-1 text-white/70'>
					<span>{formatTime(currentTime)}</span>
					<span>{formatTime(duration)}</span>
				</div>
			</div>

			{/* Controls */}
			<div className='flex items-center justify-between'>
				<div className='relative'>
					<button
						className='p-1.5 hover:bg-white/10 rounded-full transition-colors'
						onClick={() => setIsVolumeVisible(!isVolumeVisible)}
						onMouseEnter={() => setIsVolumeVisible(true)}
					>
						{isMuted ? <VolumeX size={16} /> : <Volume2 size={16} />}
					</button>

					{isVolumeVisible && (
						<div
							className='absolute bottom-full left-0 mb-2 p-2 bg-black/90 rounded-lg'
							onMouseLeave={() => setIsVolumeVisible(false)}
						>
							<input
								type='range'
								min='0'
								max='1'
								step='0.01'
								value={volume}
								onChange={handleVolumeChange}
								className='w-24 h-1 bg-white/20 rounded-lg appearance-none cursor-pointer'
								style={{
									backgroundSize: `${volume * 100}% 100%`,
									backgroundImage: 'linear-gradient(to right, white, white)',
								}}
							/>
						</div>
					)}
				</div>

				<div className='flex items-center gap-2'>
					<label className='p-1.5 hover:bg-white/10 rounded-full transition-colors cursor-pointer'>
						<input
							type='file'
							accept='audio/*'
							onChange={handleFileUpload}
							className='hidden'
						/>
						<SkipBack size={16} />
					</label>

					<button
						className='w-8 h-8 flex items-center justify-center bg-white/10 hover:bg-white/20 rounded-full transition-colors'
						onClick={togglePlay}
					>
						{isPlaying ? <Pause size={18} /> : <Play size={18} />}
					</button>

					<button className='p-1.5 hover:bg-white/10 rounded-full transition-colors'>
						<SkipForward size={16} />
					</button>
				</div>
			</div>
		</div>
	)
}

export default MusicPlayer
