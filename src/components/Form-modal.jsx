import { useState } from 'react';
import PropTypes from 'prop-types';
import { Button, Modal, ModalOverlay, ModalContent, ModalHeader, ModalFooter, ModalBody, FormControl, FormLabel, Input, Select } from '@chakra-ui/react';

function FormModal({ isOpen, onClose }) {
  const [formData, setFormData] = useState({
    departureCountry: '',
    departureCity: '',
    departureAirport: '',
    destinationCountry: '',
    destinationCity: '',
    destinationAirport: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = () => {
    // Handle form submission (e.g., calculate emissions)
    // Reset form data
    setFormData({
      departureCountry: '',
      departureCity: '',
      departureAirport: '',
      destinationCountry: '',
      destinationCity: '',
      destinationAirport: '',
    });
    // Close modal
    onClose();
  };

  return (
    <Modal isOpen={isOpen} onClose={onClose} size="lg">
      <ModalOverlay />
      <ModalContent>
        <ModalHeader>Add New Entry</ModalHeader>
        <ModalBody>
          <FormControl>
            <FormLabel>Departure Country</FormLabel>
            <Input type="text" name="departureCountry" value={formData.departureCountry} onChange={handleChange} />
          </FormControl>
          <FormControl>
            <FormLabel>Departure City</FormLabel>
            <Input type="text" name="departureCity" value={formData.departureCity} onChange={handleChange} />
          </FormControl>
          <FormControl>
            <FormLabel>Departure Airport</FormLabel>
            <Select name="departureAirport" value={formData.departureAirport} onChange={handleChange}>
              {/* Dropdown options for departure airports */}
            </Select>
          </FormControl>
          <FormControl>
            <FormLabel>Destination Country</FormLabel>
            <Input type="text" name="destinationCountry" value={formData.destinationCountry} onChange={handleChange} />
          </FormControl>
          <FormControl>
            <FormLabel>Destination City</FormLabel>
            <Input type="text" name="destinationCity" value={formData.destinationCity} onChange={handleChange} />
          </FormControl>
          <FormControl>
            <FormLabel>Destination Airport</FormLabel>
            <Select name="destinationAirport" value={formData.destinationAirport} onChange={handleChange}>
              {/* Dropdown options for destination airports */}
            </Select>
          </FormControl>
        </ModalBody>
        <ModalFooter>
          <Button colorScheme="blue" mr={3} onClick={handleSubmit}>Calculate Emissions</Button>
          <Button variant="ghost" onClick={onClose}>Close</Button>
        </ModalFooter>
      </ModalContent>
    </Modal>
  );
}

FormModal.propTypes = {
  isOpen: PropTypes.bool.isRequired, // isOpen prop: boolean and is required
  onClose: PropTypes.func.isRequired, // onClose prop: function and is required
};

export default FormModal;
