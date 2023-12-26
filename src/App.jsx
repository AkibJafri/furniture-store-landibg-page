import { SearchIcon } from '@chakra-ui/icons'
import {
  Box,
  Heading,
  Text,
  Image,
  SimpleGrid,
  Flex,
  Button,
  IconButton,
} from '@chakra-ui/react'

const RoomHomePage = () => {
  return (
    <Box bg={'white'} color={'black'}>
      <Flex
        direction={['column', 'column', 'row']}
        align={['center', 'center', 'initial']}
      >
        <Box
          flex={{
            base: 1,
            md: 1,
            lg: 1,
          }}
          bgImage={'/images/desktop-image-hero-1.jpg'}
          bgSize="cover"
          bgPosition="center"
          w="100%"
          h={['250px', '300px', '400px']}
        ></Box>

        <Box
          flex={{
            base: 1,
            md: 1,
            lg: 1,
          }}
          p={4}
          position={'relative'}
        >
          <Box>
            <Heading as="h1" size="xl" mb={1}>
              Discover innovative ways to decorate
            </Heading>
            <Text fontSize="sm" mb={2} color={'lightseagreen'}>
              We provide unmatched quality, comfort, and style for property
              owners across the country. Our experts combine form and function
              in bringing your vision to life. Create a room in your own style
              with our collection and make your property a reflection of you and
              what you love
            </Text>
            <Button
              fontSize="15PX"
              fontWeight={'extralight'}
              color={'black'}
              gap={4}
              letterSpacing={'10px'}
            >
              SHOP NOW
              <svg width="40" height="12" xmlns="http://www.w3.org/2000/svg">
                <path
                  d="M34.05 0l5.481 5.527h.008v.008L40 6l-.461.465v.063l-.062-.001L34.049 12l-.662-.668 4.765-4.805H0v-1h38.206l-4.82-4.86L34.05 0z"
                  fill="#000"
                  fill-rule="nonzero"
                />
              </svg>
            </Button>
          </Box>

          <Box position={'absolute'} bottom={0} left={0}>
            <IconButton
              colorScheme="blue"
              aria-label="Search database"
              icon={
                <svg width="14" height="24" xmlns="http://www.w3.org/2000/svg">
                  <path
                    d="M13 0L1 12l12 12"
                    stroke="#FFF"
                    fill="none"
                    fill-rule="evenodd"
                  />
                </svg>
              }
            />
            <IconButton
              colorScheme="blue"
              aria-label="Search database"
              icon={<SearchIcon />}
            />
          </Box>
        </Box>
      </Flex>

      <Box bg={'white'} color={'black'}>
        <SimpleGrid columns={[1, 2, 3]} spacing={4}>
          <Box
            flex={{
              base: 1,
              md: 1,
              lg: 0.3,
            }}
          >
            <Image
              src="/images/mobile-image-hero-2.jpg"
              alt="Room Image"
              objectFit="cover"
              w="100%"
              h={['250px', '300px', '400px']}
            />
          </Box>

          <Box
            flex={{
              base: 1,
              md: 1,
              lg: 0.4,
            }}
            bg="white"
            w="100%"
            textAlign="center"
            p={4}
            mt={8}
          >
            <Box p="4">
              <Heading as="h1" size="mb" mb={2}>
                About our furniture - Our multifunctional line
              </Heading>
              <Text fontSize="md" color={'lightseagreen'}>
                collection blends design and function to suit your individual
                taste. Make each room unique, or pick a cohesive theme that best
                express your interests and what inspires you. Find the furniture
                pieces you need, from traditional to contemporary styles or
                anything in between. Product specialists are available to help
                you create your dream space.{' '}
              </Text>
            </Box>
          </Box>

          <Box
            flex={{
              base: 1,
              md: 1,
              lg: 0.3,
            }}
          >
            <Image
              src="/images/mobile-image-hero-3.jpg"
              alt="Room Image"
              objectFit="cover"
              w="100%"
              h={['320px', '350px', '400px']}
            />
          </Box>
        </SimpleGrid>
      </Box>
    </Box>
  )
}

export default RoomHomePage
