import { Box, Card, CardBody, Text, HStack, Image, VStack, Button } from '@chakra-ui/react';
import { CourseItemType } from '@/app/type/types';

import loveIcon from '../../../../public/svg/loveIcon.svg';
import shareIcon from '../../../../public/svg/shareIcon.svg';
import starIcon from '../../../../public/svg/starIcon.svg';
import shopIcon from '../../../../public/svg/shopIcon.svg';
import cartIcon from '../../../../public/svg/cart.svg';


export default function CourseItem(props : CourseItemType) 
{
    const { thumbnailImage, authorName, courseName, reviewCount, purchased, beforePrice, newPrice, priceCurrency } = props;

    return (
        <Card p={0}>
            <CardBody p={1} className='w-11/12 h-auto shadow-md rounded-md m-auto
                tiny:w-11/12 sm:w-52 md:w-64 lg:w-64 xl:w-64 2xl:w-64 3xl:w-64
                sm:h-80 md:h-80 lg:h-80 xl:h-80 2xl:h-80 3xl:h-80 '>
                
                <VStack gap={1}>
                    <Box>
                        <Image src={thumbnailImage.src} alt={`${thumbnailImage.src} was not found`} rounded={'10px'} />
                        <HStack justify={'space-between'} my={2} px={2}>
                            <Text>{authorName}</Text>
                            <Box display={'flex'} flexDir={'row'} alignItems={'center'} className='space-x-3'>
                                <Image src={loveIcon.src} alt={`icon not found`} className='w-4 md:w-5 lg:w-5 xl:w-5 2xl:w-5 3xl:w-5' />
                                <Image src={shareIcon.src} alt={`icon not found`} className='w-4 md:w-5 lg:w-5 xl:w-5 2xl:w-5 3xl:w-5' />
                                {
                                    !purchased && ( <Image src={cartIcon.src} alt={`icon not found`} className='w-5' /> )
                                }
                            </Box>
                        </HStack>
                    </Box>
                    <Box px={2} w={'100%'} display={'flex'} flexDir={'column'} alignItems={'start'} justifyContent={'start'} overflow={'hidden'} className='space-y-3'>
                        <Text textColor={'#565656'} fontWeight={'800'} fontSize={'large'} textOverflow={'ellipsis'} whiteSpace={'nowrap'}>
                            {courseName}
                        </Text>
                        <HStack className='space-x-2'>
                            <HStack>
                                <Image src={starIcon.src} alt={'start icon not found'} className='w-7 tiny:w-7 sm:w-4 md:w-4 lg:w-4 xl:w-4 2xl:w-4 3xl:w-4' />
                                <Image src={starIcon.src} alt={'start icon not found'} className='w-7 tiny:w-7 sm:w-4 md:w-4 lg:w-4 xl:w-4 2xl:w-4 3xl:w-4' />
                                <Image src={starIcon.src} alt={'start icon not found'} className='w-7 tiny:w-7 sm:w-4 md:w-4 lg:w-4 xl:w-4 2xl:w-4 3xl:w-4' />
                                <Image src={starIcon.src} alt={'start icon not found'} className='w-7 tiny:w-7 sm:w-4 md:w-4 lg:w-4 xl:w-4 2xl:w-4 3xl:w-4' />
                                <Image src={starIcon.src} alt={'start icon not found'} className='w-7 tiny:w-7 sm:w-4 md:w-4 lg:w-4 xl:w-4 2xl:w-4 3xl:w-4' />
                            </HStack>
                            <Text textColor={'#565656'} className='text-base sm:text-xs md:text-base lg:text-base xl:text-base 2xl:text-base 3xl:text-base'>{reviewCount} Reviews</Text>
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
                                <Button p={0} bg={'#FFB606'} _hover={{bg:'#FFB606'}} fontSize={'small'} rounded={'40px'} className='w-5/12 flex flex-row items-center justify-center space-x2'>
                                    <Image src={shopIcon.src} alt='icon not found' className='mr-2' />
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
