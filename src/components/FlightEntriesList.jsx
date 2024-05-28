// FlightEntriesList.jsx
import { Box } from "@chakra-ui/react";
import FlightEntry from "./FlightEntry";

const FlightEntriesList = ({ flightEntries }) => {
  return (
    <Box 
      mt="4"
      width="100%"
      maxWidth="1280px"
      flex="1"
      overflowY="auto"
      p={4}
      border="1px solid #ccc"
      borderRadius="md"
    >
      {flightEntries.map((entry, index) => (
        <FlightEntry key={index} entry={entry} />
      ))}
    </Box>
  );
};

export default FlightEntriesList;
