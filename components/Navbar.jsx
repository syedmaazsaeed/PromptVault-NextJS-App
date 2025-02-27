'use client';
import Link from 'next/link';
import Image from 'next/image';
import { useState, useEffect } from 'react';
import { signIn, signOut, useSession, getProviders  } from 'next-auth/react';


const Navbar = () => {

    const isUserLoggedIn = true;
  return (
    <nav className='flex-between w-full mb-16 pt-3'>
        <Link href="/" className='flex gap-2 flex-center'>
        <Image src="/assets/images/logo.svg" 
        alt="PromptVault Logo"
        width={29}
        height={30}
        className='object-contain'
        />
        <p className='logo_text'>PromptVault</p>
        </Link>
        {/* Smart Devices/Mobile Phone devices Navigation */}
        <div className='sm:flex hidden'></div>
        {isUserLoggedIn ? (
            <div className='flex gap-3 md:gap-5'>
                <Link href="/create-prompt"
                className='black_btn'>
                Create Post 
                </Link>
            </div>

        ): (
            <>
            </>
        )}
    </nav>
  )
}

export default Navbar
