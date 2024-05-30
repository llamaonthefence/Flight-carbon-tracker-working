
import axios from 'axios';

export const calculateCarbonEstimate = async (departureAirport, destinationAirport) => {

    const apiKey = 'p6p2FUpHVLmIUVnJDWa5Q'; 
    const url = 'https://www.carboninterface.com/api/v1/estimates';


    try {
    const data = {
        type: 'flight',
        passengers: 1,
        legs: [
            {
                departure_airport: departureAirport,
                destination_airport: destinationAirport
            }
        ]
    };

        const response = await axios.post(url, data, {
            headers: {
                Authorization: `Bearer ${apiKey}`,
                'Content-Type': 'application/json'
            }
        });

        console.log("Carbon estimate response:", response.data);

    if (response && response.data && response.data.data && response.data.data.attributes && response.data.data.attributes.carbon_kg) {
        const estimatedEmission = response.data.data.attributes.carbon_kg; // Error here 
        console.log("Carbon kg:", estimatedEmission);
        return estimatedEmission;
    } else {
        throw new Error('Unexpected response structure or missing data');
    }

        // if (response && response.data && response.data.attributes && response.data.attributes.carbon_kg) {
        //     const estimatedEmission = response.data.attributes.carbon_kg;
        //     return estimatedEmission; // Return the carbon estimate
        // } else {
        //     throw new Error('Unexpected response structure or missing data');
        // }


    } catch (error) {
        console.error('Error fetching carbon estimate:', error);
        throw error;
    }
};
