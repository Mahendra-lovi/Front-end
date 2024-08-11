
import {
    FormControl,
    Input,
    Button,
    Box,
    Heading,
    Text,
    VStack,
    Link,
    useToast,
  } from '@chakra-ui/react';
  import { useState } from 'react';
  
  export const ForgotPassword = () => {
    const [isEmailSent, setIsEmailSent] = useState(false);
    const [isOtpVerified, setIsOtpVerified] = useState(false);
    const [email, setEmail] = useState('');
    const [otp, setOtp] = useState('');
    const [newPassword, setNewPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const toast = useToast();
  
    const handleEmailSubmit = () => {
      // Here, you would send the email to the server
      setIsEmailSent(true);
      toast({
        title: 'Email Sent.',
        description: "We've sent an OTP to your email address.",
        status: 'success',
        duration: 5000,
        isClosable: true,
      });
    };
  
    const handleOtpSubmit = () => {
      // Here, you would verify the OTP
      setIsOtpVerified(true);
      toast({
        title: 'OTP Verified.',
        description: 'You can now reset your password.',
        status: 'success',
        duration: 5000,
        isClosable: true,
      });
    };
  
    const handlePasswordSubmit = () => {
      if (newPassword !== confirmPassword) {
        toast({
          title: 'Error.',
          description: 'Passwords do not match.',
          status: 'error',
          duration: 5000,
          isClosable: true,
        });
        return;
      }
      // Here, you would send the new password to the server
      toast({
        title: 'Password Reset Successful.',
        description: 'Your password has been updated.',
        status: 'success',
        duration: 5000,
        isClosable: true,
      });
    };
  
    return (
      <Box
        display="flex"
        justifyContent="center"
        alignItems="center"
        height="100vh"
        bg="gray.300"
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
            Forgot Password
          </Heading>
  
          {!isEmailSent ? (
            <VStack spacing={4}>
              <FormControl>
                <Input
                  type="email"
                  placeholder="Enter your email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </FormControl>
              <Button
                colorScheme="teal"
                width="100%"
                onClick={handleEmailSubmit}
                _hover={{ bg: 'teal.500' }}
                _active={{ bg: 'teal.600', transform: 'scale(0.98)' }}
              >
                Send OTP
              </Button>
            </VStack>
          ) : !isOtpVerified ? (
            <VStack spacing={4}>
              <FormControl>
                <Input
                  type="text"
                  placeholder="Enter OTP"
                  value={otp}
                  onChange={(e) => setOtp(e.target.value)}
                />
              </FormControl>
              <Button
                colorScheme="teal"
                width="100%"
                onClick={handleOtpSubmit}
                _hover={{ bg: 'teal.500' }}
                _active={{ bg: 'teal.600', transform: 'scale(0.98)' }}
              >
                Verify OTP
              </Button>
            </VStack>
          ) : (
            <VStack spacing={4}>
              <FormControl>
                <Input
                  type="password"
                  placeholder="New Password"
                  value={newPassword}
                  onChange={(e) => setNewPassword(e.target.value)}
                />
              </FormControl>
              <FormControl>
                <Input
                  type="password"
                  placeholder="Confirm New Password"
                  value={confirmPassword}
                  onChange={(e) => setConfirmPassword(e.target.value)}
                />
              </FormControl>
              <Button
                colorScheme="teal"
                width="100%"
                onClick={handlePasswordSubmit}
                _hover={{ bg: 'teal.500' }}
                _active={{ bg: 'teal.600', transform: 'scale(0.98)' }}
              >
                Reset Password
              </Button>
            </VStack>
          )}
  
          <Box textAlign="center" mt={4}>
            <Text color="gray.600">
              Remembered your password?{' '}
              <Link color="tomato" href="/signin" fontWeight="bold">
                Sign In
              </Link>
            </Text>
          </Box>
        </Box>
      </Box>
    );
  };
  