// import axios from 'axios';

// export const fetchCities = async (countryName) => {
//     try {
//         const response = await axios.get('https://api.api-ninjas.com/v1/airports', {
//             params: { country: countryName },
//             headers: { 'X-Api-Key': 'SZ4MffKDivJG91rZywDU5g==jkf9Y0ki4Bj7XhVa' }
//         });

//         // Extract unique cities from the response data
//         const cities = response.data.map(airport => airport.city);
//         const uniqueCities = Array.from(new Set(cities));

//         return uniqueCities;
//     } catch (error) {
//         console.error("Error fetching cities", error);
//         return [];
//     }
// };

// export default fetchCities;

//...................................

// import axios from 'axios';

// export const fetchCities = async (iso2Code) => {
//     try {



//         const response = await axios.get('https://api.api-ninjas.com/v1/airports', {
//             params: { country_iso2: iso2Code },
//             headers: { 'X-Api-Key': 'SZ4MffKDivJG91rZywDU5g==jkf9Y0ki4Bj7XhVa' }
//         });

//         // Extract cities from the response data and return them
//         const cities = response.data.map(airport => airport.city);
//         // Filter out duplicate cities
//         const uniqueCities = cities.filter((city, index) => cities.indexOf(city) === index);
//         return uniqueCities;
//     } catch (error) {
//         // Handle errors, such as network errors or API response errors
//         console.error('Error fetching cities:', error);
//         return []; // Return an empty array in case of error
//     }
// };


// export default fetchCities;

//...........................................


import axios from 'axios';

export const fetchCities = async (selectedDepartureCountry) => {
    try {

        const iso2Code = selectedDepartureCountry.match(/\((.*?)\)/)[1];
        

        const response = await axios.get('https://api.api-ninjas.com/v1/airports', {
            params: { country: iso2Code },
            headers: { 'X-Api-Key': 'SZ4MffKDivJG91rZywDU5g==jkf9Y0ki4Bj7XhVa' }
        });

        console.log('API response:', response.data);

        // Extract cities from the response data and return them
        const cities = response.data
        .map(item => item.city)
        .sort((a, b) => a.localeCompare(b));
        // Filter out duplicate cities
        const uniqueCities = cities.filter((city, index) => cities.indexOf(city) === index);
        return uniqueCities;
    } catch (error) {
        // Handle errors, such as network errors or API response errors
        console.error('Error fetching cities:', error);
        return []; // Return an empty array in case of error
    }
};


export default fetchCities;


// https://stackoverflow.com/questions/60425892/incremental-offset-in-api-call
// Current array limit 30. 