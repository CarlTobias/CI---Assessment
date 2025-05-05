import React from 'react'
import "../../index.css";

import { Box, Flex } from '@chakra-ui/react';

const HomePage = () => {
  return (
    <>
    <Flex justify={"center"} align={"center"} flexDirection={"row"}height={"100vh"}>
        <Box>1</Box>
        <Box>2</Box>
        {/* NavBar which contain the buttons that will navigate to "My Car" and "Forum" sections */}


        {/* These will be navigated similar to how it is in the auth page with sign up and sign in */}
        {/* <MyCar /> */}
        {/* <MyForum /> */}
    </Flex>
    </>
  )
}

export default HomePage;