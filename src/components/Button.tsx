import React, { ReactNode } from 'react'

export interface ButtonProps {
	children: ReactNode
}

export function Button({ children }: ButtonProps) {
	return (
		<button className='py-4 px-3 bg-cyan-500 rounded font-semibold text-black text-sm hover:bg-cyan-300 cursor-pointer transition-colors focus:ring-2 ring-white'>
			{children}
		</button>
	)
}
