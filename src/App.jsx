// import "./App.css";
import { Route, Routes } from "react-router-dom";
import { ChakraProvider, Button, Flex, Box } from "@chakra-ui/react";
import FormModal from "./components/FormModal";
import { useState } from "react";
import FlightEntry from "./components/FlightEntry";

function App() {

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [flightEntries, setFlightEntries] = useState([]);

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  const handleFormSubmit = (formData) => {
    setFlightEntries([...flightEntries, formData]);
    closeModal(); //FormModal closes after submission 
  }


  return (
    <ChakraProvider>
       <Flex direction="column" align="center" justify="center" minHeight="100vh"> 
        <Button colorScheme='teal' onClick={openModal}>Add Flight Entry</Button>
        
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
            <FlightEntry key={index} entry={entry}/>
          ))}
        </Box>

      </Flex>
      <FormModal isOpen={isModalOpen} onClose={closeModal} onSubmit={handleFormSubmit}/>
    </ChakraProvider>
  );
}

export default App;