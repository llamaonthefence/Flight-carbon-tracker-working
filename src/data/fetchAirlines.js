import axios from 'axios';

export const fetchAirlines = async (name, iata) => {
    try {
        const response = await axios.get('https://api.api-ninjas.com/v1/airlines', {
            params: { name, iata },
            headers: { 'X-Api-Key': 'SZ4MffKDivJG91rZywDU5g==jkf9Y0ki4Bj7XhVa' }
        });

        const airlines = response.data.map(airline => ({
            name: airline.name,
            iata: airline.iata,
            logo_url: airline.logo
        }))
        .sort((a, b) => a.name.localeCompare(b.name))

        console.log('Airlines', airlines)
        return airlines; 

        
    } catch (error) {
        // Handle errors, such as network errors or API response errors
        console.error('Error fetching airports:', error);
        return []; // Return an empty array in case of error
    }
};

export default fetchAirlines;

