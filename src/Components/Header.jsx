import React, { useState } from 'react'
import { Box, Button, Image, Flex, VStack, HStack } from '@chakra-ui/react'
import logo from '../image/logo.svg'
import menu from '../images/icon-hamburger.svg'
import close from '../images/icon-close.svg'

export default function Header() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <Flex
      as="header"
      pos="absolute"
      zIndex="10"
      p="8"
      w="full"
      align="center"
      justify={{ base: 'center', lg: 'start' }}
    >
      <Box>
        <Image src={logo} alt="" mr={{ base: 0, lg: 8 }} />
      </Box>

      <Box
        pos={{ base: 'fixed', lg: 'static' }}
        w={{ base: 'full', lg: 'auto' }}
        h={{ base: isOpen ? '100%' : 'auto', lg: 'auto' }}
        top="0"
        left="0"
        right="0"
        bottom="0"
        bg={{
          base: isOpen ? 'blackAlpha.75' : 'transparent',
          lg: 'transparent',
        }}
        zIndex="overlay"
      >
        <VStack
          spacing={{ base: 4, lg: 0 }}
          align={{ base: 'center', lg: 'flex-start' }}
          py={{ base: 8, lg: 0 }}
          w={{ base: 'full', lg: 'auto' }}
        >
          <HStack spacing={4}>
            <Button
              borderBottomWidth="2px"
              borderBottomColor="transparent"
              _hover={{ borderBottomColor: 'neutral.900' }}
            >
              home
            </Button>
            <Button
              borderBottomWidth="2px"
              borderBottomColor="transparent"
              _hover={{ borderBottomColor: 'neutral.900' }}
            >
              shop
            </Button>
            <Button
              borderBottomWidth="2px"
              borderBottomColor="transparent"
              _hover={{ borderBottomColor: 'neutral.900' }}
            >
              about
            </Button>
            <Button
              borderBottomWidth="2px"
              borderBottomColor="transparent"
              _hover={{ borderBottomColor: 'neutral.900' }}
            >
              contact
            </Button>
          </HStack>
        </VStack>
      </Box>

      <Box
        pos="absolute"
        left="8"
        top="8"
        zIndex="20"
        display={{ base: 'block', lg: 'none' }}
      >
        {isOpen ? (
          <Button onClick={() => setIsOpen(false)}>
            <Image src={close} alt="" />
          </Button>
        ) : (
          <Button onClick={() => setIsOpen(true)}>
            <Image src={menu} alt="" />
          </Button>
        )}
      </Box>
    </Flex>
  )
}
