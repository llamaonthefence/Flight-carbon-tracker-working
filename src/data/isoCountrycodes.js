// import countries from './countrynames'; // Import array of country names from countrynames.js
// import countriesData from './country-code-jsonformatted';

// const extractIso2Codes = (data, countryNames) => {
//     // Sort country names alphabetically without using localeCompare
//     countryNames.sort((a, b) => {
//         const nameA = String(a).toLowerCase();
//         const nameB = String(b).toLowerCase();
//         return nameA < nameB ? -1 : nameA > nameB ? 1 : 0;
//     });

//     return countryNames.map(countryName => {
//         // Find the corresponding country object in the data array
//         const country = data.find(item => {
//             const name = item.label_en.split(/:|,/)[0].trim();
//             return name.includes(countryName);
//         });

//         console.log(country)

//         // Return an object containing the country name and its ISO 2-letter code
//         return {
//             label_en: countryName,
//             iso2_code: countryName ? countryName.iso2_code : 'N/A' // 'N/A' if iso2_code not found
//         };
//     });
// };

// const iso2CountryCodes = extractIso2Codes(countriesData, countries);

// console.log(iso2CountryCodes);

// export default iso2CountryCodes;


