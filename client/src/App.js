import './App.css';
import { Box, Flex, Heading, Text, VStack } from '@chakra-ui/react';
import Tasks from './components/Tasks';

function App() {
  return (
    <div className="App">
    <Flex>
      <Box width="20%" bg="gray.200" p={4}>
        <Tasks />
      </Box>
      <Box width="80%" p={4}>
        <Heading>Main Content Area</Heading>
      </Box>
    </Flex>
    </div>
  );
}

export default App;
