import './App.css';
import { Box, Flex, Heading, Text, VStack } from '@chakra-ui/react';
import Tasks from './components/Tasks';
import FocusTasks from './components/FocusTasks';
import Timeline from './components/Timeline';
import Notes from './components/Notes';


function App() {
  return (
    <div className="App">
    <Flex>
      <Box width="20%" bg="gray.200" p={4}>
        <Tasks />
      </Box>
      <Box width="80%" p={4} >
        <Heading>Main Content Area</Heading>
        <FocusTasks/>
        <Flex direction={['column', 'row']} padding="20px" align="flex-start">
            <Notes maxW="300px"/>
            <Timeline width="full"/>
        </Flex>
      </Box>
    </Flex>
    </div>
  );
}

export default App;
