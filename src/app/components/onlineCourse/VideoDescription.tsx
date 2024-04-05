import { Box, HStack, Image, Text, VStack } from '@chakra-ui/react';

import instructor from '../../../../public/images/instructorGuy.png';
import starIcon from '../../../../public/images/starIcon.png';


type VideoDescriptionProps = {
    descirptionText : string;
    instructorName : string;
    instructorType : string;
    instructorModel : string;
}

export default function VideoDescription(props : VideoDescriptionProps) 
{
    const { descirptionText, instructorName, instructorType, instructorModel } = props;

    return (
        <Box bg={'#E9E9EF'} p={2} pb={5}>
            <Text className="text-xs leading-5 font-sans">
                {descirptionText}
            </Text>
            <Text mt={5} mb={5}>Instructor</Text>
            <HStack className=''>
                <Image 
                    src={instructor.src} 
                    alt='instructor image was not found' 
                    className='w-40'
                />
                <VStack className='space-y-2'>
                    <Text className='text-sm md:text-base lg:text-base xl:text-base 2xl:text-base 3xl:text-base'>Name : {instructorName} </Text>
                    <Box display={'flex'} flexDir={'row'} alignItems={'center'} justifyContent={'center'} className='space-x-2'>
                        <Image src={starIcon.src} alt='img was not found' className='w-5' />
                        <Image src={starIcon.src} alt='img was not found' className='w-5' />
                        <Image src={starIcon.src} alt='img was not found' className='w-5' />
                        <Image src={starIcon.src} alt='img was not found' className='w-5' />
                        <Image src={starIcon.src} alt='img was not found' className='w-5' />
                    </Box>
                    <Text className='text-sm md:text-base lg:text-base xl:text-base 2xl:text-base 3xl:text-base'>Type : {instructorType}</Text>
                    <Text className='text-sm md:text-base lg:text-base xl:text-base 2xl:text-base 3xl:text-base'>{instructorModel}</Text>
                </VStack>
            </HStack>
        </Box>
    )
}
