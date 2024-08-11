
import { FormControl, FormLabel, Input, FormHelperText, Button, Box, Heading, Text, Link } from '@chakra-ui/react';

export const Register = () => {
  return (
    <Box
      display="flex"
      justifyContent="center"
      alignItems="center"
      height="100vh"
      bgImage="url(https://papers.co/wallpaper/papers.co-bd23-car-dark-lamborghini-art-illustration-35-3840x2160-4k-wallpaper.jpg)"
      bgSize="cover"
      bgPosition="center"
      bgRepeat="no-repeat"
      position="relative"
      overflow="hidden"
    >
      <Box
        position="absolute"
        top="0"
        left="0"
        right="0"
        bottom="0"
        bg="rgba(0, 0, 0, 0)" // Semi-transparent overlay to ensure form visibility
        zIndex="0"
      />

      <Box
        p={8}
        rounded="md"
        shadow="lg"
        width="100%"
        maxWidth="450px"
        zIndex="2"
      
      >
        <Heading as="h1" size="lg" textAlign="center" mb={6} color="white" fontFamily="Arial, sans-serif">
          Sign Up
        </Heading>

        <FormControl mb={4}>
          <FormLabel fontFamily="Arial, sans-serif" color="white"></FormLabel>
          <Input type="email" placeholder="Enter your email address" bg="white" color="black" />
          <FormHelperText fontFamily="Arial, sans-serif" color="white"></FormHelperText>
        </FormControl>

        <FormControl mb={4}>
          <FormLabel fontFamily="Arial, sans-serif" color="white"></FormLabel>
          <Input type="password" placeholder="Create a password" bg="white" color="black" />
          <FormHelperText fontFamily="Arial, sans-serif" color="white">Choose a strong password.</FormHelperText>
        </FormControl>

        <FormControl mb={6}>
          <FormLabel fontFamily="Arial, sans-serif" color="white"></FormLabel>
          <Input type="password" placeholder="Confirm your password" bg="white" color="black" />
        </FormControl>

        <Button
          mt={6}
          width="100%"
          bg="#a3f7bf" // Button color
          _hover={{ bg: '#8ce1a7' }} // Slightly darker for hover
          _active={{ bg: '#7bd8a0', transform: 'scale(0.98)' }} // Even darker for active
          fontFamily="Arial, sans-serif"
        >
          Register
        </Button>

        <Box textAlign="center" mt={4}>
          <Text color="white">
            Already have an account?{' '}
            <Link color="tomato" href="/login" fontWeight="bold">
              Log In
            </Link>
          </Text>
        </Box>
      </Box>
    </Box>
  );
};

export default Register;
const featchData = async () => {
  await axios.post(api + "/students")
      .then((res) => {
          setData(res?.data)
      })
      .catch((e) => console.log(e))
}

useEffect(() => {
  featchData()
}, [])

