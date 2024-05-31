import { Box, Heading, Text } from "@chakra-ui/react";
import FavouriteAirlinesList from "../components/FavouriteAirlinesList";


const FavouriteAirlines = () => {
  return (
    <Box p={4}>
      <Heading mb={4}>Favourite Airlines</Heading>
      <Text fontSize="lg" mb={2}>
        Search for your favourite airlines
      </Text>
      <FavouriteAirlinesList /> 
    </Box>
  );
};

export default FavouriteAirlines;
