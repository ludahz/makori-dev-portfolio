'use client'

import React, { useState } from 'react'
import { Section } from '../Layout/Section'
import { SectionTitle } from '../shared/SectionTitle'
import { Mail, MapPin, Phone, Loader2, Contact2 } from 'lucide-react'
import { motion } from 'framer-motion'
import { useForm } from '@tanstack/react-form'
import { z } from 'zod'
import type { FieldApi } from '@tanstack/react-form'
import emailjs from '@emailjs/browser'
import { Toaster, toast } from 'sonner'

// Form validation schema
const contactSchema = z.object({
	name: z.string().min(2, 'Name must be at least 2 characters'),
	email: z.string().email('Please enter a valid email'),
	message: z.string().min(10, 'Message must be at least 10 characters'),
})

type ContactForm = z.infer<typeof contactSchema>

/* eslint-disable @typescript-eslint/no-explicit-any */
function FieldInfo({ field }: { field: FieldApi<any, any, undefined, any> }) {
	return (
		<>
			{field.state.meta.isTouched && field.state.meta.errors.length ? (
				<p className='mt-1 text-sm text-red-600'>
					{field.state.meta.errors.join(', ')}
				</p>
			) : null}
			{field.state.meta.isValidating ? (
				<p className='mt-1 text-sm text-blue-600'>Validating...</p>
			) : null}
		</>
	)
}

