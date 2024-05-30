// FlightEntriesList.jsx
import { Box } from "@chakra-ui/react";
import FlightEntry from "./FlightEntry";
import {useEffect, useState, memo} from 'react'; 
import FormModal from "./FormModal";
import { fetchAirtableEntries } from "../data/fetchAirtableData";


// import { fetchAirtableEntries } from "../data/fetchAirtableData";

// const FlightEntriesList = ({ flightEntries }) => {

    

//   return (
//     <Box 
//       mt="4"
//       width="100%"
//       maxWidth="1280px"
//       flex="1"
//       overflowY="auto"
//       p={4}
//       border="1px solid #ccc"
//       borderRadius="md"
//     >
//       {flightEntries.map((entry) => (
//         <FlightEntry key={entry.id} entry={entry} />
//       ))}
//     </Box>
//   );
// };

// export default FlightEntriesList;

const FlightEntriesList = ({ flightEntries }) => {
    // const [entries, setEntries] = useState(flightEntries);
    const [entries, setEntries] = useState([]);


    const handleSubmit = (newEntry) => {
        // Add new flight entry to the existing list of flight entries
        setEntries(prevEntries => [...prevEntries, newEntry]);
      };
    
      const handleDeleteEntry = (id) => {
        // Filter out the deleted entry from the flightEntries array
        const updatedEntries = entries.filter(entry => entry.id !== id);
        setEntries(updatedEntries);
      };

      useEffect(() => {
        // Update entries if initialFlightEntries change
        setEntries(flightEntries);
    }, [flightEntries]);

      useEffect(() => {
        
    async function fetchEntries() {
      const data = await fetchAirtableEntries();
    
      setEntries(data);
    }
    fetchEntries();
  }, []);
        
       
    console.log(entries)


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

      {entries.map(entry => (
        <FlightEntry key={entry.id} entry={entry} onDelete={handleDeleteEntry} />
      ))}

    <FormModal onSubmit={handleSubmit} />
    
   </Box>
  );
};

const MemoizedFlightEntriesList = memo(FlightEntriesList);


export { MemoizedFlightEntriesList, FlightEntriesList };
