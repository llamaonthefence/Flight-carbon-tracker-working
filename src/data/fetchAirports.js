// import axios from 'axios';

// export const fetchAirports = async (city) => {
//     try {
//         const response = await axios.get('https://api.api-ninjas.com/v1/airports', {
//             params: { city: city }, // Use the ISO 2-letter code as value for 'country' key
//             headers: { 'X-Api-Key': 'SZ4MffKDivJG91rZywDU5g==jkf9Y0ki4Bj7XhVa' }
//         });

//          // Extract airports from the response data and return them in the format [name](iata)
//          return response.data.map(airport => `[${airport.name}](${airport.iata})`);
//         } catch (error) {
//             // Handle errors, such as network errors or API response errors
//             console.error('Error fetching airports:', error);
//             return []; // Return an empty array in case of error
//         }
//     };

// export default fetchAirports;

import axios from 'axios';

export const fetchAirports = async (city) => {
    try {
        const response = await axios.get('https://api.api-ninjas.com/v1/airports', {
            params: { city },
            headers: { 'X-Api-Key': 'SZ4MffKDivJG91rZywDU5g==jkf9Y0ki4Bj7XhVa' }
        });

        // Extract airports from the response data and return them in the format [name](iata)
        const airports = response.data.map(airport => ({
            name: airport.name,
            iata: airport.iata
        })).sort((a, b) => a.name.localeCompare(b.name));

        return airports; 
    } catch (error) {
        // Handle errors, such as network errors or API response errors
        console.error('Error fetching airports:', error);
        return []; // Return an empty array in case of error
    }
};

export default fetchAirports;
