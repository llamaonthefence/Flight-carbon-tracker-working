import  { useState } from 'react';
import { Box, Button } from '@chakra-ui/react';
import DashboardEntries from './DashboardEntries';
import FormModal from './FormModal';


function Dashboard() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [entries, setEntries] = useState([]);

  const handleOpenModal = () => {
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  const handleFormSubmit = (formData) => {
    // Add the new entry to the entries array
    setEntries([...entries, formData]);
    // Close the modal
    setIsModalOpen(false);
  };

  return (
    <Box>
      <Button onClick={handleOpenModal} colorScheme="blue" mb={4}>Add New Entry</Button>
      <DashboardEntries entries={entries} />
      <FormModal isOpen={isModalOpen} onClose={handleCloseModal} onSubmit={handleFormSubmit} />
    </Box>
  );
}

export default Dashboard;
