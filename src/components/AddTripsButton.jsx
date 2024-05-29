
import { Button } from "@chakra-ui/react";
import { useState } from "react";
import FormModal from "./FormModal";

const AddTripsButton = ({ onAddFlight }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  const handleFormSubmit = (formData) => {
    onAddFlight(formData);
    closeModal();
  };

//     const handleFormSubmit = (formData) => {
//     setFlightEntries([...flightEntries, formData]);
//     closeModal(); //FormModal closes after submission 
//   }

  return (
    <>
      <Button colorScheme='teal' onClick={openModal}>Add Flight Entry</Button>
      <FormModal isOpen={isModalOpen} onClose={closeModal} onSubmit={handleFormSubmit} />
    </>
  );
};

export default AddTripsButton;
