import React from 'react'
import Image from 'next/image'
import { signIn } from 'next-auth/react'
import { Button } from '@nextui-org/react'

const Login = () => {
  return (
    <div className='w-screen h-screen flex justify-center items-center'>
        <div className="flex flex-col justify-center items-center gap-4 w-1/4">
            <Button startContent={<Image src={'/google.svg'} height={40} width={40} className='h-12 w-12'/>} size='lg' color="primary" variant="ghost" onPress={() => { signIn('google') }}>Sign in with Google</Button>
            <Button startContent={<Image src={'/github.svg'} height={40} width={40} className='h-12 w-12'/>} size='lg' color="primary" variant="ghost" onPress={() => { signIn('github') }}>Sign in with GitHub</Button>
        </div>
    </div>
  )
}

export default Login