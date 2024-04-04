import { Box, HStack } from '@chakra-ui/react';

import CourseSection from './coursesComponents/CoursesSection';
import CoursesHeader from './coursesComponents/CoursesHeader';
import CourseItem from './coursesComponents/CourseItem';

import purchasedCourseImage1 from '../../../public/courses/purchasedCourseImage1.png';
import purchasedCourseImage2 from '../../../public/courses/purchasedCourseImage2.png';
import purchasedCourseImage3 from '../../../public/courses/purchasedCourseImage3.png';

export default function ReleatedCourse() 
{
    return (
        <Box>
            <CourseSection>
                <CoursesHeader title='Related Courses' />
                
                <HStack gap={3} alignItems={'center'} justifyContent={'center'} flexWrap={'wrap'}>
                    <CourseItem
                        thumbnailImage={purchasedCourseImage1}
                        courseName="Grappling"
                        authorName="Dulkar Salman"
                        beforePrice={8000}
                        newPrice={500}
                        priceCurrency="BDT"
                        reviewCount={1235}
                        purchased={false}
                    />
                    <CourseItem 
                        thumbnailImage={purchasedCourseImage2}
                        courseName="MMA"
                        authorName="Adi Sharma"
                        beforePrice={8000}
                        newPrice={500}
                        priceCurrency="BDT"
                        reviewCount={1235}
                        purchased={false}
                    />
                    <CourseItem 
                        thumbnailImage={purchasedCourseImage3}
                        courseName="Cross Training"
                        authorName="Adi Sharma"
                        beforePrice={8000}
                        newPrice={500}
                        priceCurrency="BDT"
                        reviewCount={1235}
                        purchased={false}
                    />
                    <CourseItem 
                        thumbnailImage={purchasedCourseImage1}
                        courseName="Grappling"
                        authorName="Dulkar Salman"
                        beforePrice={8000}
                        newPrice={500}
                        priceCurrency="BDT"
                        reviewCount={1235}
                        purchased={false}
                    />
                </HStack>
            </CourseSection>
        </Box>
    )
}
