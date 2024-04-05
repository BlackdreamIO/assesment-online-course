import { StaticImageData } from 'next/image';
import { Box, HStack, Image, Text } from '@chakra-ui/react';

import VideoDescription from './VideoDescription';
import VideoDetail from './VideoDetail';

import videoThumbnail from '../../../../public/images/videoImage.png';
import videoPlayImage from '../../../../public/images/videoPlayImage.png';

import playIcon from '../../../../public/svg/playIcon.svg';
import playNextIcon from '../../../../public/svg/playNextIcon.svg';
import audioIcon from '../../../../public/svg/audioIcon.svg';
import toggleIcon from '../../../../public/svg/toogleIcon.svg';
import gareIcon from '../../../../public/svg/gareIcon.svg'
import fullscreenIcon from '../../../../public/svg/fullscreenIcon.svg';


type VideoSectionProps = {
    videoSrc : StaticImageData;
    title : string;
    viewCount : number;

    descirptionText : string;
    instructorName : string;
    instructorType : string;
    instructorModel : string;
}

export default function VideoSection(props : VideoSectionProps) 
{
    const { 
        title, 
        videoSrc = videoThumbnail, 
        viewCount, 
        descirptionText, 
        instructorName, 
        instructorType, 
        instructorModel 
    } = props;

    return (
        <Box className="w-full md:w-7/12 lg:w-7/12 xl:w-7/12 2xl:w-7/12 3xl:w-7/12 space-y-5">
            <Box className='relative bg-[#26235B] bg-opacity-90 rounded-xl'>

                <Image src={videoSrc.src} alt="video was not found" className='opacity-60' />
                
                <Box className='absolute left-[50%] top-[40%]'>
                    <Image src={videoPlayImage.src} alt="icon was not found" className='w-10 relative left-[-50%] top-[-40%] md:w-10 lg:w-20 xl:w-20 2xl:w-20 3xl:w-20' />
                </Box>

                <HStack justify={'space-between'} className='relative bg-black bg-opacity-50 p-4 space-x-5'>
                    <HStack className='space-x-3'>
                        <Image src={playIcon.src} className='w-3' />
                        <Image src={playNextIcon.src} className='w-3' />
                        <Image src={audioIcon.src} className='w-4' />
                        { /* Timestramp */ }
                        <Text color={'gray'} className='text-xxs md:text-sm lg:text-sm xl:text-sm 2xl:text-sm 3xl:text-sm'>00;00:00 / 12;00:00</Text>
                    </HStack>
                    <HStack className='space-x-3'>
                        <Image src={toggleIcon.src} className='w-4' />
                        <Image src={gareIcon.src} className='w-3' />
                        <Image src={fullscreenIcon.src} className='w-3' />
                    </HStack>
                </HStack>
            </Box>
            
            <VideoDetail 
                title={title}
                viewCount={viewCount}
            />
            
            <VideoDescription
                descirptionText={descirptionText}
                instructorName={instructorName}
                instructorType={instructorType}
                instructorModel={instructorModel}
            />
        </Box>
    )
}
