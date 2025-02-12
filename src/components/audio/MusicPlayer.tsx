import React, { useRef } from 'react'
import { Upload } from 'lucide-react'
import { PlayerControls } from './PlayerControls'
import { VolumeControl } from './VolumeControl'
import { useAudioPlayer } from '@/hooks/useAudioPlayer'

interface MusicPlayerProps {
	onAudioLoad?: (audio: HTMLAudioElement) => void
}

const MusicPlayer = ({ onAudioLoad }: MusicPlayerProps) => {
	const fileInputRef = useRef<HTMLInputElement>(null)
	const { state, controls } = useAudioPlayer(onAudioLoad)

	const handleFileSelect = async (
		event: React.ChangeEvent<HTMLInputElement>
	) => {
		const files = event.target.files
		if (files && files.length > 0) {
			await controls.addTracks(files)
			if (fileInputRef.current) {
				fileInputRef.current.value = ''
			}
		}
	}

	const formatTime = (time: number) => {
		if (!isFinite(time)) return '0:00'
		const minutes = Math.floor(time / 60)
		const seconds = Math.floor(time % 60)
		return `${minutes}:${seconds.toString().padStart(2, '0')}`
	}

	const getTrackDisplayName = () => {
		if (state.currentTrackIndex === -1) return 'No track selected'
		const currentTrack = state.tracks[state.currentTrackIndex]
		if (!currentTrack) return 'No track selected'

		// Check both metadata title and file name
		const metadataTitle = currentTrack.metadata?.title
		if (metadataTitle && metadataTitle.trim() !== '') {
			return metadataTitle
		}

		// Fallback to file name without extension
		const fileName = currentTrack.file.name
		return fileName.replace(/\.[^/.]+$/, '')
	}

	const getArtistName = () => {
		if (state.currentTrackIndex === -1) return ''
		const currentTrack = state.tracks[state.currentTrackIndex]
		return currentTrack?.metadata?.artist || ''
	}

	const getAlbumArt = () => {
		if (state.currentTrackIndex === -1) return null
		const currentTrack = state.tracks[state.currentTrackIndex]
		return currentTrack?.metadata?.picture || null
	}

	const progressPercentage = state.duration
		? (state.currentTime / state.duration) * 100
		: 0

	const hasCurrentTrack =
		state.currentTrackIndex !== -1 && state.tracks[state.currentTrackIndex]
	const albumArt = getAlbumArt()

	return (
		<div className='fixed bottom-4 left-1/2 -translate-x-1/2 w-80 bg-black/50 backdrop-blur-md rounded-lg p-3 text-white shadow-2xl'>
			<div className='flex items-center gap-3 mb-2'>
				{hasCurrentTrack && albumArt ? (
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
					<p className='font-medium truncate'>{getTrackDisplayName()}</p>
					{getArtistName() && (
						<p className='text-sm text-white/70 truncate'>{getArtistName()}</p>
					)}
				</div>
			</div>

			<div className='mb-2'>
				<input
					type='range'
					min={0}
					max={state.duration || 100}
					value={state.currentTime}
					onChange={(e) => controls.seek(Number(e.target.value))}
					className='w-full h-1 bg-white/20 rounded-lg appearance-none cursor-pointer'
					style={{
						backgroundSize: `${progressPercentage}% 100%`,
						backgroundImage: 'linear-gradient(to right, white, white)',
						backgroundRepeat: 'no-repeat',
					}}
				/>
				<div className='flex justify-between text-xs mt-1 text-white/70'>
					<span>{formatTime(state.currentTime)}</span>
					<span>{formatTime(state.duration)}</span>
				</div>
			</div>

			<div className='flex items-center justify-between'>
				<VolumeControl
					volume={state.volume}
					isMuted={state.isMuted}
					controls={controls}
				/>

				<PlayerControls
					isPlaying={state.isPlaying}
					isLoading={state.isLoading}
					onFileSelect={handleFileSelect}
					fileInputRef={fileInputRef}
					controls={controls}
					hasNextTrack={state.currentTrackIndex < state.tracks.length - 1}
					hasPreviousTrack={state.currentTrackIndex > 0}
					hasTrack={state.tracks.length > 0}
				/>
			</div>
		</div>
	)
}

export default MusicPlayer
