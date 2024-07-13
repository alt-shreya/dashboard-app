import { Box, Card, CardHeader, CardBody, Stack, StackDivider, Heading, Text } from '@chakra-ui/react';

function Tasks() {

    const taskData = [
        { id: 1, title: "Task 1", description: "View a summary of all your clients over the last month." },
        { id: 2, title: "Task 2", description: "Check out the detailed report of project X." },
        { id: 3, title: "Task 3", description: "Review upcoming project deadlines." },
        { id: 4, title: "Task 4", description: "View a summary of all your clients over the last month." },
        { id: 5, title: "Task 5", description: "Check out the detailed report of project X." },
        { id: 6, title: "Task 6", description: "Review upcoming project deadlines." },
        { id: 7, title: "Task 7", description: "View a summary of all your clients over the last month." },
        { id: 8, title: "Task 8", description: "Check out the detailed report of project X." },
        { id: 9, title: "Task 9", description: "Review upcoming project deadlines." },
        { id: 10, title: "Task 10", description: "View a summary of all your clients over the last month." },
        { id: 11, title: "Task 11", description: "Check out the detailed report of project X." },
        { id: 12, title: "Task 12", description: "Review upcoming project deadlines." },
        ];


  return (
    <Card bg="gray.200" p={4} overflowY="auto" height="100vh" mt="50px">
      <CardHeader>
        <Heading size='md'>Client Report</Heading>
      </CardHeader>

      <CardBody >
        <Stack divider={<StackDivider />} spacing='4'>
        {taskData.map(task => (
        <Box key={task.id} width="full" boxShadow='md' p='6' rounded='md' bg='gray' m={[2, 3]}>
          <Heading size='xs' textTransform='uppercase'>
            {task.title}
          </Heading>
          <Text pt='2' fontSize='sm'>
            {task.description}
          </Text>
        </Box>
      ))}
        </Stack>
      </CardBody>
    </Card>
  );
}

export default Tasks;