const Contact = () => {
	const [isSubmitting, setIsSubmitting] = useState(false)

	const form = useForm({
		defaultValues: {
			name: '',
			email: '',
			message: '',
		} as ContactForm,
		onSubmit: async ({ value }) => {
			if (
				!process.env.NEXT_PUBLIC_SERVICE_ID ||
				!process.env.NEXT_PUBLIC_TEMPLATE_ID ||
				!process.env.NEXT_PUBLIC_PUBLIC_KEY
			) {
				toast.error('Email service configuration is missing')
				return
			}

			setIsSubmitting(true)
			try {
				const result = await emailjs.send(
					process.env.NEXT_PUBLIC_SERVICE_ID,
					process.env.NEXT_PUBLIC_TEMPLATE_ID,
					{
						from_name: value.name,
						from_email: value.email,
						user_email: value.email,
						message: value.message,
						to_name: value.name,
					},
					process.env.NEXT_PUBLIC_PUBLIC_KEY
				)

				if (result.status === 200) {
					toast.success('Message sent successfully!')
					form.reset()
				}
			} catch (error) {
				toast.error('Failed to send message. Please try again.')
				console.error('EmailJS error:', error)
			} finally {
				setIsSubmitting(false)
			}
		},
		validators: {
			onChange: contactSchema,
		},
	})

	console.log('This is is submitting', isSubmitting)

	return (
		<Section>
			<Toaster position='bottom-right' />
			<div className='max-w-5xl mx-auto px-4 sm:px-6 lg:px-8'>
				<SectionTitle>Get In Touch</SectionTitle>
				<motion.div
					initial={{ opacity: 0, y: 20 }}
					animate={{ opacity: 1, y: 0 }}
					className='mt-12'
				>
					<div
						className='group bg-[var(--card-light)] dark:bg-[var(--card-dark)] 
                         rounded-lg p-8 shadow-lg hover:shadow-xl transition-all duration-300'
					>
						<div className='grid grid-cols-1 md:grid-cols-2 gap-12'>
							{/* Info Section */}
							<div className='space-y-8'>
								<div className='space-y-2'>
									<div className='flex items-center space-x-2'>
										<div
											className='p-2 rounded-lg bg-[rgb(var(--primary-light),0.1)]
                                  group-hover:bg-[rgb(var(--primary-light),0.2)]
                                  transition-colors duration-300'
										>
											<Contact2
												className='text-[rgb(var(--primary-light))]'
												size={20}
											/>
										</div>
										<h3 className='text-xl font-semibold text-gray-900 dark:text-white'>
											Let&apos;s Connect
										</h3>
									</div>
									<p className='text-gray-600 dark:text-gray-300 ml-12'>
										I&apos;m always interested in hearing about new projects and
										opportunities. Feel free to reach out!
									</p>
								</div>

								<div className='space-y-4 ml-12'>
									<div className='flex items-center group/item'>
										<Mail
											className='mr-4 text-[rgb(var(--primary-light))]'
											size={20}
										/>
										<a
											href='mailto:ludahmaxs@gmail.com'
											className='text-gray-600 dark:text-gray-300
                                hover:text-[rgb(var(--primary-light))] 
                                dark:hover:text-[rgb(var(--primary-light))]
                                transition-colors'
										>
											ludahmaxs@gmail.com
										</a>
									</div>
									<div className='flex items-center'>
										<Phone
											className='mr-4 text-[rgb(var(--primary-light))]'
											size={20}
										/>
										<span className='text-gray-600 dark:text-gray-300'>
											254-114-907009
										</span>
									</div>
									<div className='flex items-center'>
										<MapPin
											className='mr-4 text-[rgb(var(--primary-light))]'
											size={20}
										/>
										<span className='text-gray-600 dark:text-gray-300'>
											Nairobi, Kenya 00200
										</span>
									</div>
								</div>
							</div>

							{/* Form Section */}
							<div
								className='bg-[rgb(var(--primary-light),0.03)] dark:bg-[var(--section-dark)]rounded-lg p-8 border border-[rgb(var(--primary-light),0.1)]
    group-hover:border-[rgb(var(--primary-light),0.2)]
    backdrop-filter backdrop-blur-lg
    shadow-lg
    transition-all duration-300'
							>
								<form
									onSubmit={(e) => {
										e.preventDefault()
										e.stopPropagation()
										form.handleSubmit()
									}}
									className='space-y-6'
								>
									<form.Field
										name='name'
										validators={{
											onChange: z
												.string()
												.min(2, 'Name must be at least 2 characters'),
											onChangeAsyncDebounceMs: 500,
										}}
									>
										{(field) => (
											<div>
												<label
													htmlFor={field.name}
													className='block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2'
												>
													Name
												</label>
												<input
													id={field.name}
													name={field.name}
													value={field.state.value}
													onBlur={field.handleBlur}
													onChange={(e) => field.handleChange(e.target.value)}
													placeholder='Enter your name'
													className='form-input'
												/>
												<FieldInfo field={field} />
											</div>
										)}
									</form.Field>

									<form.Field
										name='email'
										validators={{
											onChange: z.string().email('Please enter a valid email'),
											onChangeAsyncDebounceMs: 500,
										}}
									>
										{(field) => (
											<div>
												<label
													htmlFor={field.name}
													className='block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2'
												>
													Email
												</label>
												<input
													id={field.name}
													name={field.name}
													type='email'
													value={field.state.value}
													onBlur={field.handleBlur}
													onChange={(e) => field.handleChange(e.target.value)}
													placeholder='Enter your email'
													className='form-input'
												/>
												<FieldInfo field={field} />
											</div>
										)}
									</form.Field>

									<form.Field
										name='message'
										validators={{
											onChange: z
												.string()
												.min(10, 'Message must be at least 10 characters'),
											onChangeAsyncDebounceMs: 500,
										}}
									>
										{(field) => (
											<div>
												<label
													htmlFor={field.name}
													className='block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2'
												>
													Message
												</label>
												<textarea
													id={field.name}
													name={field.name}
													value={field.state.value}
													onBlur={field.handleBlur}
													onChange={(e) => field.handleChange(e.target.value)}
													rows={4}
													placeholder='Write your message here...'
													className='form-input form-input-textarea'
												/>
												<FieldInfo field={field} />
											</div>
										)}
									</form.Field>

									{/* <form.Subscribe
										selector={(state) => [state.canSubmit, state.isSubmitting]}
									>
										{([canSubmit, isSubmitting]) => (
											<button
												type='submit'
												disabled={!canSubmit || isSubmitting}
												className='w-full px-6 py-3 rounded-md
            bg-[rgb(var(--primary-dark))]
            hover:bg-[rgb(var(--primary-light))]
            text-white font-medium
            focus:outline-2 focus:outline-offset-2 focus:outline-[rgb(var(--primary-light))]
            disabled:opacity-50 disabled:cursor-not-allowed
            shadow-md hover:shadow-lg
            transition-all duration-300
            flex items-center justify-center'
											>
												{isSubmitting ? (
													<>
														<Loader2 className='animate-spin mr-2' size={18} />
														Sending...
													</>
												) : (
													'Send Message'
												)}
											</button>
										)}
									</form.Subscribe> */}

									<form.Subscribe
										selector={(state) => [state.canSubmit, state.isSubmitting]}
									>
										{([canSubmit, isSubmitting]) => (
											<button
												type='submit'
												disabled={!canSubmit || isSubmitting}
												className='theme-button'
											>
												{isSubmitting ? (
													<>
														<Loader2
															className='animate-spin text-current'
															size={18}
														/>
														<span className='relative z-10'>Sending...</span>
													</>
												) : (
													<span className='relative z-10'>Send Message</span>
												)}

												{/* Contrast overlay for light themes */}
												{/* <div className='absolute inset-0 bg-black/10 dark:bg-white/10' /> */}
											</button>
										)}
									</form.Subscribe>
								</form>
							</div>
						</div>
					</div>
				</motion.div>
			</div>
		</Section>
	)
}

export default Contact
