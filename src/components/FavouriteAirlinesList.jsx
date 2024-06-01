import { useState, useEffect,useRef } from "react";
import fetchAirlines from "../data/fetchAirlines";
import { Box, Input, Spinner, HStack, Button } from "@chakra-ui/react";
import './FavouriteAirlinesList.css'
import { fetchAirtableAirlines } from "../data/fetchAirtableAirlines";
import submitAirlineToAirtable from "../data/submitAirlineToAirtable";

const FavouriteAirlinesList = () => {
    const [airlines, setAirlines] = useState([]); 
    const [searchTerm, setSearchTerm] = useState(""); 
    const [loading, setLoading] = useState(false);
    const [favouriteAirlines, setFavouriteAirlines] = useState([]) 
    const [airlineEntries, setAirlineEntries] = useState([])

// event handler for suggestion list: 

const [showSuggestions, setShowSuggestions] = useState (false)
const suggestionRef = useRef(null)

useEffect(() => {
    const handleClickOutside = (event) => {
        if (suggestionRef.current && !suggestionRef.current.contains(event.target)) {
            setShowSuggestions(false);
        }
    };

    if (showSuggestions) {
        document.addEventListener("mousedown", handleClickOutside);
    } else {
        document.removeEventListener("mousedown", handleClickOutside);
    }

    return () => {
        document.removeEventListener("mousedown", handleClickOutside);
    };
}, [showSuggestions]);

//.....................................................................   
//Prevent page re-render

useEffect(() => {
    async function fetchEntries() {
        const data = await fetchAirtableAirlines();
        airlineEntries(data);
    }
    fetchEntries();
}, []);

//.....................................................................  

    useEffect(() => {
        const fetchAirlineData = async () => {
            setLoading(true);
            try {
                const airlines = await fetchAirlines(searchTerm); 
                setAirlines(airlines); 
            } catch (error) {
                console.error("Error fetching airline data:", error); 
            }
            setLoading(false); 
        };

        if (searchTerm) {
            fetchAirlineData();
        } else {
            setAirlines([]); 
        }
    }, [searchTerm]);

    const handleInputChange = (evt) => {   
        setSearchTerm(evt.target.value);
    }

    const addToFavourites = async (airline) => {
        setFavouriteAirlines([...favouriteAirlines, airline]);
        try {
            const response = await submitAirlineToAirtable(airline);
            console.log('Added to Airtable', response);
        } catch (error) {
            console.error ('Error adding to Airtable', error)
        }
    }

//.....................................................................   

    return (
        <Box ref={suggestionRef}>
            <Input 
                placeholder='Search'
                mb={4}
                onChange={handleInputChange}
            /> 

            {loading ? (
                <Spinner />
            ) : (
                // <div value={searchTerm}>
                <div>
                    <div>
                        {airlines.map((airline, index) => (
                        <div key={index} 
                        id="airlinesuggestions"
                        ref={suggestionRef}
                        >   
                        
                            <p 
                            key={index}
                            onClick={()=>addToFavourites(airline.name)}
                            >
                            {airline.name}</p>
                        </div>
                        ))}
                    </div>
                </div>
            )}
        <Box mt={4}>
            <ul>
                {favouriteAirlines.map((airline, index) => (
                    <li 
                    key={index}
                    style={{ display: "flex", justifyContent: "space-between", alignItems: "center", padding: "8px 0" }}
                    >{airline}
                    <HStack>
                    <Button size="sm" >Edit</Button>
                    <Button size="sm" >Delete</Button>
                    </HStack>
                    </li>
                ))}
            </ul>
        </Box>
        </Box>
    )
}

export default FavouriteAirlinesList;


// https://stackoverflow.com/questions/74988738/react-with-chakra-doesnt-trigger-useeffect