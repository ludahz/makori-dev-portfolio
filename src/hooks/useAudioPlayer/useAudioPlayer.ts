// src/hooks/useAudioPlayer/useAudioPlayer.ts
import { useState, useRef, useEffect } from 'react'
import { AudioPlayerState, IPlayerControls } from '@/other/player'
import { DEFAULT_STATE } from '@/utils/audio'
import { useAudioControls } from './useAudioControls'
import { useAudioEventListeners } from './useAudioEventListeners'

export const useAudioPlayer = (
	onAudioLoad?: (audio: HTMLAudioElement) => void
): { state: AudioPlayerState; controls: IPlayerControls } => {
	const [state, setState] = useState<AudioPlayerState>(DEFAULT_STATE)
	const audioRef = useRef<HTMLAudioElement | null>(null)
	const loadingRef = useRef<boolean>(false)

	const controls = useAudioControls(audioRef, loadingRef, state, setState)
	const { setupAudioListeners } = useAudioEventListeners(
		audioRef,
		loadingRef,
		setState,
		controls
	)

	useEffect(() => {
		const audio = new Audio()
		audio.volume = state.volume
		audio.autoplay = true
		audioRef.current = audio

		if (onAudioLoad) {
			onAudioLoad(audio)
		}

		const cleanup = setupAudioListeners(audio)

		return () => {
			cleanup()
			if (audio.src) {
				audio.pause()
				URL.revokeObjectURL(audio.src)
			}
		}
	}, [])

	return { state, controls }
}
