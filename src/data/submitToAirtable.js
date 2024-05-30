// var Airtable = require('airtable');
// var base = new Airtable({apiKey: 'Bearer patKp6Qd6LtmGS3Ns.49fa6eec9fcfe10f5cde2762e424e523e1eb53f79f1b08a3509d54cf397d56b7'}).base('appWrhXF96BNCMVTC');

const submitToAirtable = async (updatedFormData) => {
    const airtableApiUrl = `https://api.airtable.com/v0/appWrhXF96BNCMVTC/tblrQIv4hARjQJfm9`;
    
    // base('Flight tracker').create([
    // {
    //     fields: {
    //         "fldY7E38Rbx85oGLO": formData.entryTitle,
    //         "fldkLuKgL5kxtf9Fz": formData.departureCountry,
    //         "fldqSQtzrgJLM9liM": formData.departureCity,
    //         "fldPEYicRQ8rF7Ydf": formData.departureAirport,
    //         "fldaclWfBv2ybn7qz": formData.destinationCountry,
    //         "fldVmKFu1iQAa0QaX": formData.destinationCity,
    //         "fldfUsidfBpumDXHg": formData.destinationAirport,
    //         "fldngfkjAutGwnCWq": formData.estimatedEmission
    
    //     }
    // }

    //   ], function(err, records) {
    //     if (err) {
    //       console.error(err);
    //       return;
    //     }
    //     records.forEach(function (record) {
    //       console.log(record.getId());
    //     });
    //   });

    const payload = {
        fields: {
            "entryTitle": updatedFormData.entryTitle,
            "departureCountry": updatedFormData.departureCountry,
            "departureCity": updatedFormData.departureCity,
            "departureAirport": updatedFormData.departureAirport,
            "destinationCountry": updatedFormData.destinationCountry,
            "destinationCity": updatedFormData.destinationCity,
            "destinationAirport": updatedFormData.destinationAirport,
            "estimatedEmission": updatedFormData.estimatedEmission,
        }
    };

    try {
        const response = await fetch(airtableApiUrl, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                "Authorization": `Bearer patKp6Qd6LtmGS3Ns.49fa6eec9fcfe10f5cde2762e424e523e1eb53f79f1b08a3509d54cf397d56b7` 
            },
            body: JSON.stringify(payload),
        });

        if (!response.ok) {
            throw new Error(`Error: ${response.status} ${response.statusText}`);
        }

        const jsonData = await response.json();
        console.log('Airtable response:', jsonData);


        return {
            id: jsonData.id,
            createdTime: jsonData.createdTime,
            ...jsonData.fields
        };


    } catch (error) {
        console.error('Error submitting to Airtable:', error);
        throw error;
    }
};

export default submitToAirtable;
