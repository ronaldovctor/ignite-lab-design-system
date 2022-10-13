import clsx from 'clsx'
import React, { ButtonHTMLAttributes, ReactNode } from 'react'

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
	children: ReactNode
	className?: string
}

export function Button({ children, className, ...props }: ButtonProps) {
	return (
		<button
			{...props}
			className={clsx(
				'py-3 px-16 bg-cyan-500 rounded font-semibold text-black text-sm hover:bg-cyan-300 cursor-pointer transition-colors focus:ring-2 ring-white',
				className
			)}
		>
			{children}
		</button>
	)
}
