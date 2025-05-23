import { Box, Container, Grid } from "@chakra-ui/react";
import ForumOnline from "./ForumOnline/ForumOnline";

const MyForum = () => {
  return (
    <Container maxW="container.xl" py={6}>
      <Grid
        templateColumns={{ base: "1fr", md: "1fr 2.5fr" }}
        gap={6}
        alignItems="start"
      >

        {/* Forum Posts (right column, scrollable) */}
        <Box
          maxH="80vh"
          overflowY="auto"
          p={4}
          borderRadius="2xl"
          boxShadow="md"
          bg="white"
        >
          <ForumOnline />
        </Box>
      </Grid>
    </Container>
  );
};

export default MyForum;