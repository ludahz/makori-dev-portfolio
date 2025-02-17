declare namespace NodeJS {
	export interface ProcessEnv {
		readonly SERVICE_ID: string
		readonly TEMPLATE_ID: string
		readonly PUBLIC_KEY: string
	}
}
