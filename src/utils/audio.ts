// src/utils/audio.ts

import { AudioPlayerState } from '@/other/player'

export const DEFAULT_STATE: AudioPlayerState = {
	tracks: [],
	currentTrackIndex: -1,
	isPlaying: false,
	isLoading: false,
	currentTime: 0,
	duration: 0,
	volume: 1,
	isMuted: false,
	metadata: {},
	albumArt: '',
}

export function arrayBufferToBase64(data: Uint8Array): string {
	let binary = ''
	const len = data.byteLength
	for (let i = 0; i < len; i++) {
		binary += String.fromCharCode(data[i])
	}
	return window.btoa(binary)
}
