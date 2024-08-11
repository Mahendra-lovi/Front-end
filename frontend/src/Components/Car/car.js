
import React from 'react';
import {
  Box,
  Heading,
  Text,
  Button,
  useBreakpointValue,
  VStack,
  HStack,
} from '@chakra-ui/react';
import { motion } from 'framer-motion';

const MotionBox = motion(Box);

export const CarCompanionLandingPage = () => {
  const bgImage = 'url(https://wallpapers.com/images/hd/red-yellow-and-black-lamborghini-dg1c5ujc1wovschu.jpg)';
  const bgPosition = useBreakpointValue({ base: 'center', md: 'top' });

  return (
    <Box minH="100vh" overflow="hidden" display="flex" flexDirection="column">
      <MotionBox
        position="relative"
        backgroundImage={bgImage}
        backgroundSize="cover"
        backgroundRepeat="no-repeat"
        backgroundPosition={bgPosition}
        height="75vh"
        initial={{ backgroundPositionY: '0%' }}
        animate={{ backgroundPositionY: '100%' }}
        transition={{ duration: 20, repeat: Infinity, repeatType: 'reverse' }}
        display="flex"
        justifyContent="center"
        alignItems="center"
        bgAttachment="fixed"
      >
        <HStack spacing={6} position="absolute" bottom="50%" transform="translateY(50%)">
          <Button colorScheme="red" bg="darkred" size="lg" width="200px">
            Sign Up
          </Button>
          <Button colorScheme="white" bg="white" color="darkred" size="lg" width="200px">
            Log In
          </Button>
        </HStack>
      </MotionBox>
      <Box
        p={8}
        bg="black"
        flexGrow={1}
        textAlign="center"
        display="flex"
        flexDirection="column"
        justifyContent="center"
        alignItems="center"
      >
        <Heading as="h2" size="xl" mb={4} color="white">
          About Us
        </Heading>
        <Text fontSize="lg" color="gray.300" maxW="800px" mb={6}>
          Welcome to Car Companion, your ultimate partner in automotive
          adventures. We’re dedicated to providing the best tools, tips, and
          insights for car enthusiasts, helping you navigate the road with
          confidence and excitement. Join us as we explore the world of cars
          together.
        </Text>
      </Box>
    </Box>
  );
};

export default CarCompanionLandingPage;
