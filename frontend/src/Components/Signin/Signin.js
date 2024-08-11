
import { FormControl, Input, Button, Box, Heading, Link, Text } from '@chakra-ui/react';
import axious from 'axios'

export const SignIn = () => {
  return (
    <Box
      display="flex"
      justifyContent="center"
      alignItems="center"
      height="100vh"
      bg="gray.900"
    >
      <Box
        bg="white"
        p={8}
        rounded="md"
        shadow="lg"
        width="100%"
        maxWidth="400px"
      >
        <Heading as="h1" size="lg" textAlign="center" mb={6}>
          Sign In
        </Heading>

        <FormControl>
          <Input type="email" placeholder="Email" />
        </FormControl>

        <FormControl mt={4}>
          <Input type="password" placeholder="Password" />
        </FormControl>

        <Button
          colorScheme="teal"
          mt={4}
          width="100%"
          _hover={{ bg: 'teal.500' }}
          _active={{ bg: 'teal.600', transform: 'scale(0.98)' }}
        >
          Log In
        </Button>

        <Link
          color="teal.500"
          display="block"
          mt={6}
          textAlign="center"
          _hover={{ color: 'green' }}
        >
          Forgot password?
        </Link>

        <Box textAlign="center" mt={4}>
          <Text color="gray.600">
            Don't have an account?{' '}
            <Link color="tomato" href="/register" fontWeight="bold">
              Sign Up
            </Link>
          </Text>
        </Box>
      </Box>
    </Box>
  );
};
