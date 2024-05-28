import { Button, Modal, ModalOverlay, ModalContent, ModalHeader, ModalBody, ModalFooter, FormControl, FormLabel, Input, Flex, Select } from "@chakra-ui/react";
import { useState, useEffect } from "react";
import axios from "axios";
import countries from "../data/countrynames";
import fetchCities from "../data/fetchCities";
import fetchAirports from "../data/fetchAirports";
import { calculateCarbonEstimate } from "../data/carbon-api";
import submitToAirtable from "../data/submitToAirtable";


const FormModal = ({ isOpen, onClose, onSubmit }) => {

    // State variables for form data & selected values: 
    const [formData, setFormData] = useState({

      entryTitle: '',  
      departureCountry: '',
      departureCity: '',
      departureAirport: '',
      destinationCountry: '',
      destinationCity: '',
      destinationAirport: '',
      carbonKg: 0,
    });

    const [selectedDepartureCountry, setSelectedDepartureCountry] = useState('');
    const [selectedDestinationCountry, setSelectedDestinationCountry] = useState('');

    const [departureCities, setDepartureCities] = useState([]);
    const [destinationCities, setDestinationCities] = useState([]);

    const [selectedDepartureCity, setSelectedDepartureCity] = useState('');
    const [selectedDestinationCity, setSelectedDestinationCity] = useState('');

    const [departureAirports, setDepartureAirports] = useState([]);
    const [destinationAirports, setDestinationAirports] = useState([]);

//.......................................................................
// Fetch cities when departure country is selected

    useEffect(() => {
        if (selectedDepartureCountry) {
            fetchCities(selectedDepartureCountry)
            .then(cities => setDepartureCities(cities))
            .catch(error => console.error('Error fetching departure cities:', error))
        } else {
            setDepartureCities([]); // Clear cities when no country is selected
        }
    }, [selectedDepartureCountry]);
    
// Departure country state change

    const handleDepartureCountryChange = (e) => {
        const value = e.target.value
            setSelectedDepartureCountry(value);
            setFormData((prevFormData) => ({
                ...prevFormData,
                departureCountry: value,
                departureCity: '',
                departureAirport: '', 
            }))
    };

//.......................................................................
// Fetch cities when destination country is selected

      useEffect(() => {
        if (selectedDestinationCountry) {
            fetchCities(selectedDestinationCountry)
            .then(data => setDestinationCities(data))
            .catch(error => console.error('Error fetching destination cities:', error))
        } else {
            setDepartureCities([]); // Clear cities when no country is selected
        }
    }, [selectedDestinationCountry]);

// Destination country state change

    const handleDestinationCountryChange = (e) => {
        const value = e.target.value;
        setSelectedDestinationCountry(value);
        setFormData((prevFormData) => ({
            ...prevFormData,
            destinationCountry: value,
            destinationCity: '',
            destinationAirport: '', 
        }))
};

//.......................................................................
// Handle state change: Country - Form data state

    const handleChange = async (e) => {
        const { name, value } = e.target;

        setFormData((prevFormData) => ({
            ...prevFormData,
            [name]: value,
        }));

        if (name === 'departureCountry') {
            setSelectedDepartureCountry(value);
            const cities = await fetchCities(value);
        setDepartureCities(cities);
        setFormData((prevFormData) => ({
             ...prevFormData,
             departureCountry: value,
             departureCity: ''
             }));
        }

        if (name === 'destinationCountry') {
            setSelectedDestinationCountry(value);
            setDestinationCities([]);
            setFormData((prevFormData) => ({
                ...prevFormData,
                destinationCountry: value, 
                destinationCity: '',
            }));
        }
    };

//.......................................................................
// Fetch airports when a departure city is selected

useEffect(() => {
    if (selectedDepartureCity) {
        fetchAirports(selectedDepartureCity)
        .then (airports => setDepartureAirports(airports))
        .catch (error => console.error('Error fetching departure airports:', error))
    } else {
        setDepartureAirports([]); // Clear airports list when no city is selected
    }
}, [selectedDepartureCity]); 

// Departure city state change & fetch corresponding airports 
const handleDepartureCityChange = async (e) => {
    const selectedDepartureCity = e.target.value
    setSelectedDepartureCity(selectedDepartureCity); 

    try {
        // Fetch airports for the selected departure city
        const airports = await fetchAirports(selectedDepartureCity);
        
        // Set the fetched airports in the state
        setDepartureAirports(airports);
        
        // Optional: Set the selected departure airport to the first airport in the list
        if (airports.length > 0) {
            setFormData((prevFormData) => ({
                ...prevFormData,
                departureAirport: airports[0].iata
             }));
        }
    } catch (error) {
        console.error('Error fetching departure airports:', error);
    }
};

// Fetch airports when a destination city is selected

useEffect(() => {
    if (selectedDestinationCity) {
        fetchAirports(selectedDestinationCity)
        .then(airports => setDestinationAirports(airports))
        .catch(error => console.error('Error fetching destination airports:', error));
    } else {
        setDestinationAirports([]); // Airport list cleared when no city is selected
    }
}, [selectedDestinationCity]); 

// Destination city state change & fetch corresponding airports
const handleDestinationCityChange = async (e) => {
    const selectedDestinationCity = e.target.value
    setSelectedDestinationCity(selectedDestinationCity); 
    setFormData((prevFormData) => ({
        ...prevFormData,
        destinationCity: selectedDestinationCity,
        destinationAirport: '', 
    }))

    try {
        // Fetch airports for selected city + airport state update
        const airports = await fetchAirports(selectedDestinationCity); 
        setDestinationAirports(airports); 

        // Default selected airport is the 1st one in array
        if (airports.length > 0) {
            setFormData((prevFormData) => ({
                ...prevFormData,
                destinationAirport: airports[0].iata
            }));
        }
    } catch (error) {
        console.error('Error fetching destination airports', error); 
    }
}


//.......................................................................
// Handle submit 

    const handleSubmit = async (e) => {
        e.preventDefault(); // prevents whole page from reloading
        console.log("Form submitted:", formData);

        try {
            const carbonKg = await calculateCarbonEstimate(    // Error here 
                formData.departureAirport, 
                formData.destinationAirport
            );
            console.log('Carbon estimate', carbonKg);
            const updatedFormData = {...formData, 
                carbonKg: carbonKg,
                departureCountry: selectedDepartureCountry,
                departureCity: selectedDepartureCity,
            };
            setFormData(updatedFormData); 

            await submitToAirtable(updatedFormData);
            onSubmit(updatedFormData); 
        } catch (error) {
            console.error('Error fetching carbon estimate', error);  
        }

        onClose(); // Close the modal after submission
      };


//.......................................................................
// Return

      return (
        <Modal isOpen={isOpen} onClose={onClose}>
          <ModalOverlay />
          <ModalContent>
            <ModalHeader>Calculate Emissions</ModalHeader>
            <ModalBody>
            <FormControl>
                <FormLabel>Title</FormLabel>
                <Input type="text" name="entryTitle" value={formData.entryTitle} onChange={handleChange} />
              </FormControl>

              <FormControl>
                <FormLabel>Departure Country</FormLabel>
                <Select name="departureCountry" value={selectedDepartureCountry} onChange={handleDepartureCountryChange}>
                    {countries.map((country,index) => (
                        <option key={index} value={country.label_en}>
                            {country.label_en}
                        </option>
                    ))}
                </Select>
              </FormControl>
              
              <FormControl>
            <FormLabel>Departure City</FormLabel>
            <Select name="departureCity" value={selectedDepartureCity} onChange={handleDepartureCityChange}>
              {departureCities.map((city, index) => (
                <option key={index} value={city}>
                  {city}
                </option>
              ))}
            </Select>
          </FormControl>
              
              <FormControl>
                <FormLabel>Departure Airport</FormLabel>
                <Select name="departureAirport" value={formData.departureAirports} onChange={handleChange}>
                     {departureAirports.map((airport, index) => (
                     <option key={index} value={airport.iata}>
                      {airport.name}({airport.iata})
                    </option>
                    ))}
                </Select>
              </FormControl>
              
              <FormControl>
                <FormLabel>Destination Country</FormLabel>
                <Select name="destinationCountry" value={formData.destinationCountry} onChange={handleDestinationCountryChange}>
                {countries.map((country,index) => (
                        <option key={index} value={country.label_en}>
                             {country.label_en}
                        </option>
                        ))}
                </Select>
              </FormControl>
              
              <FormControl>
            <FormLabel>Destination City</FormLabel>
            <Select name="destinationCity" value={formData.destinationCity} onChange={handleDestinationCityChange}>
              {destinationCities.map((city, index) => (
                <option key={index} value={city}>
                  {city}
                </option>
              ))}
            </Select>
          </FormControl>
              
              <FormControl>
                <FormLabel>Destination Airport</FormLabel>
                <Select name="destinationAirport" value={formData.destinationAirport} onChange={handleChange}>
                    {destinationAirports.map((airport, index) => (
                        <option key={index} value={airport.iata}>
                            {airport.name}({airport.iata})
                        </option>
                    ))

                    }
                </Select>
              </FormControl>
            
            </ModalBody>
            <ModalFooter>
              <Flex justify="space-between" w="100%">
                <Button colorScheme="blue" onClick={handleSubmit}>Calculate Emissions</Button>
                <Button variant="ghost" onClick={onClose}>Cancel</Button>
              </Flex>
            </ModalFooter>
          </ModalContent>
        </Modal>
      );
    };
    

export default FormModal; 