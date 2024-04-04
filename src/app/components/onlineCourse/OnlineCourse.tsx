import { Box, Grid, Text, HStack, Container } from "@chakra-ui/react";

import PlaylistSection from "./PlaylistSection";
import VideoSection from "./VideoSection";

import playlistThumbnail from '../../../../public/playlistThumbnail.png';
import playlistVideo from '../../../../public/playlistVideo.png'
import videoThumbnail from '../../../../public/videoImage.png';

import { PlayListVideoType } from "../../type/playlistVideo";

export default function OnlineCourse() 
{

    const playListVideos : PlayListVideoType | any = [
        {
            title : 'Muay Thai Class 1',
            thumbnail : playlistVideo
        },
        {
            title : 'Muay Thai Class 1',
            thumbnail : playlistVideo
        },
        {
            title : 'Muay Thai Class 1',
            thumbnail : playlistVideo
        },
        {
            title : 'Muay Thai Class 1',
            thumbnail : playlistVideo
        },
        {
            title : 'Muay Thai Class 1',
            thumbnail : playlistVideo
        },
        {
            title : 'Muay Thai Class 1',
            thumbnail : playlistVideo
        },
        {
            title : 'Muay Thai Class 1',
            thumbnail : playlistVideo
        },
    ]

    return (
        <div className="bg-white py-2 px-5 space-y-5 m-auto rounded-3xl shadow-lg mt-10
          w-full h-auto max-w-7xl md:w-11/12 lg:w-10/12 xl:w-10/12 2xl:w-10/12">
            
            <Text variant="h1" fontSize={'xx-large'} fontWeight={'800'} className="text-center text-[#26235B]">
                ONLINE <span className="text-[#FFB606]"> COURSES </span>
            </Text>
            
            <HStack flexFlow="row" alignItems="center" justify={'space-between'}>
                <Text className="text-center text-[#26235B] underline underline-offset-8 decoration-[#FFB606]">
                    Street Fight
                </Text>
                <Text className="text-center text-neutral-500">
                    Claim Certificate
                </Text>
            </HStack>
            
            <Box className="flex flex-col items-start sm:flex-col md:flex-row lg:flex-row xl:flex-row 2xl:flex-row 3xl:flex-row">
                <VideoSection 
                    title="Muay Thai Class 1"
                    viewCount={12}
                    videoSrc={videoThumbnail}
                    descirptionText={`
                        Hey learners, Do you know about Figma? Figma is a very powerful Web application that runs online. 
                        There are virtually no platform boundaries when it comes to using Figma because you can design within a web browser or 
                        using their desktop application made for windows and macs. In this course, you learn how to use Figma for UI design and also 
                        I can show you many projects and make a perfect portfolio with eye-catching Mockup so that you can easily find an offline job.
                    `}
                    instructorName="Adil Rashid"
                    instructorType="Karate"
                    instructorModel="Black Belt"
                />
                <PlaylistSection
                    playlistName="Muay Thai"
                    numberOfVideos={playListVideos.length}
                    playListThumbnail={playlistThumbnail}
                    playListvideos={playListVideos} 
                />
            </Box>
         
        </div>
    )
}
