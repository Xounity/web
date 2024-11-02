"use client"
import Image from 'next/image'
import React from 'react'
import { useTheme } from "@/app/ThemeContext";
import darklogo from '@/app/images/logo_dark.webp'
import lightlogo from '@/app/images/logo_light.webp'

const Loading = () => {

    const { theme } = useTheme();

  return (
    <>
    <div className='w-full h-screen flex items-center justify-center'>
    <Image src={theme === "dark" ? darklogo : lightlogo}
              alt="logo"
              className="w-36 object-cover cursor-pointer load" />
    </div>
    </>
  )
}

export default Loading