import React from "react";
import { Box } from "@chakra-ui/react";

export default function CourseSection({children} : { children : React.ReactNode }) 
{

    return (
        <Box className="py-2 px-0 space-y-5 m-auto rounded-3xl mt-10
          w-full h-auto max-w-[1920px] md:w-11/12 lg:w-10/12 xl:w-10/12 2xl:w-10/12
          md:px-5 lg:px-5 xl:px-5 2xl:px-5"> 
        
            {children}
        </Box>
    )
}
