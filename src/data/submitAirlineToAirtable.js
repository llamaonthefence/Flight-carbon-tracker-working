const submitAirlineToAirtable = async (airline) => {
    const airtableApiUrl = `https://api.airtable.com/v0/appyBizdmhoXa9Mep/tbleb4TkWTK3ZkAYK`;
    

    const payload = {
        fields: {
            "name": airline.name,
            "iata": airline.iata, 
    }
    }; 

    try {
        const response = await fetch(airtableApiUrl, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                "Authorization": `Bearer patCLsWV6GUtuHvKS.aaec9f566901bcbf631f00f29c3e32a26aafceed23b2da5805bfd134660f7d49` 
            },
            body: JSON.stringify(payload),
        });

        if (!response.ok) {
            throw new Error(`Error: ${response.status} ${response.statusText}`);
        }

        const jsonData = await response.json();
        console.log('Airtable response:', jsonData);


        return jsonData; 
        // {
        //     name: jsonData.id,
        //     iata: jsonData.iata,
        //     ...jsonData.fields
        // };


    } catch (error) {
        console.error('Error submitting to Airtable:', error);
        throw error;
    }
};

export default submitAirlineToAirtable;