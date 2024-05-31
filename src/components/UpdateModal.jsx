import { useState, useEffect } from "react";
// import FormModal from "./FormModal";
import { fetchAirtableEntry } from "../data/fetchAirtableEntry";
import { editAirtableEntry } from "../data/editAirtableEntry";


// useState for before data is fetched. 
const UpdateModal = ({isOpen, onClose, entryId}) => {
    const [initialData, setInitialData] = useState({
        entryTitle: "",
        departureCountry: "", 
        departureCity: "", 
        departureAirport: "", 
        destinationCountry: "", 
        destinationCity: "", 
        destinationAirport: ""
    }); 

    const [loading, setLoading] = useState(true)


// to update 1 object with multiple state variables - based on entryId prop
// all fields are user input in FormModal - same level inside response data 

    useEffect(() => {
    const fetchInitialData = async () => {
           try {
                const data = await fetchAirtableEntry(entryId);
                if (data.fields) {
                    setInitialData({
                        entryTitle: data.fields.entryTitle || "" , 
                        departureCountry: data.fields.departureCountry, 
                        departureCity: data.fields.departureCity, 
                        departureAirport: data.fields.departureAirport,
                        destinationCountry: data.fields.destinationCountry, 
                        destinationCity: data.fields.destinationCity, 
                        destinationAirport: data.fields.destinationAirport
                    })
                }
              console.log(data)  
            } catch (error) {
                console.error('Error fetching initial data:', error)
            } finally {
                setLoading(false); 
            }
        }
        if (isOpen) {
        fetchInitialData()
        } 
    }, [isOpen, entryId])


    const handleUpdate = (updatedFormData) => {
        editAirtableEntry() 
        console.log('Updated form data', updatedFormData)
    }

    // if (loading) {
    //     return (<div>Loading...</div>)
    // }

    return (
        <>
        {/* <FormModal isOpen={isOpen} onClose={onClose} initialData={initialData} onSubmit={handleUpdate}/>  */}
        </>
    )
} 

// export default UpdateModal; 


