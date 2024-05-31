import { Flex, Box, Text, Heading } from "@chakra-ui/react";


const Home = () => {
  return (
    <Flex direction="column" align="top" justify="left" minHeight="100vh" p={4}>
      <Heading mb={4}>Home</Heading>
    <Box>
    <Text>Welcome.</Text>

    </Box>
    </Flex>
  );
};

export default Home;
