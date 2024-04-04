import { AspectRatio, Box, HStack, Image, Text, Tooltip  } from "@chakra-ui/react";

import { StaticImageData } from "next/image";

import playButtonIcon from '../../../../public/playButtonIcon.svg';
import openPadlock from '../../../../public/openPadlock.svg';

type PlaylistVideoProps = {
    title : string;
    thumbnail : StaticImageData;
}

export const PlaylistVideo = (props : PlaylistVideoProps) => {
    
    const { title='Muay Class 1', thumbnail } = props;

    return (
        <Box 
            bg={'#FCFCFC'} w={'100%'} p={2} 
            _hover={{bg : '#FFB606'}} 
            display={'flex'} flexDir={'row'} 
            alignItems={'center'} justifyContent={'space-between'} 
            transition={'0.1s all ease-in-out'} 
            rounded={'10px'}
            className="shadow"
            tabIndex={0}>
            <Box display={'flex'} alignItems={'center'} flexDir={'row'} className="w-10/12 space-x-3">
                <AspectRatio w={'25%'} ratio={1 / 0.7}>
                    <Image
                        src={thumbnail.src}
                        alt={`${thumbnail.src} video was not found`} 
                    />
                </AspectRatio>
                <Box w={'100%'} display={'flex'} flexDir={'column'} alignItems={'start'} justifyContent={'center'} gap={'2'} overflow={'hidden'}>
                    <Tooltip label={title} placement="bottom-start" openDelay={500} bg={'white'} textColor={'black'} fontSize={'x-small'} className="shadow-md">
                        <Text textOverflow={'ellipsis'} whiteSpace={'nowrap'} className="text-xs sm:text-xs md:text-sm lg:text-sm xl:text-sm 2xl:text-sm">
                            {title}
                        </Text>
                    </Tooltip>
                    <HStack>
                        <Image src={playButtonIcon.src} alt="icon was not found" />
                        <Text className="text-xs md:text-xxs">00:00:00 / 00:22:50</Text>
                    </HStack>
                </Box>
            </Box>
            <Image src={openPadlock.src} alt="icon was not found" />
        </Box>
    )
}