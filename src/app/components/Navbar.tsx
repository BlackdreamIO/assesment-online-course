'use client'

import { useState, useEffect } from "react";
import Link from "next/link";


import logoImage from '../../../public/logoImage.png';
import profilePicture from '../../../public/profileImage.png';
import searchIcon from '../../../public/searchIcon.svg';
import hamburgerIcon from '../../../public/hamburger.png';
import { Box, HStack } from "@chakra-ui/react";

/**
 * MAKE IT RESPONSIVE FOR SMALLER DEVICES
 * INPLEMENT ANIMATION WITH FRAMER MOTION  
**/ 

export default function Navbar() 
{
    const [currentWindowSize, setCurrentWindowSize] = useState({ width : window.innerWidth, height : window.innerHeight });

    const linkStyle = `text-white hover:text-[#FFB606] decoration-transparent hover:decoration-[#FFB606] 
        underline underline-offset-[10px] cursor-default text-sm`;

    useEffect(() => {
        const handleWindowResize = () => {
            
        }

        document.addEventListener('resize', handleWindowResize)
    }, [])
    

    return (
        <div className="bg-[#26235B] w-full h-auto py-2 mb-20">
            <HStack className="flex flex-row w-full max-w-[1440px] m-auto h-full justify-between px-2">
                <div className="w-2/12 flex flex-row items-center justify-start">
                    <img className="w-[120px]" src={logoImage.src} alt="logo image was not found" />
                </div>
                <div className="w-6/12 hidden flex-row items-center justify-center list-none space-x-5
                    md:flex lg:flex xl:flex 2xl:flex 3xl:flex">
                    <Link href='/' className={linkStyle}> HOME </Link>
                    <Link href='/about' className={linkStyle}> ABOUT </Link>
                    <Link href='/course' className={linkStyle}> COURSE </Link>
                    <Link href='/shop' className={linkStyle}> SHOP </Link>
                    <Link href='/events' className={linkStyle}> EVENTS </Link>
                    <Link href='/contact' className={linkStyle}> CONTACT </Link>
                </div>
                <div className="w-2/12 flex flex-row items-center justify-end space-x-5">
                    <img src={searchIcon.src} className="w-[20px] invert mr-5"/>
                    <img src={profilePicture.src} className="w-[30px]" alt="profile pic was not found" />
                    <img src={hamburgerIcon.src} className="w-[30px] invert tiny:invert-0 peer hidden" alt="menu icon not found" />
                </div>
            </HStack>
            <div className="w-full max-w-[1440px] m-auto bg-black flex-col items-center justify-center list-none space-y-3 py-2 hidden">
                <Link href='/' className={linkStyle}> HOME </Link>
                <Link href='/about' className={linkStyle}> ABOUT </Link>
                <Link href='/course' className={linkStyle}> COURSE </Link>
                <Link href='/shop' className={linkStyle}> SHOP </Link>
                <Link href='/events' className={linkStyle}> EVENTS </Link>
                <Link href='/contact' className={linkStyle}> CONTACT </Link>
            </div>
        </div>
    )
}
