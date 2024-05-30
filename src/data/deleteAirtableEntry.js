const AIRTABLE_API_URL = 'https://api.airtable.com/v0/appWrhXF96BNCMVTC/tblrQIv4hARjQJfm9';
const AIRTABLE_API_KEY = 'Bearer patKp6Qd6LtmGS3Ns.49fa6eec9fcfe10f5cde2762e424e523e1eb53f79f1b08a3509d54cf397d56b7';

export const deleteAirtableEntry = async (entryId) => {
  try {
    const response = await fetch(`${AIRTABLE_API_URL}/${entryId}`, {
      method: 'DELETE',
      headers: {
        'Authorization': AIRTABLE_API_KEY
      }
    });

    if (!response.ok) {
      throw new Error(`Error deleting entry: ${response.status} ${response.statusText}`);
    }

    return await response.json();
  } catch (error) {
    console.error('Error deleting entry from Airtable:', error);
    throw error;
  }
};
