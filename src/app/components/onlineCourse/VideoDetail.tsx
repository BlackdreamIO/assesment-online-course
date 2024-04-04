import { Box, HStack, Image, Text } from "@chakra-ui/react";

import loveIcon from '../../../../public/loveIcon.svg';
import shareIcon from '../../../../public/shareIcon.svg';

type VideoDetailType = {
    title : string;
    viewCount : number;
}

export default function VideoDetail(props : VideoDetailType) 
{
    const { title, viewCount } = props;

    return (
        <HStack justify={'space-between'}>
            <Box display={'flex'} alignItems={'center'} gap={2}>
                <Text>{title}</Text>
                <Text color={'gray'} fontSize={'small'}>{viewCount}k Views</Text>
            </Box>
            <Box display={'flex'} alignItems={'center'} gap={3}>
                <Image src={loveIcon.src} alt="icon not found" className="w-4" />
                <Image src={shareIcon.src} alt="icon not found" className="w-4" />
            </Box>
        </HStack>
    )
}
