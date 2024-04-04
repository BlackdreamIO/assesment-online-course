import { StaticImageData } from 'next/image';
import { Box, HStack, Image, Text } from '@chakra-ui/react';

import VideoDescription from './VideoDescription';
import VideoDetail from './VideoDetail';

import videoThumbnail from '../../../../public/videoImage.png';
import videoPlayImage from '../../../../public/videoPlayImage.png';

import playIcon from '../../../../public/playIcon.svg';
import playNextIcon from '../../../../public/playNextIcon.svg';
import audioIcon from '../../../../public/audioIcon.svg';
import toggleIcon from '../../../../public/toogleIcon.svg';
import gareIcon from '../../../../public/gareIcon.svg'
import fullscreenIcon from '../../../../public/fullscreenIcon.svg';


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
                    <Image src={videoPlayImage.src} alt="icon was not found" className='w-20 relative left-[-50%] top-[-40%]' />
                </Box>

                <HStack gap={5} justify={'space-between'} className='relative bg-black bg-opacity-50 p-4'>
                    <HStack gap={5}>
                        <Image src={playIcon.src} className='w-4' />
                        <Image src={playNextIcon.src} className='w-3' />
                        <Image src={audioIcon.src} className='w-3' />
                        { /* Timestramp */ }
                        <Text color={'gray'} fontSize={'small'}>00;00:00 / 12;00:00</Text>
                    </HStack>
                    <HStack gap={5}>
                        <Image src={toggleIcon.src} className='w-3 text-red-500' />
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
