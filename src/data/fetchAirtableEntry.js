const AIRTABLE_API_URL = 'https://api.airtable.com/v0/appWrhXF96BNCMVTC/tblrQIv4hARjQJfm9';
// const AIRTABLE_API_KEY = 'Bearer patKp6Qd6LtmGS3Ns.49fa6eec9fcfe10f5cde2762e424e523e1eb53f79f1b08a3509d54cf397d56b7';

export const fetchAirtableEntry = async (entryId) => {
  try {
    const response = await fetch(`${AIRTABLE_API_URL}/${entryId}`, {
      method: 'GET',
      headers: {
        'Authorization': `Bearer patKp6Qd6LtmGS3Ns.49fa6eec9fcfe10f5cde2762e424e523e1eb53f79f1b08a3509d54cf397d56b7`,
        'Content-Type': 'application/json'
      }
    });

    if (!response.ok) {
      throw new Error(`Error fetching entry: ${response.status} ${response.statusText}`);
    }

    const entry = await response.json();
    return entry;
  } catch (error) {
    console.error('Error fetching entry from Airtable:', error);
    throw error;
  }
};


// var Airtable = require('airtable');
// var base = new Airtable({ apiKey: 'Bearer patKp6Qd6LtmGS3Ns.49fa6eec9fcfe10f5cde2762e424e523e1eb53f79f1b08a3509d54cf397d56b7' }).base('appWrhXF96BNCMVTC');

// base('Flight tracker').select({
//   maxRecords: 3,
//     view: "Grid view"
// }).eachPage(function page(records, fetchNextPage) {
//   records.forEach(function(record) {
//     console.log('Retrieved', record.get('Entry Title'));
// });
// fetchNextPage();
// }, function done(err) {
//   if (err) { console.error(err); return; }
// });

// // Function to handle each page of records
// function handlePage(records, fetchNextPage) {
//     // Iterate over each record in the page
//     records.forEach(function (record) {
//         // Accessing fields and printing their values
//         const entryTitle = record.get('Entry Title');
//         const departureCountry = record.get('departureCountry');
//         const departureCity = record.get('departureCity');
//         const departureAirport = record.get('departureAirport');
//         const destinationCountry = record.get('destinationCountry');
//         const destinationCity = record.get('destinationCity');
//         const destinationAirport = record.get('destinationAirport');
//         const estimatedEmission = record.get('estimatedEmission');
//         const createdTime = record.get('createdTime');

//         // Logging retrieved field values
//         console.log('Entry Title:', entryTitle);
//         console.log('Departure Country:', departureCountry);
//         console.log('Departure City:', departureCity);
//         console.log('Departure Airport:', departureAirport);
//         console.log('Destination Country:', destinationCountry);
//         console.log('Destination City:', destinationCity);
//         console.log('Destination Airport:', destinationAirport);
//         console.log('Carbon Kg:', estimatedEmission);
//         console.log('Created Time:', createdTime);
//     });
// }
