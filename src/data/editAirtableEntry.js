const AIRTABLE_API_URL = 'https://api.airtable.com/v0/appWrhXF96BNCMVTC/tblrQIv4hARjQJfm9';
const AIRTABLE_API_KEY = 'Bearer patKp6Qd6LtmGS3Ns.49fa6eec9fcfe10f5cde2762e424e523e1eb53f79f1b08a3509d54cf397d56b7';

// export const editAirtableEntry = async (entryId, updatedFormData) => {
  export const editAirtableEntry = async (entryId, updatedFormData) => {
    const payload = {
     
              fields: {
                  entryTitle: updatedFormData.entryTitle,
                  departureCountry: updatedFormData.departureCountry,
                  departureCity: updatedFormData.departureCity,
                  departureAirport: updatedFormData.departureAirport,
                  destinationCountry: updatedFormData.destinationCountry,
                  destinationCity: updatedFormData.destinationCity,
                  destinationAirport: updatedFormData.destinationAirport
              }
          }
    

  try {
    const response = await fetch(`${AIRTABLE_API_URL}/${entryId}`, {
      method: 'PATCH',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': AIRTABLE_API_KEY
      },
      body: JSON.stringify(payload)
    });

    if (!response.ok) {
      throw new Error(`Error editing entry: ${response.status} ${response.statusText}`);
    }

    const updatedEntry = await response.json();
    return updatedEntry;
  } catch (error) {
    console.error('Error editing entry in Airtable:', error);
    throw error;
  }
};
