'use client'

import {
  Button,
  Flex,
  Heading,
  Image,
  Stack,
  Text,
  useBreakpointValue,
  Input,
} from '@chakra-ui/react'

export default function SplitScreen() {
  return (
    <Stack minH={'100vh'} direction={{ base: 'column', md: 'row' }}>
      <Flex p={8} flex={1} align={'center'} justify={'center'}>
        <Stack spacing={6} w={'full'} maxW={'lg'}>
          <Heading fontSize={{ base: '3xl', md: '4xl', lg: '5xl' }}>
            <Text
              as={'span'}
              position={'relative'}
              _after={{
                content: "''",
                width: 'full',
                height: useBreakpointValue({ base: '20%', md: '30%' }),
                position: 'absolute',
                bottom: 1,
                left: 0,
                bg: 'blue.400',
                zIndex: -1,
              }}>
              LegalGrid
            </Text>
            <br />{' '}
            
          </Heading>
          <Text fontSize={{ base: 'md', lg: 'lg' }} color={'gray.500'}>
            Find legal support within 5 minutes
          </Text>
            <Stack direction={{ base: 'column', md: 'row' }} spacing={4}>
            {/* Search Bar Input */}
            <Input
                rounded={'full'}
                placeholder="What is your legal issue?"
                bg={'gray.100'}
                border={0}
                _focus={{
                bg: 'white',
                outline: 'none',
                borderColor: 'blue.400',
                boxShadow: '0 0 0 2px rgba(66, 153, 225, 0.6)',
                }}
            />

            {/* Search Button */}
            <Button
                rounded={'full'}
                bg={'blue.400'}
                color={'white'}
                _hover={{
                bg: 'blue.500',
                }}>
                Get Legal Help
            </Button>
            </Stack>
        </Stack>


      </Flex>
      <Flex flex={1}>
        <Image
          alt={'Login Image'}
          objectFit={'cover'}
          src={
            'https://images.unsplash.com/photo-1527689368864-3a821dbccc34?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80'
          }
        />
      </Flex>
    </Stack>
  )
}