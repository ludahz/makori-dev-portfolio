import * as musicMetadata from 'music-metadata-browser'
import { AudioMetadata } from '@/other/player'
import { arrayBufferToBase64 } from '@/utils/audio'

export const useMetadataExtractor = () => {
	const extractMetadata = async (file: File): Promise<AudioMetadata> => {
		try {
			const metadata = await musicMetadata.parseBlob(file)
			let picture: string | undefined = undefined

			if (metadata.common.picture?.[0]) {
				const { data, format } = metadata.common.picture[0]
				const base64String = arrayBufferToBase64(data)
				picture = `data:${format};base64,${base64String}`
			}

			// Create metadata object with undefined for missing values
			const audioMetadata: AudioMetadata = {
				title: metadata.common.title || file.name.replace(/\.[^/.]+$/, ''),
				artist: metadata.common.artist || undefined,
				album: metadata.common.album || undefined,
				picture: picture,
			}

			console.log('Extracted metadata:', audioMetadata)
			return audioMetadata
		} catch (error) {
			console.error('Error reading metadata:', error)
			// Return basic metadata using filename
			return {
				title: file.name.replace(/\.[^/.]+$/, ''),
				artist: undefined,
				album: undefined,
				picture: undefined,
			}
		}
	}

	return { extractMetadata }
}
