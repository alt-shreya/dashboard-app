import React from 'react';
import { Box, Card, CardHeader, CardBody, SimpleGrid, Heading, Text, Divider, Button, Image, CardFooter, ButtonGroup} from '@chakra-ui/react';


function Timeline() {
    return (
        <SimpleGrid spacing={4} templateColumns='repeat(auto-fill, minmax(200px, 1fr))' bg="pink" mt="20px" height="230px">
  <Card>
    <CardHeader>
      <Heading size='md'> Projects Timeline</Heading>
    </CardHeader>
    <CardBody>
        <Text>Timeline goes here</Text>
    </CardBody>
    <CardFooter>
      <Button>View here</Button>
    </CardFooter>
  </Card>
</SimpleGrid>
    )
}

export default Timeline;