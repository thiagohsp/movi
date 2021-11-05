import { Flex, HStack, Image, Text } from '@chakra-ui/react'
import React from 'react'

export default function Header() {
  return (
    <Flex
        w="100%"
        h={24}
        justifyContent="space-between"
        alignItems="center" 
        
      >
        <Image src="/images/logo.svg" alt="Movi+ Consultoria" w={36}/>

        <HStack as="nav" spacing={12}>
          <Text>Sobre nós</Text>
          <Text>Institucional</Text>
          <Text>Soluções</Text>
          <Text>Interno</Text>
          <Text>Contato</Text>
        </HStack>

      </Flex>
  )
}
