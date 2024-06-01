
import {Box, Spacer, Flex, Image, Text, Button, HStack} from "@chakra-ui/react";
// import RemoveRedEyeOutlinedIcon from '@mui/icons-material/RemoveRedEyeOutlined';
import EditOutlinedIcon from '@mui/icons-material/EditOutlined';
import DeleteForeverOutlinedIcon from '@mui/icons-material/DeleteForeverOutlined';

function FavouriteAirlineEntry({ entry, onDelete }) {
    const {
      name,   
      iata,
      logo_url
    } = entry;

    const handleDelete = async () => {
        try {
            await deleteAirtableAirline(name); 
            onDelete(name);
            console.log('Deleted entry', name);
        } catch (error) {
            console.error('Error deleting entry', error)
        }
    }

return (
    <Box borderWidth="1px" borderRadius="lg" p="10" my="6" width="100%">
      <Flex justify="space-between">
      <Box>
      <Text>Airline name: {name}</Text>
      <Text>IATA code: {iata}</Text>
      <Image src={logo_url} alt='airline logo' boxSize='50px'/> 
      </Box>

      <Box ml="12">
      <HStack mt="4" spacing="4">
          <Spacer />
          {/* <Button rightIcon={<RemoveRedEyeOutlinedIcon />} borderRadius="full" colorScheme="teal" iconSpacing="0"/> */}
          {/* <ViewModal isOpen={isOpen} onClose={onClose} entryId={id}/>  */}
          <Button rightIcon={<EditOutlinedIcon />} borderRadius="full"colorScheme="teal" iconSpacing="0"/>
          {/* <UpdateModal isOpen={isEditOpen} onClose={onEditClose} entryId={id}/>  */}
          <Button onClick={handleDelete} rightIcon={<DeleteForeverOutlinedIcon />} borderRadius="full" colorScheme="teal" iconSpacing="0"/>
      </HStack>
      </Box>
      </Flex>
    </Box>
  );
}

export default FavouriteAirlineEntry;