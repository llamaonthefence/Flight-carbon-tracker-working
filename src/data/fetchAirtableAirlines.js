
export const fetchAirtableAirlines = async () => {
    const airtableApiUrl = `https://api.airtable.com/v0/appyBizdmhoXa9Mep/tbleb4TkWTK3ZkAYK`;
    
    try {
      const response = await fetch(airtableApiUrl, {
        method: 'GET',
        headers: {
          "Authorization": `Bearer patCLsWV6GUtuHvKS.aaec9f566901bcbf631f00f29c3e32a26aafceed23b2da5805bfd134660f7d49`,
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