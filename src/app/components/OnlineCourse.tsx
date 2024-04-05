import { Box } from "@chakra-ui/react";
import { OnlineCourseHeader } from "./onlineCourse/OnlineCourseHeader";

import VideoSection from "./onlineCourse/VideoSection";
import PlaylistSection from "./onlineCourse/PlaylistSection";

import playlistThumbnail from '../../../public/images/playlistThumbnail.png';
import playlistVideo from '../../../public/images/playlistVideo.png'
import videoThumbnail from '../../../public/images/videoImage.png';

import { PlayListVideoType } from "../type/types";

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
        <Box className="bg-white py-2 px-5 space-y-5 m-auto rounded-3xl shadow-lg mt-10
          w-full max-w-[1920px] h-auto md:w-11/12 lg:w-10/12 xl:w-10/12 2xl:w-10/12">
            <OnlineCourseHeader />

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
        </Box>
    )
}
