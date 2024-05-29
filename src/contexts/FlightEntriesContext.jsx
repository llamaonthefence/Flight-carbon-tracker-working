import { createContext, useState } from "react";

export const FlightEntriesContext = createContext(); 


export const FlightEntriesProvider = ({children}) => {
    const [flightEntries, setFlightEntries] = useState([]); 

    const addFlightEntry = (newEntry) => {
        setFlightEntries([...flightEntries, newEntry])
    }

    return (
        <FlightEntriesContext.Provider value={{flightEntries, addFlightEntry}}>
            {children}
        </FlightEntriesContext.Provider>
    )
}