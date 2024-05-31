// import { useState, useEffect } from "react";
// import fetchAirlines from "../data/fetchAirlines";
// import { Box, Input, Spinner, VStack, Text } from "@chakra-ui/react";

// const FavouriteAirlinesList = () => {
//     const [airlines, setAirlines] = useState([]); 
//     const [searchTerm, setSearchTerm] = useState(""); 
//     const [suggestions, setSuggestions] = useState([]); 
//     const [loading, setLoading] = useState(false); 

//     useEffect(() => {
//         const fetchAirlineData = async () => {
//             setLoading(true);
//             try {
//                 const airlines = await fetchAirlines(searchTerm); 
//                 setAirlines(airlines); 
//             } catch (error) {
//                 console.error("Error fetching airline data:", error); 
//             }
//             setLoading(false); 
//         };

//         if (searchTerm) {
//             fetchAirlineData()
//         } else {
//             setAirlines([]); 
//         }
//     }, [searchTerm]);

//     const handleInputChange = async (value) => {   // should change to "name" key? 
//         setSearchTerm(value);
//         if (value.trim() !=="" ) {
//             try{
//                 const suggestions = await fetchAirlines(value);
//                 setSuggestions(suggestions); 
//             } catch (error) {
//                 console.error("Error fetching airline suggestions:", error)
//             }
//         } else {
//             setSuggestions([]);
//         }
//     }

//     return (
//         <Box>
//             <Input 
//             placeholder='Search'
//             mb={4}
//             value={searchTerm}
//             onChange={(evt) => handleInputChange(evt.value.target)}/> 

//         {loading? (<Spinner />) : (
//             <Box>
//                 <VStack>
//                     {airlines.map((airline, index) => (
//                         <Text key={index}>{airline.name}</Text>
//                     ))}
//                 </VStack>
//             </Box> 
//         )}



//         </Box>
//     )
// }

// export default FavouriteAirlinesList;

import { useState, useEffect,useRef } from "react";
import fetchAirlines from "../data/fetchAirlines";
import { Box, Input, Spinner, VStack, Text } from "@chakra-ui/react";
import './FavouriteAirlinesList.css'

const FavouriteAirlinesList = () => {
    const [airlines, setAirlines] = useState([]); 
    const [searchTerm, setSearchTerm] = useState(""); 
    const [loading, setLoading] = useState(false);
    const [favouriteAirlines, setFavouriteAirlines] = useState([]) 

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

    const addToFavourites = (airlineName) => {
        setFavouriteAirlines([...favouriteAirlines, airlineName]); 
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
                    <li key={index}>{airline}</li>
                ))}
            </ul>
        </Box>
        </Box>
    )
}

export default FavouriteAirlinesList;
