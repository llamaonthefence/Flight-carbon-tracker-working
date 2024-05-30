import { useEffect, useState } from "react"
import { fetchAirtableEntry } from "../data/fetchAirtableEntry";
import { Text, Modal, Box, Button, Heading, ModalOverlay, ModalContent, ModalHeader, ModalFooter, ModalBody, ModalCloseButton } from "@chakra-ui/react";


//State variables for each field 
// const ViewModal = ({isOpen, onClose, entryId}) => {

//     const [entryTitle, setEntryTitle] = useState("");
//     const [createdTime, setCreatedTime] = useState(""); 
//     const [departureCountry, setDepartureCountry] = useState(""); 
//     const [departureCity, setDepartureCity] = useState(""); 
//     const [departureAirport, setDepartureAirport] = useState(""); 
//     const [destinationCountry, setDestinationCountry] = useState(""); 
//     const [destinationCity, setDestinationCity] = useState("");
//     const [destinationAirport, setDestinationAirport] = useState(""); 
//     const [estimatedEmission, setEstimatedEmission] = useState(""); 

//     const handleView = async () => {
//         try {
//             const entryData = await fetchAirtableEntry(entryId); 
//             console.log('View entry', entryData);
//             console.log(entryId) 
//         } catch (error) {
//             console.error('Error viewing entry', error)
//         }
//     };

//         useEffect(()=> {
//             if (isOpen && entryId) {
//                 fetchAirtableEntry()
//                 .then ((entry) => {
//                     const {fields, createdTime} = entry  // destructure GET response
                    
//                     setEntryTitle(fields.entryTitle || "")  // see response below. Or default
//                     setDepartureCountry(fields.departureCountry || "") 
//                     setDepartureCity(fields.departureCity || "") 
//                     setDepartureAirport(fields.departureAirport || "")
//                     setDestinationCountry(fields.destinationCountry || "")
//                     setDestinationCity(fields.destinationCity || "")
//                     setDestinationAirport(fields.destinationAirport || "")
//                     setCreatedTime(createdTime || "")  // top-level response
//                     setEstimatedEmission(fields.estimatedEmission || "")
//                 }) 
//                 .catch((error) => {
//                     console.log("Error fetching entry from Airtable", error); 
//                 })
//             }
//         }, [isOpen, entryId]);

        
//         if (!isOpen) return null; // to avoid unnecessary re-renders & API calls when modal is !open. 

//.......................................................................

// const ViewModal = ({ isOpen, onClose, entryId }) => {
//     const [entryTitle, setEntryTitle] = useState("");
//     const [createdTime, setCreatedTime] = useState(""); 
//     const [departureCountry, setDepartureCountry] = useState(""); 
//     const [departureCity, setDepartureCity] = useState(""); 
//     const [departureAirport, setDepartureAirport] = useState(""); 
//     const [destinationCountry, setDestinationCountry] = useState(""); 
//     const [destinationCity, setDestinationCity] = useState("");
//     const [destinationAirport, setDestinationAirport] = useState(""); 
//     const [estimatedEmission, setEstimatedEmission] = useState(""); 

//     const handleView = async () => {
//         try {
//             const entryData = await fetchAirtableEntry(entryId); 
//             const { fields, createdTime } = entryData;

//             setEntryTitle(fields.entryTitle || "");
//             setDepartureCountry(fields.departureCountry || "");
//             setDepartureCity(fields.departureCity || "");
//             setDepartureAirport(fields.departureAirport || "");
//             setDestinationCountry(fields.destinationCountry || "");
//             setDestinationCity(fields.destinationCity || "");
//             setDestinationAirport(fields.destinationAirport || "");
//             setCreatedTime(createdTime || "");
//             setEstimatedEmission(fields.estimatedEmission || "");

//             console.log('View entry', entryData);
//             console.log(id);
//         } catch (error) {
//             console.error('Error viewing entry', error);
//         }
//     };

//     useEffect(() => {
//         if (isOpen && entryId) {
//             handleView();
//         }
//     }, [isOpen, entryId]);

//     if (!isOpen) return null;


const ViewModal = ({ isOpen, onClose, entryId }) => {
    const [entryTitle, setEntryTitle] = useState("");
    const [createdTime, setCreatedTime] = useState("");
    const [departureCountry, setDepartureCountry] = useState("");
    const [departureCity, setDepartureCity] = useState("");
    const [departureAirport, setDepartureAirport] = useState("");
    const [destinationCountry, setDestinationCountry] = useState("");
    const [destinationCity, setDestinationCity] = useState("");
    const [destinationAirport, setDestinationAirport] = useState("");
    const [estimatedEmission, setEstimatedEmission] = useState("");

    useEffect(() => {
        const fetchData = async () => {
            try {
                if (isOpen && entryId) {
                    const entry = await fetchAirtableEntry(entryId);
                    const { fields, createdTime } = entry;

                    setEntryTitle(fields.entryTitle || "");
                    setDepartureCountry(fields.departureCountry || "");
                    setDepartureCity(fields.departureCity || "");
                    setDepartureAirport(fields.departureAirport || "");
                    setDestinationCountry(fields.destinationCountry || "");
                    setDestinationCity(fields.destinationCity || "");
                    setDestinationAirport(fields.destinationAirport || "");
                    setCreatedTime(createdTime || "");
                    setEstimatedEmission(fields.estimatedEmission || "");
                }
            } catch (error) {
                console.error("Error fetching entry from Airtable", error);
            }
        };

        fetchData();
    }, [isOpen, entryId]);

    if (!isOpen) return null;


//.......................................................................
// 

return (
    <Modal isOpen={isOpen} onClose={onClose}>
      <ModalOverlay />
      <ModalContent>
        <ModalHeader>Entry Details</ModalHeader>
        <ModalCloseButton />
        <ModalBody>
          <Box>
            <Heading as="h3" size="md">{entryTitle}</Heading>
            <Text fontSize="s" mb={3}>{createdTime}</Text>
            <Text><b>Departure Country:</b> {departureCountry}</Text>
            <Text><b>Departure City:</b> {departureCity}</Text>
            <Text><b>Departure Airport:</b> {departureAirport}</Text>
            <Text><b>Destination Country:</b> {destinationCountry}</Text>
            <Text><b>Destination City:</b> {destinationCity}</Text>
            <Text><b>Destination Airport:</b> {destinationAirport}</Text>
            <Text><b>Carbon Estimate (kg):</b> {estimatedEmission}</Text>
          </Box>
        </ModalBody>
        <ModalFooter>
          <Button colorScheme="teal" onClick={onClose}>Close</Button>
        </ModalFooter>
      </ModalContent>
    </Modal>
  );
};

export default ViewModal; 



// Fetch response: 

// {id: 'recI20j8aCkQQIRzM', createdTime: '2024-05-30T06:50:51.000Z', fields: {…}}
// createdTime: "2024-05-30T06:50:51.000Z"
// fields: 
// departureAirport: "CHC"
// departureCity: "Christchurch"
// departureCountry: "New Zealand (NZ)"
// destinationAirport: "PBH"
// destinationCity: "Paro"
// destinationCountry: "Bhutan (BT)"
// entryTitle: "Test title 3"
// estimatedEmission: 1604.18