
import { Box, Text } from '@chakra-ui/react';
import PropTypes from 'prop-types'; // Import PropTypes

function DashboardEntry({ entry }) {
  return (
    <Box mb={4} p={4} boxShadow="sm" rounded="md" bg="gray.50">
      <Text>Departure Country: {entry.departureCountry}</Text>
      <Text>Departure City: {entry.departureCity}</Text>
      <Text>Departure Airport: {entry.departureAirport}</Text>
      <Text>Destination Country: {entry.destinationCountry}</Text>
      <Text>Destination City: {entry.destinationCity}</Text>
      <Text>Destination Airport: {entry.destinationAirport}</Text>
      {/* Add more details here if needed */}
    </Box>
  );
}

DashboardEntry.propTypes = {
  entry: PropTypes.shape({
    departureCountry: PropTypes.string.isRequired,
    departureCity: PropTypes.string.isRequired,
    departureAirport: PropTypes.string.isRequired,
    destinationCountry: PropTypes.string.isRequired,
    destinationCity: PropTypes.string.isRequired,
    destinationAirport: PropTypes.string.isRequired,
  }).isRequired,
}; 

export default DashboardEntry;
