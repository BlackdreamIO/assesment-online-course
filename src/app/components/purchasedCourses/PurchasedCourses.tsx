import { Box, HStack } from "@chakra-ui/react";

import PurchasedCoursesHeader from "./PurchasedCoursesHeader";
import CourseComponent from "./CourseComponent";

import purchasedCourseImage1 from '../../../../public/courses/purchasedCourseImage2.png';

export default function PurchasedCourses() 
{
    return (
        <Box className="py-2 px-0 space-y-5 m-auto rounded-3xl shadow-lg mt-10
          w-full h-auto max-w-7xl md:w-11/12 lg:w-10/12 xl:w-10/12 2xl:w-10/12
          md:px-5 lg:px-5 xl:px-5 2xl:px-5"> 
            
            <PurchasedCoursesHeader />
            
            <HStack gap={3} alignItems={'center'} justifyContent={'center'} flexWrap={'wrap'}>
                <CourseComponent 
                    thumbnailImage={purchasedCourseImage1}
                    courseName="Grappling"
                    authorName="Dulkar Salman"
                    beforePrice={8000}
                    newPrice={500}
                    priceCurrency="BDT"
                    reviewCount={1235}
                    purchased
                />
                <CourseComponent 
                    thumbnailImage={purchasedCourseImage1}
                    courseName="Grappling"
                    authorName="Dulkar Salman"
                    beforePrice={8000}
                    newPrice={500}
                    priceCurrency="BDT"
                    reviewCount={1235}
                    purchased
                />
                <CourseComponent 
                    thumbnailImage={purchasedCourseImage1}
                    courseName="Grappling"
                    authorName="Dulkar Salman"
                    beforePrice={8000}
                    newPrice={500}
                    priceCurrency="BDT"
                    reviewCount={1235}
                    purchased
                />
                <CourseComponent 
                    thumbnailImage={purchasedCourseImage1}
                    courseName="Grappling"
                    authorName="Dulkar Salman"
                    beforePrice={8000}
                    newPrice={500}
                    priceCurrency="BDT"
                    reviewCount={1235}
                    purchased
                />
            </HStack>
        </Box>
    )
}
