import { Flex, Box, HStack, Heading, Text, Spacer, Button } from "@chakra-ui/react";
import PropTypes from "prop-types"; 
import RemoveRedEyeOutlinedIcon from '@mui/icons-material/RemoveRedEyeOutlined';
import EditOutlinedIcon from '@mui/icons-material/EditOutlined';
import DeleteForeverOutlinedIcon from '@mui/icons-material/DeleteForeverOutlined';
import { fetchAirtableEntry } from "../data/fetchAirtableEntry";
import { editAirtableEntry } from "../data/editAirtableEntry";
import { deleteAirtableEntry } from "../data/deleteAirtableEntry";



function FlightEntry({ entry, onDelete }) {
    const {
      id,   
      entryTitle,
      departureCountry,
      departureCity,
      departureAirport,
      destinationCountry,
      destinationCity,
      destinationAirport,
      estimatedEmission,
    } = entry;


    const handleView = async () => {
        try {
            const entryData = await fetchAirtableEntry(id); 
            console.log('View entry', entryData); 
        } catch (error) {
            console.error('Error viewing entry', error)
        }
    };

    const handleEdit = async () => {
        try {
            const updatedFormData = {
                entryTitle: 'New Title', 
                departureCountry,
                departureCity,
                departureAirport,
                destinationCountry,
                destinationCity,
                destinationAirport,
                estimatedEmission,
            };

            const updatedEntry = await editAirtableEntry(id, updatedFormData); 
            console.log('Edited entry', updatedEntry);
        } catch (error) {
            console.error('Error editing entry', error)
        }
    }; 

    const handleDelete = async () => {
        try {
            await deleteAirtableEntry(id); 
            onDelete(id);
            console.log('Deleted entry', id);
        } catch (error) {
            console.error('Error deleting entry', error)
        }
    }

  
    return (
      <Box borderWidth="1px" borderRadius="lg" p="10" my="6" width="100%">
        <Flex justify="space-between">
        <Box>

        <Heading as="h3" size="md">
          {entryTitle}
        </Heading>
        <Text>Departure: {departureCity}, {departureCountry} - {departureAirport}</Text>
        <Text>Destination: {destinationCity}, {destinationCountry} - {destinationAirport}</Text>
        <Text>Carbon Estimate (kg): {estimatedEmission}</Text>
        </Box>

        <Box ml="12">
        <HStack mt="4" spacing="4">
            <Spacer />
            <Button onClick={handleView} rightIcon={<RemoveRedEyeOutlinedIcon />} borderRadius="full" colorScheme="teal" iconSpacing="0"/>
            <Button onClick={handleEdit} rightIcon={<EditOutlinedIcon />} borderRadius="full"colorScheme="teal" iconSpacing="0"/>
            <Button onClick={handleDelete} rightIcon={<DeleteForeverOutlinedIcon />} borderRadius="full" colorScheme="teal" iconSpacing="0"/>
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
