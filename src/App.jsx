// import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { ChakraProvider, Flex, Box } from "@chakra-ui/react";
// import FormModal from "./components/FormModal";
import { useState } from "react";
// import FlightEntry from "./components/FlightEntry";
// import AddTripsButton from "./components/AddTripsButton";
// import FlightEntriesList from "./components/FlightEntriesList";
import LeftBar from "./components/LeftBar";
import Trips from "./Pages/Trips";
import Home from "./Pages/Home";
import Calculator from "./Pages/Calculator";
import { FlightEntriesProvider } from "./contexts/FlightEntriesContext";


function App() {

  // const [flightEntries, setFlightEntries] = useState([]);

  // const openModal = () => {
  //   setIsModalOpen(true);
  // };

  // const closeModal = () => {
  //   setIsModalOpen(false);
  // };

  //  const handleAddFlight = (formData) => {
  //    setFlightEntries([...flightEntries, formData]);
  // //   closeModal(); //FormModal closes after submission 
  //  }
  

  return (
    <ChakraProvider>
      <Flex>
      <LeftBar /> 
      <Box ml="0px" flex="1">
       <Flex direction="column" align="center" justify="center" minHeight="100vh"> 
        {/* <AddTripsButton onAddFlight={handleAddFlight} /> 
        <FlightEntriesList flightEntries={flightEntries} />  */}
        <Routes>
          <Route path="/home" element={<Home />} />
          <Route path="/trips" element={<FlightEntriesProvider><Trips /></FlightEntriesProvider>}/>
          <Route path="/calculator" element={<Calculator />}/>
        </Routes>
      </Flex>
      </Box>
      {/* <FormModal isOpen={isModalOpen} onClose={closeModal} onSubmit={handleFormSubmit}/> */}
      </Flex>
    </ChakraProvider>
  );
}

export default App;