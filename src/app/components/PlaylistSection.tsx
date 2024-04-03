import { StaticImageData } from "next/image";

import Typography from "./typography";
import { PlaylistVideo } from "./PlaylistVideo";

import playlistVide from '../../../public/playlistVideo.png';
import playlistThumbnail from '../../../public/playlistThumbnail.png';
import hourglass from '../../../public/hourglass.svg';

import { Container } from "./container";
import { HStack, Image, VStack, Text } from "@chakra-ui/react";

type PlaylistSectionProps = {
    playListThumbnail? : StaticImageData;
    playlistName? : string;
    videos? : [];
    totalDuration? : string;
    numberOfVideos? : number;
}

export default function PlaylistSection(props : PlaylistSectionProps) 
{
    const { playListThumbnail=playlistThumbnail, playlistName, videos, totalDuration, numberOfVideos } = props

    return (
        <Container flowDirection="col" alignItems="start" justifyItems="start" className="w-5/12 p-2 space-y-5">
            
            <VStack align='center' p={2} className="shadow-md rounded-xl p-2">
                <Image src={playListThumbnail.src} alt={`${playListThumbnail.src} was not found`} />
                <HStack w={'100%'} mt={2} alignItems={'center'} justifyContent={'space-between'}>
                    <Typography className="font-bold text-textPrimary">Muay Thai</Typography>
                    <ul className="flex flex-row items-center justify-between space-x-3">
                        <Text className="text-sm">00/21/00</Text>
                        <Typography className="text-sm">20</Typography>
                    </ul>
                </HStack>
            </VStack>

            <VStack w={'100%'} spacing={3}>
                <PlaylistVideo title="Muay Thai Class 1" thumbnail={playlistVide} />
                <PlaylistVideo title="Muay Thai Test 4 Nothing Brand New" thumbnail={playlistVide} />
                <PlaylistVideo title="Muay Thai Class 1" thumbnail={playlistVide} />
                <PlaylistVideo title="Muay Thai Class 1" thumbnail={playlistVide} />
                <PlaylistVideo title="Muay Thai Class 1" thumbnail={playlistVide} />
                <PlaylistVideo title="Muay Thai Class 1" thumbnail={playlistVide} />
                <PlaylistVideo title="Muay Thai Class 1" thumbnail={playlistVide} />
            </VStack>

        </Container>
    )
}
