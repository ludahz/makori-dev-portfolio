import React, { RefObject } from 'react'
import { Play, Pause, SkipBack, SkipForward, Upload } from 'lucide-react'
import { IPlayerControls } from '@/other/player'

interface PlayerControlsProps {
	isPlaying: boolean
	isLoading: boolean
	onFileSelect: (event: React.ChangeEvent<HTMLInputElement>) => void
	controls: IPlayerControls
	hasNextTrack: boolean
	hasPreviousTrack: boolean
	fileInputRef: RefObject<HTMLInputElement | null>
	hasTrack: boolean
}

export const PlayerControls: React.FC<PlayerControlsProps> = ({
	isPlaying,
	isLoading,
	onFileSelect,
	controls,
	hasNextTrack,
	hasPreviousTrack,
	fileInputRef,
	hasTrack,
}) => {
	const handlePlayPause = () => {
		controls.togglePlay()
	}

	return (
		<div className='flex items-center gap-2'>
			<label className='p-1.5 hover:bg-white/10 rounded-full transition-colors cursor-pointer'>
				<input
					type='file'
					ref={fileInputRef}
					accept='audio/*'
					onChange={onFileSelect}
					multiple
					className='hidden'
				/>
				<Upload size={16} />
			</label>

			<button
				className='p-1.5 hover:bg-white/10 rounded-full transition-colors disabled:opacity-50 disabled:cursor-not-allowed'
				onClick={() => controls.previousTrack()}
				disabled={!hasPreviousTrack || isLoading}
			>
				<SkipBack size={16} />
			</button>

			<button
				className='w-8 h-8 flex items-center justify-center bg-white/10 hover:bg-white/20 rounded-full transition-colors disabled:opacity-50 disabled:cursor-not-allowed'
				onClick={handlePlayPause}
				disabled={!hasTrack || isLoading}
				aria-disabled={!hasTrack || isLoading}
			>
				{isLoading ? (
					<div className='animate-spin rounded-full h-4 w-4 border-2 border-white border-t-transparent' />
				) : isPlaying ? (
					<Pause size={18} />
				) : (
					<Play size={18} />
				)}
			</button>

			<button
				className='p-1.5 hover:bg-white/10 rounded-full transition-colors disabled:opacity-50 disabled:cursor-not-allowed'
				onClick={() => controls.nextTrack()}
				disabled={!hasNextTrack || isLoading}
			>
				<SkipForward size={16} />
			</button>
		</div>
	)
}
