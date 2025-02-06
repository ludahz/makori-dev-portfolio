import type { Metadata } from 'next'
import { Geist, Geist_Mono } from 'next/font/google'
import './globals.css'
import { ThemeProvider } from '@/components/context/ThemeContext'
import { ThemeSwitcher } from '@/components/theme/ThemeSwitcher'

const geistSans = Geist({
	variable: '--font-geist-sans',
	subsets: ['latin'],
})

const geistMono = Geist_Mono({
	variable: '--font-geist-mono',
	subsets: ['latin'],
})

export const metadata: Metadata = {
	title: 'Makori the developer',
	description: 'Makroi lawrence fullstack developer',
}

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode
}>) {
	return (
		<html lang='en'>
			<body
				className={`${geistSans.variable} ${geistMono.variable} antialiased`}
			>
				{/* {children} */}
				<ThemeProvider>
					{children}
					<ThemeSwitcher />
				</ThemeProvider>
			</body>
		</html>
	)
}
