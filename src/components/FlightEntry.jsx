import { Box, Heading, Text } from "@chakra-ui/react";
import PropTypes from "prop-types"; 


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
      <Box borderWidth="1px" borderRadius="lg" p="4" my="2">
        <Heading as="h3" size="md">
          {entryTitle}
        </Heading>
        <Text>Departure: {departureCity}, {departureCountry} - {departureAirport}</Text>
        <Text>Destination: {destinationCity}, {destinationCountry} - {destinationAirport}</Text>
        <Text>Carbon Estimate (kg): {carbonKg}</Text>
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