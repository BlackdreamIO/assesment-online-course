import { Box, HStack, Text } from '@chakra-ui/react';

export const OnlineCourseHeader = () => {
    return (
        <Box>
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
        </Box>
    )
}
