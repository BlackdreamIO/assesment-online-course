import { HStack, Text, Box, Image, Divider } from "@chakra-ui/react";

import arrowUpIcon from '../../../../public/svg/arrowUpIcon.svg';
import rightArrowIcon from '../../../../public/svg/outlinedRightArrowIcon.svg';

export default function CoursesHeader({title} : { title : string }) 
{
    return (
        <HStack justify={'space-between'} className="border-[#BCBBCC] border-b-2 py-2 px-2" >
            <Text color={'#26235B'} textDecoration={'4px underline'} textUnderlineOffset={'20px'} textDecorationColor={'#FFB606'}>
                {title}
            </Text>
            <HStack className="space-x-3">
                <Box display={'flex'} flexDir={'row'} alignItems={'center'} justifyContent={'center'} className="space-x-2">
                    <Image src={rightArrowIcon.src} alt='icon not found' className="w-3 rotate-180" />
                    <Text color={'black'} bg={'#FFB606'} p={1} px={3} rounded={'50%'}>
                        1
                    </Text>
                    <Image src={rightArrowIcon.src} alt='icon not found' className="w-3" />
                </Box>
                <Box display={'flex'} flexDir={'row'} alignItems={'center'} justifyContent={'center'} className="space-x-2">
                    <Text color={'gray'} className="text-sm md:text-base lg:text-base xl:text-base 2xl:text-base 3xl:text-base"> View all </Text>
                    <Image src={arrowUpIcon.src} alt='icon not found' />
                </Box>
            </HStack>
        </HStack>
    )
}
