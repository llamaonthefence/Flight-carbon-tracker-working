import "./App.css";
import { Route, Routes } from "react-router-dom";
import { ChakraProvider, Button, Flex } from "@chakra-ui/react";
import FormModal from "./components/FormModal";
import { useState } from "react";

function App() {

  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <ChakraProvider>
       <Flex direction="column" align="center" justify="center"> {/* Wrap button inside Flex for layout */}
        <Button onClick={openModal}>Add Flight Entry</Button>
      </Flex>
      <FormModal isOpen={isModalOpen} onClose={closeModal} />
    </ChakraProvider>
  );
}

export default App;