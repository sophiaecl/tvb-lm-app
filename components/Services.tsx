'use client'

import {
  Box,
  Button,
  Container,
  Flex,
  Heading,
  Icon,
  Stack,
  Text,
  useColorModeValue,
} from '@chakra-ui/react'
import { ReactElement } from 'react'
import {
  FcAbout,
  FcAssistant,
  FcCollaboration,
  FcDonate,
  FcManager,
} from 'react-icons/fc'

interface CardProps {
  heading: string
  description: string
  icon: ReactElement
  href: string
}

const Card = ({ heading, description, icon, href }: CardProps) => {
  return (
    <Box
      maxW={{ base: 'full', md: '275px' }}
      w={'full'}
      borderWidth="1px"
      borderRadius="lg"
      overflow="hidden"
      p={5}>
      <Stack align={'start'} spacing={2}>
        <Flex
          w={16}
          h={16}
          align={'center'}
          justify={'center'}
          color={'white'}
          rounded={'full'}
          bg={useColorModeValue('gray.100', 'gray.700')}>
          {icon}
        </Flex>
        <Box mt={2}>
          <Heading size="md">{heading}</Heading>
          <Text mt={1} fontSize={'sm'}>
            {description}
          </Text>
        </Box>
        <Button variant={'link'} colorScheme={'blue'} size={'sm'}>
          Learn more
        </Button>
      </Stack>
    </Box>
  )
}

export default function gridListWith() {
  return (
    <Box p={4} bg={useColorModeValue('blue.200', 'gray.700')}>
      <Stack spacing={10} as={Container} maxW={'3xl'} textAlign={'center'}>
        <Heading fontSize={{ base: '2xl', sm: '4xl' }} fontWeight={'bold'}>
          Our Services
        </Heading>
      </Stack>

      <Container maxW={'5xl'} mt={12}>
        <Flex flexWrap="wrap" gridGap={6} justify="center">
          <Card
            heading={'Employment'}
            icon={<Icon as={FcManager} w={10} h={10} />}
            description={'Our employment law services help with workplace disputes, wrongful termination, discrimination, and contract issues. We ensure your rights are protected in any employment-related matter.'}
            href={'#'}
          />
          <Card
            heading={'Family'}
            icon={<Icon as={FcCollaboration} w={10} h={10} />}
            description={'We provide compassionate support for family matters, including divorce, child custody, alimony, and adoption. Our family law experts guide you through these personal issues with care.'}
            href={'#'}
          />
          <Card
            heading={'Wills, Trust, and Probate'}
            icon={<Icon as={FcDonate} w={10} h={10} />}
            description={'Our team assists with estate planning, drafting wills and trusts, and managing probate processes to ensure your assets are handled according to your wishes.'}
            href={'#'}
          />
          <Card
            heading={'Litigation'}
            icon={<Icon as={FcManager} w={10} h={10} />}
            description={'We offer representation in civil and commercial disputes, advocating for you in court or negotiating settlements to resolve conflicts efficiently.'}
            href={'#'}
          />
          <Card
            heading={'Landlord and Tenants'}
            icon={<Icon as={FcCollaboration} w={10} h={10} />}
            description={"Whether you're a landlord or tenant, we help navigate rental agreements, evictions, and disputes to protect your rights and ensure fair treatment."}
            href={'#'}
          />
          <Card
            heading={'Money, Tax, and Debt'}
            icon={<Icon as={FcDonate} w={10} h={10} />}
            description={'Our legal experts assist with financial issues such as tax disputes, debt relief, and bankruptcy, helping you manage your finances and find solutions to complex problems.'}
            href={'#'}
          />
        </Flex>
      </Container>
    </Box>
  )
}