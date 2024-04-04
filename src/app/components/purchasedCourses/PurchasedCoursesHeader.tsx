import { HStack, Text, Box, Image, Divider } from "@chakra-ui/react";

import arrowUpIcon from '../../../../public/arrowIupIcon.svg';
import rightArrowIcon from '../../../../public/outlinedRightArrowIcon.svg';

export default function PurchasedCoursesHeader() 
{
    return (
        <HStack justify={'space-between'} className="border-[#BCBBCC] border-b-2 py-2" >
            <Text color={'#26235B'} textDecoration={'4px underline'} textUnderlineOffset={'20px'} textDecorationColor={'#FFB606'}>
                Purchased Courses
            </Text>
            <HStack gap={5}>
                <Box display={'flex'} flexDir={'row'} alignItems={'center'} justifyContent={'center'} gap={2}>
                    <Image src={rightArrowIcon.src} alt='icon not found' className="rotate-180" />
                    <Text color={'black'} bg={'#FFB606'} p={2} px={3} rounded={'50%'}>
                        1
                    </Text>
                    <Image src={rightArrowIcon.src} alt='icon not found' />
                </Box>
                <Box display={'flex'} flexDir={'row'} alignItems={'center'} justifyContent={'center'} gap={2}>
                    <Text color={'gray'}> View all </Text>
                    <Image src={arrowUpIcon.src} alt='icon not found' />
                </Box>
            </HStack>
        </HStack>
    )
}
