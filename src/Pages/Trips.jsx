
import { useState, memo } from 'react';
import { Flex, Box, Button, Heading } from "@chakra-ui/react";
import AddTripsButton from '../components/AddTripsButton';
import { FlightEntriesList } from '../components/FlightEntriesList';

const Trips = () => {
  const [flightEntries, setFlightEntries] = useState([]);

  const handleAddFlight = (formData) => {
    setFlightEntries([...flightEntries, formData]);
  };

  return (
    <Flex direction="column" align="top" justify="left" minHeight="100vh" p={4}>
      <Heading mb={4}>Trips</Heading>
    <Box>
      <AddTripsButton onAddFlight={handleAddFlight} />
    </Box>
    <Box>
      <FlightEntriesList flightEntries={flightEntries} />
      </Box>
    </Flex>
  );
};



export default Trips;

