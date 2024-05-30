
export const fetchAirtableEntries = async () => {
    const airtableApiUrl = `https://api.airtable.com/v0/appWrhXF96BNCMVTC/tblrQIv4hARjQJfm9`;
    
    try {
      const response = await fetch(airtableApiUrl, {
        method: 'GET',
        headers: {
          "Authorization": `Bearer patKp6Qd6LtmGS3Ns.49fa6eec9fcfe10f5cde2762e424e523e1eb53f79f1b08a3509d54cf397d56b7`,
          'Content-Type': 'application/json'
        },
      });
  
      if (!response.ok) {
        throw new Error(`Error: ${response.status} ${response.statusText}`);
      }
  
      const data = await response.json();
      return data.records.map(record => ({
        id: record.id,
        ...record.fields
      }));
    } catch (error) {
      console.error('Error fetching entries from Airtable:', error);
      throw error;
    }
  };
  