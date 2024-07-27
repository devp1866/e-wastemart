"use client"
import React from 'react'
import Nav from "@/components/Nav"
import Foot from '@/components/Foot'
import { useSession } from 'next-auth/react'
import Login from '@/components/Login'

const PageLayout = ({children}) => {
  const { data: session } = useSession();

  // if(!session) return(<Login/>)

  return (
    <>
        <Nav />
        {children}
        <Foot />
    </>
  )
}

export default PageLayout