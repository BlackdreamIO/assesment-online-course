'use client'

import Link from "next/link";
import { motion } from "framer-motion";
import { useState } from "react";
import { Box, Divider, Flex, HStack, Image, Spacer, Text } from "@chakra-ui/react";

import logoImage from '../../../public/logoImage.png';
import profilePicture from '../../../public/profileImage.png';
import searchIcon from '../../../public/searchIcon.svg';
import hamburgerIcon from '../../../public/hamburger.png';

/**
 * MAKE IT RESPONSIVE FOR SMALLER DEVICES
 * INPLEMENT ANIMATION WITH FRAMER MOTION  
**/ 

export default function Navbar() 
{   
    const [isOpen, setIsOpen] = useState(false);

    const handleClick = () => {
        setIsOpen(!isOpen);
    };

    const linkStyle = `text-white hover:text-[#FFB606] decoration-transparent hover:decoration-[#FFB606] 
        underline underline-offset-[10px] cursor-default text-sm`;

    return (
        <Box className="bg-[#26235B] w-full h-auto py-2 mb-20">
            <HStack className="flex flex-row w-full max-w-[1920px] m-auto h-full justify-between px-2">
                <Box className="w-6/12 flex flex-row items-center justify-start">
                    <Image className="w-full max-w-28" src={logoImage.src} alt="logo image was not found" />
                </Box>
                <Box className="hidden flex-row items-center justify-center list-none space-x-5
                    md:flex lg:flex xl:flex 2xl:flex 3xl:flex">
                    <Link href='/' className={linkStyle}> HOME </Link>
                    <Link href='/about' className={linkStyle}> ABOUT </Link>
                    <Link href='/course' className={linkStyle}> COURSE </Link>
                    <Link href='/shop' className={linkStyle}> SHOP </Link>
                    <Link href='/events' className={linkStyle}> EVENTS </Link>
                    <Link href='/contact' className={linkStyle}> CONTACT </Link>
                </Box>
                <Flex w={'50%'}>
                    <Spacer />
                    <HStack justify={'end'} gap={5} className="space-x-3">
                        <Image src={searchIcon.src} className="w-[20px] invert"/>
                        <Image src={profilePicture.src} className="w-[30px]" alt="profile pic was not found" />
                        <Image
                            src={hamburgerIcon.src} 
                            className="w-5 invert tiny:invert-0 peer visible
                            md:hidden lg:hidden xl:hidden 2xl:hidden 3xl:hidden"
                            alt="menu icon not found"
                            onClick={handleClick}
                        />
                    </HStack>
                </Flex>
            </HStack>
            <Divider style={{display : isOpen ? 'block' : 'none'}} my={3}/>
            
            <motion.div 
                initial={{ height: 0 }}
                animate={{ height: isOpen ? 'auto' : 0 }}
                transition={{ duration: 0.2 }}
                className="relative top-0 left-0 w-full flex flex-col items-center justify-center space-y-5 overflow-hidden
                md:hidden lg:hidden xl:hidden 2xl:hidden 3xl:hidden">
                <Link href='/' className={linkStyle}> HOME </Link>
                <Link href='/about' className={linkStyle}> ABOUT </Link>
                <Link href='/course' className={linkStyle}> COURSE </Link>
                <Link href='/shop' className={linkStyle}> SHOP </Link>
                <Link href='/events' className={linkStyle}> EVENTS </Link>
                <Link href='/contact' className={linkStyle}> CONTACT </Link>
            </motion.div>

        </Box>
    )
}
