import { Container, Text, VStack, Heading, Box, Button, Flex } from "@chakra-ui/react";
import { FaCode, FaLaptopCode, FaChalkboardTeacher } from "react-icons/fa";

const Index = () => {
  return (
    <Container centerContent maxW="container.lg" height="100vh" display="flex" flexDirection="column" justifyContent="center" alignItems="center">
      <VStack spacing={8}>
        <Heading as="h1" size="2xl" textAlign="center">
          Welcome to CodeMaster
        </Heading>
        <Text fontSize="xl" textAlign="center">
          Your ultimate platform to master coding skills with interactive lessons and real-world projects.
        </Text>
        <Flex justifyContent="center" wrap="wrap" spacing={8}>
          <Box p={5} shadow="md" borderWidth="1px" flex="1" borderRadius="md" m={2} maxW="sm">
            <FaCode size="3em" />
            <Heading fontSize="xl" mt={4}>Interactive Lessons</Heading>
            <Text mt={4}>Learn coding with hands-on interactive lessons designed to teach you the fundamentals and beyond.</Text>
          </Box>
          <Box p={5} shadow="md" borderWidth="1px" flex="1" borderRadius="md" m={2} maxW="sm">
            <FaLaptopCode size="3em" />
            <Heading fontSize="xl" mt={4}>Real-World Projects</Heading>
            <Text mt={4}>Apply your skills by working on real-world projects that simulate actual coding scenarios.</Text>
          </Box>
          <Box p={5} shadow="md" borderWidth="1px" flex="1" borderRadius="md" m={2} maxW="sm">
            <FaChalkboardTeacher size="3em" />
            <Heading fontSize="xl" mt={4}>Expert Mentors</Heading>
            <Text mt={4}>Get guidance and feedback from industry experts to help you on your coding journey.</Text>
          </Box>
        </Flex>
        <Button colorScheme="teal" size="lg" mt={8}>
          Get Started
        </Button>
      </VStack>
    </Container>
  );
};

export default Index;