import { StaticImageData } from "next/image";

import { HStack, Image, VStack, Text, Box } from "@chakra-ui/react";

import { PlaylistVideo } from "./PlaylistVideo";


import playlistThumbnail from '../../../../public/playlistThumbnail.png';
import hourglass from '../../../../public/hourglass.svg';
import playButtonIcon from '../../../../public/playButtonIcon.svg';
import rightArrowIcon from '../../../../public/rightArrowIcon.svg';

import { PlayListVideoType } from "../../type/types";

type PlaylistSectionProps = {
    playlistName? : string;
    playListThumbnail? : StaticImageData;
    playListvideos? : PlayListVideoType[];
    totalDuration? : string;
    numberOfVideos? : number;
}

export default function PlaylistSection(props : PlaylistSectionProps) 
{
    const { playListThumbnail=playlistThumbnail, playlistName='Muay Thai', playListvideos, totalDuration='00:14:21', numberOfVideos=20 } = props;

    return (
        <Box className="flex flex-col items-start justify-start w-full p-0 space-y-5 
            md:w-5/12 lg:w-5/12 xl:w-5/12 2xl:w-5/12 3xl:w-5/12
            self-end md:self-auto lg:self-auto 2xl:self-auto 3xl:self-auto
            md:p-2 lg:p-2 xl:p-2 2xl:p-2 3xl:p-2">
            
            <VStack align='center' p={2} className="shadow-md rounded-xl p-2">
                
                <Image src={playListThumbnail.src} alt={`${playListThumbnail.src} was not found`} />
                
                <HStack w={'100%'} mt={2} alignItems={'center'} justifyContent={'space-between'} overflow={'hidden'}>
                    <Text className="font-bold text-textPrimary overflow-ellipsis whitespace-wrap max-h-12">
                        {playlistName}
                    </Text>
                    <HStack alignItems={'center'} justifyContent={'space-between'} className="space-x-3">
                        <Text className="text-sm flex flex-row items-center gap-2">
                            <Image src={hourglass.src} alt="icon not found" className="w-2/12 mr-2"/>
                            {totalDuration}
                        </Text>
                        <Text className="text-sm flex flex-row items-center gap-2">
                            <Image src={playButtonIcon.src} alt="icon not found" className="w-4 mr-2" />
                            {numberOfVideos}
                        </Text>
                    </HStack>
                </HStack>
            </VStack>

            <VStack w={'100%'} spacing={3} maxH={'600px'} overflowX={'hidden'} overflowY={'scroll'} >
                {
                    playListvideos?.map((video : PlayListVideoType) => (
                        <PlaylistVideo key={video.title} title={video.title} thumbnail={video.thumbnail} />
                    ))
                }
                <Text className="text-sm justify-self-end self-end flex flex-row gap-2 mt-2"> 
                    See More
                    <Image src={rightArrowIcon.src} alt="icon was not found" className="ml-2" /> 
                </Text>
            </VStack>

        </Box>
    )
}
