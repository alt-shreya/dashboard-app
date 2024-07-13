import { Textarea, Card, CardHeader, CardBody, SimpleGrid, Heading, Text, Button, Image, CardFooter} from '@chakra-ui/react';

function FocusTasks() {
    return (
        <SimpleGrid width = "300px"spacing={4} templateColumns='repeat(auto-fill, minmax(200px, 1fr))' bg="pink" mt="20px">
  <Card>
    <CardHeader>
      <Heading size='md'> Notes </Heading>
    </CardHeader>
    <CardBody>
    <Textarea rows="10" cols="30" placeholder='Here is a sample placeholder' />
      <Text>View a summary of all your customers over the last month.</Text>
    </CardBody>
    <CardFooter>
      <Button>View here</Button>
    </CardFooter>
  </Card>
</SimpleGrid>
    )
}

export default FocusTasks;