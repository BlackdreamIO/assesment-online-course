import { Box, Card, CardBody, Text, HStack, Image, VStack, Button } from '@chakra-ui/react';
import { CourseComponentType } from '@/app/type/types';

import loveIcon from '../../../../public/loveIcon.svg';
import shareIcon from '../../../../public/shareIcon.svg';
import starIcon from '../../../../public/starIcon.svg';
import shopIcon from '../../../../public/shopIcon.svg';
import cartIcon from '../../../../public/cart.svg';


export default function CourseItem(props : CourseComponentType) 
{
    const { thumbnailImage, authorName, courseName, reviewCount, purchased, beforePrice, newPrice, priceCurrency } = props;

    return (
        <Card p={0}>
            <CardBody p={1} className='w-full h-auto shadow-md rounded-md
                tiny:w-full sm:w-72 md:w-72 lg:w-72 xl:w-72 2xl:w-72 3xl:w-72
                sm:h-80 md:h-80 lg:h-80 xl:h-80 2xl:h-80 3xl:h-80'>
                
                <VStack gap={1}>
                    <Box>
                        <Image src={thumbnailImage.src} alt={`${thumbnailImage.src} was not found`} rounded={'10px'} />
                        <HStack justify={'space-between'} my={2} px={2}>
                            <Text>{authorName}</Text>
                            <Box display={'flex'} flexDir={'row'} gap={'2'} alignItems={'center'}>
                                <Image src={loveIcon.src} alt={`icon not found`} className='w-5' />
                                <Image src={shareIcon.src} alt={`icon not found`} className='w-5' />
                                {
                                    !purchased && ( <Image src={cartIcon.src} alt={`icon not found`} className='w-5' /> )
                                }
                            </Box>
                        </HStack>
                    </Box>
                    <Box px={2} w={'100%'} display={'flex'} flexDir={'column'} alignItems={'start'} justifyContent={'start'} gap={3} overflow={'hidden'}>
                        <Text textColor={'#565656'} fontWeight={'800'} fontSize={'x-large'} textOverflow={'ellipsis'} whiteSpace={'nowrap'}>
                            {courseName}
                        </Text>
                        <HStack gap={2}>
                            <HStack>
                                <Image src={starIcon.src} alt={'start icon not found'} className='w-7 tiny:w-7 sm:w-5 md:w-5 lg:w-5 xl:w-5 2xl:w-5 3xl:w-5' />
                                <Image src={starIcon.src} alt={'start icon not found'} className='w-7 tiny:w-7 sm:w-5 md:w-5 lg:w-5 xl:w-5 2xl:w-5 3xl:w-5' />
                                <Image src={starIcon.src} alt={'start icon not found'} className='w-7 tiny:w-7 sm:w-5 md:w-5 lg:w-5 xl:w-5 2xl:w-5 3xl:w-5' />
                                <Image src={starIcon.src} alt={'start icon not found'} className='w-7 tiny:w-7 sm:w-5 md:w-5 lg:w-5 xl:w-5 2xl:w-5 3xl:w-5' />
                                <Image src={starIcon.src} alt={'start icon not found'} className='w-7 tiny:w-7 sm:w-5 md:w-5 lg:w-5 xl:w-5 2xl:w-5 3xl:w-5' />
                            </HStack>
                            <Text textColor={'#565656'}>{reviewCount} Reviews</Text>
                        </HStack>
                        {
                            purchased && ( <Text textColor={'green'} fontWeight={'500'}>Purchased</Text> )
                        }
                    </Box>
                    {
                        !purchased && (
                            <Box mt={5} w={'100%'} display={'flex'} flexDir={'row'} alignItems={'center'} justifyContent={'space-between'}>
                                <HStack gap={1} display={'flex'} flexDir={'row'} alignItems={'start'} justifyContent={'space-between'}>
                                    <Text textColor={'#26235B'} className='text-lg'>{priceCurrency}. {newPrice} </Text>
                                    <Text textColor={'gray'} fontSize={'x-small'} textDecoration={'1px line-through rgb(200,200,200)'}>
                                        {priceCurrency}. {beforePrice} 
                                    </Text>
                                </HStack>
                                <Button p={0} bg={'#FFB606'} _hover={{bg:'#FFB606'}} fontSize={'small'} rounded={'40px'} className='w-5/12 flex flex-row items-center justify-center gap-2'>
                                    <Image src={shopIcon.src} alt='icon not found' />
                                    Buy Now
                                </Button>
                            </Box>
                        )
                    }
                </VStack>
            </CardBody>
        </Card>
    )
}
