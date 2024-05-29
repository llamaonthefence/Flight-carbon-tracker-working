import { useContext } from "react";

// To resolve following warning: 
// Fast refresh only works when a file only exports components. 
// Use a new file to share constants or functions between components.

import {FlightEntriesContext} from './FlightEntriesContext'; 

export const useFlightEntries = () => useContext(FlightEntriesContext); 
