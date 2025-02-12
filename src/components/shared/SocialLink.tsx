// // src/components/shared/SocialLink.tsx
// interface SocialLinkProps {
// 	href: string
// 	icon: React.ReactNode
// 	label: string
// 	className?: string
// }

// export function SocialLink({
// 	href,
// 	icon,
// 	label,
// 	className = '',
// }: SocialLinkProps) {
// 	return (
// 		<a
// 			href={href}
// 			target='_blank'
// 			rel='noopener noreferrer'
// 			className={`social-link ${className} `}
// 			aria-label={label}
// 		>
// 			{icon}
// 		</a>
// 	)
// }

interface SocialLinkProps {
	href: string
	icon: React.ReactNode
	label: string
	className?: string
}

export function SocialLink({
	href,
	icon,
	label,
	className = '',
}: SocialLinkProps) {
	return (
		<a
			href={href}
			target='_blank'
			rel='noopener noreferrer'
			className={`social-link group	
				${className}`}
			aria-label={label}
		>
			{icon}
		</a>
	)
}
