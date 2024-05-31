// import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { ChakraProvider, Flex, Box } from "@chakra-ui/react";
// import FormModal from "./components/FormModal";
import { useEffect, useState } from "react";
// import FlightEntry from "./components/FlightEntry";
// import AddTripsButton from "./components/AddTripsButton";
// import FlightEntriesList from "./components/FlightEntriesList";
import LeftBar from "./components/LeftBar";
// import Trips from "./Pages/Trips";
import Home from "./Pages/Home";
import Calculator from "./Pages/Calculator";
import { FlightEntriesProvider } from "./contexts/FlightEntriesContext";
import Trips from "./Pages/Trips";
import FavouriteAirlines from "./Pages/FavouriteAirlines";


 function App() {

//    const [flightEntries, setFlightEntries] = useState([]);

//    useEffect(() => {
//     const fetchData = async () => {
//       try {
//         const response = await fetch (`https://api.airtable.com/v0/appWrhXF96BNCMVTC/tblrQIv4hARjQJfm9`, {
//           headers: {
//             "Authorization": `Bearer patKp6Qd6LtmGS3Ns.49fa6eec9fcfe10f5cde2762e424e523e1eb53f79f1b08a3509d54cf397d56b7`
//           }
//         });
//           const data = await response.json(); 
//           setFlightEntries(data.records.map(record => record.fields)); 
//       } catch (error) {
//         console.error('Error fetching data from Airtable', error);
//       }
//     };
//     fetchData();
//    }, []); 

// const handleAdd = async(formData) => {
//    try {
//     const response = await fetch(`https://api.airtable.com/v0/appWrhXF96BNCMVTC/tblrQIv4hARjQJfm9`, {
//         method: "POST",
//         headers: {
//             "Content-Type": "application/json",
//             "Authorization": `Bearer patKp6Qd6LtmGS3Ns.49fa6eec9fcfe10f5cde2762e424e523e1eb53f79f1b08a3509d54cf397d56b7` 
//         },
//         body: JSON.stringify({
//           field: formData})
//     });

//     const data = await response.json(); 
//     setFlightEntries([...flightEntries, data.fields]); 

//     const jsonData = await response.json();
//     console.log('Airtable response:', jsonData);
//   } catch (error) {
//     console.error ("Error adding flight entry:", error)
//   }
// }

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
      <Box ml="400px" flex="1">
       <Flex direction="column" align="center" justify="left" mt="30px" minHeight="100vh"> 
        {/* <AddTripsButton onAddFlight={handleAddFlight} /> 
        <FlightEntriesList flightEntries={flightEntries} />  */}
        <Routes>
          <Route path="/home" element={<Home />} />
          <Route path="/trips" element={<FlightEntriesProvider><Trips /></FlightEntriesProvider>}/>
          <Route path="/favourite-airlines" element={<FavouriteAirlines />}/>
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