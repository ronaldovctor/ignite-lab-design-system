import { Envelope, Lock } from 'phosphor-react'
import { Button } from './components/Button'
import { Checkbox } from './components/Checkbox'
import { Heading } from './components/Heading'
import Logo from './components/Logo'
import { Text } from './components/Text'
import { TextInput } from './components/TextInput'
import './styles/global.scss'

export function App() {
	return (
		<div className='w-screen h-screen bg-gray-900 flex flex-col items-center justify-center text-gray-100'>
			<header className='flex flex-col items-center'>
				<Logo />
				<Heading className='mt-4' size='lg'>
					Ignite Lab
				</Heading>
				<Text size='lg' className='text-gray-400 mt-1'>
					Faça login e comece a usar
				</Text>
			</header>
			<form className='flex flex-col items-stretch mt-8 w-full max-w-[450px] gap-5'>
				<label htmlFor='email' className='flex flex-col gap-3'>
					<Text className='font-semibold text-gray-100 select-none'>
						Endereço de email
					</Text>
					<TextInput.Root>
						<TextInput.Icon>
							<Envelope />
						</TextInput.Icon>
						<TextInput.Input
							type='email'
							id='email'
							placeholder='Digite seu e-mail'
						/>
					</TextInput.Root>
				</label>
				<label htmlFor='password' className='flex flex-col gap-3'>
					<Text className='font-semibold text-gray-100 select-none'>Sua senha</Text>
					<TextInput.Root>
						<TextInput.Icon>
							<Lock />
						</TextInput.Icon>
						<TextInput.Input type='password' id='password' placeholder='********' />
					</TextInput.Root>
				</label>
				<label htmlFor='remember' className='flex items-center gap-2'>
					<Checkbox id='remember' />
					<Text size='sm' className='text-gray-200 select-none'>
						Lembrar de mim por 30 dias.
					</Text>
				</label>
				<Button type='submit' className='max-w-sm self-center mt-8'>
					Entrar na plataforma
				</Button>
			</form>
			<footer className='flex flex-col items-center gap-4 mt-8'>
				<Text size='sm'>
					<a href='#' className='text-gray-400 underline'>
						Esqueceu sua senha?
					</a>
				</Text>
				<Text size='sm'>
					<a href='#' className='text-gray-400 underline'>
						Não possui conta? Crie uma agora!
					</a>
				</Text>
			</footer>
		</div>
	)
}
