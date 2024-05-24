
import { ChakraProvider, Box, extendTheme } from '@chakra-ui/react';
import Dashboard from './Components/Dashboard'


const theme = extendTheme({
  // Add custom theme configurations if needed
});

function App() {
  return (
    <ChakraProvider theme={theme}>
      <Box p={8}>
        <Dashboard />
      </Box>
    </ChakraProvider>
  );
}

export default App;
