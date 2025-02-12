declare module 'jsmediatags' {
	interface Tags {
		title?: string
		artist?: string
		album?: string
		year?: string
		comment?: string
		track?: string
		genre?: string
		picture?: {
			data: number[]
			format: string
			type?: string
			description?: string
		}
	}

	interface TagType {
		type: string
		tags: Tags
		version?: string
	}

	interface ReaderOptions {
		onSuccess: (tag: TagType) => void
		onError: (error: Error) => void
	}

	// Main read function
	export function read(
		file: File | string | ArrayBuffer,
		options: ReaderOptions
	): void

	// Additional utility functions that jsmediatags provides
	export class Reader {
		constructor(file: File | string | ArrayBuffer)
		read(options: ReaderOptions): void
		setTagsToRead(tags: string[]): void
	}
}
