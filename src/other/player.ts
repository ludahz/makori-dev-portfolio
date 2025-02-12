//types/player.ts

export interface AudioMetadata {
	title?: string
	artist?: string
	album?: string
	picture?: string | undefined
}

export interface Track {
	id: string
	file: File
	metadata: AudioMetadata
	url: string
}

export interface AudioPlayerState {
	isPlaying: boolean
	isMuted: boolean
	volume: number
	currentTime: number
	duration: number
	currentTrackIndex: number
	tracks: Track[]
	metadata: AudioMetadata
	albumArt: string
	isLoading: boolean
}

export interface IPlayerControls {
	play: () => Promise<void>
	pause: () => Promise<void>
	seek: (time: number) => void
	setVolume: (volume: number) => void
	toggleMute: () => void
	togglePlay: () => void
	clearPlaylist: () => void
	loadFile: (file: File) => Promise<void>
	playTrack: (index: number) => Promise<void>
	nextTrack: () => Promise<void>
	previousTrack: () => Promise<void>
	addTracks: (files: FileList) => Promise<void>
	removeTrack: (id: string) => void
}
