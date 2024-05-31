import { Flex, Box, Text, Heading } from "@chakra-ui/react";

const Calculator = () => {
    return (
        <Flex direction="column" align="top" justify="left" minHeight="100vh" p={4}>
          <Heading mb={4}>Carbon Calculator</Heading>
        <Box>
        <Text>Calculate your carbon footprint here.</Text>
    
        </Box>
        </Flex>
      );
};

export default Calculator;
