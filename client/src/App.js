import './App.css';
import { Box, Flex, Heading, Text, VStack } from '@chakra-ui/react';
import Tasks from './components/Tasks';
import FocusTasks from './components/FocusTasks';
import Calendar from './components/Calendar';

function App() {
  return (
    <div className="App">
    <Flex>
      <Box width="20%" bg="gray.200" p={4}>
        <Tasks />
      </Box>
      <Box width="80%" p={4}>
        <Heading>Main Content Area</Heading>
        <FocusTasks/>
        <Calendar/>
      </Box>
    </Flex>
    </div>
  );
}

export default App;
