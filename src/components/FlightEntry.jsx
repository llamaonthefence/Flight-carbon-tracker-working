import { Flex, Box, HStack, Heading, Text, Spacer, Button } from "@chakra-ui/react";
import PropTypes from "prop-types"; 
import RemoveRedEyeOutlinedIcon from '@mui/icons-material/RemoveRedEyeOutlined';
import EditOutlinedIcon from '@mui/icons-material/EditOutlined';
import DeleteForeverOutlinedIcon from '@mui/icons-material/DeleteForeverOutlined';


function FlightEntry({ entry }) {
    const {
      entryTitle,
      departureCountry,
      departureCity,
      departureAirport,
      destinationCountry,
      destinationCity,
      destinationAirport,
      carbonKg,
    } = entry;
  
    return (
      <Box borderWidth="1px" borderRadius="lg" p="10" my="6" width="100%">
        <Flex justify="space-between">
        <Box>
        <Heading as="h3" size="md">
          {entryTitle}
        </Heading>
        <Text>Departure: {departureCity}, {departureCountry} - {departureAirport}</Text>
        <Text>Destination: {destinationCity}, {destinationCountry} - {destinationAirport}</Text>
        <Text>Carbon Estimate (kg): {carbonKg}</Text>
        </Box>

        <Box ml="12">
        <HStack mt="4" spacing="4">
            <Spacer />
            <Button rightIcon={<RemoveRedEyeOutlinedIcon />} borderRadius="full" colorScheme="teal" iconSpacing="0"/>
            <Button rightIcon={<EditOutlinedIcon />} borderRadius="full"colorScheme="teal" iconSpacing="0"/>
            <Button rightIcon={<DeleteForeverOutlinedIcon />} borderRadius="full" colorScheme="teal" iconSpacing="0"/>
        </HStack>
        </Box>
        </Flex>
      </Box>
    );
  }



  FlightEntry.propTypes = {
    entry: PropTypes.shape({
      entryTitle: PropTypes.string.isRequired,
      departureCountry: PropTypes.string.isRequired,
      departureCity: PropTypes.string.isRequired,
      departureAirport: PropTypes.string.isRequired,
      destinationCountry: PropTypes.string.isRequired,
      destinationCity: PropTypes.string.isRequired,
      destinationAirport: PropTypes.string.isRequired,
    }).isRequired,
  };




  
  export default FlightEntry;


  // https://stackoverflow.com/questions/76496688/error-coming-in-ui-but-response-coming-correct-in-console
  