import { Flex, Text, HStack, Image, Box, Heading, Avatar, Badge, Button, Center, Link, Stack, useColorModeValue } from '@chakra-ui/react'
import type { NextPage } from 'next'
import Head from 'next/head'
import React from 'react'
import Header from '../components/Header'

const Home: NextPage = () => {
  return (
    <>
      <Flex
        as="div"
        w="100%"
        alignItems="center"
        justifyContent="center"
      >
        <Flex
          w="100%"
          maxW="1440px"
          direction="column"
        >

          <Header />

          <Flex
            justifyContent="space-between"
            alignItems="center"
            mx={8}
          >
            <Flex
              direction="column"
              alignItems="start"
              justifyContent="center"
              height="600px"
              w="100%"
            >
              <Heading textAlign="left" size="3xl">
                Consultoria de Gestão Financeira e Empresarial
              </Heading>
              <Text textAlign="left" mt={8}>Juntos iremos promover um movimento
                de Transformação, Excelência e Prosperidade</Text>
            </Flex>

            <Image src="./images/hero.png" alt="Consultora" w="500px" />
          </Flex>

          <Heading
            mt={8}
            mb={36}
            size="sm"
            color="gray.500"
            textAlign="center"
          >SOBRE NÓS</Heading>

          <Center py={6}>

            <HStack 
              spacing={8}
              alignItems="stretch"
              justifyContent="space-between"
              w="80%"
            >
            
              <Box
                maxW={'320px'}
                w={'full'}
                bg={useColorModeValue('white', 'gray.900')}
                boxShadow={'2xl'}
                rounded={'lg'}
                p={6}
                textAlign={'center'}>
                <Avatar
                  border="8px solid lightgray"
                  mt={-24}
                  size={'2xl'}
                  src="./images/amanda.png"
                  alt={'Avatar Alt'}
                  mb={4}
                  
                />
                <Heading fontSize={'xl'} fontFamily={'body'} mt={8}>
                  Amanda Curty
                </Heading>
               
                <Text
                  textAlign={'justify'}
                  color={useColorModeValue('gray.700', 'gray.400')}
                  px={3}
                  mt={4}
                  lineHeight="8"
                >
                  Bacharel em Ciência da Computação – UFMT e com MBA em 
                  Gerenciamento de Projetos pela Fundação Getúlio Vargas. 
                  É Consultora e Analista em Processos e Negócios com 
                  experiência na área de Tecnologia.
                </Text>
              </Box>

              
              <Box
                maxW={'320px'}
                w={'full'}
                bg={useColorModeValue('white', 'gray.900')}
                boxShadow={'2xl'}
                rounded={'lg'}
                p={6}
                textAlign={'center'}>
                <Avatar
                  border="8px solid lightgray"
                  mt={-24}
                  size={'2xl'}
                  src="./images/cristiane.png"
                  alt={'Avatar Alt'}
                  mb={4}
                  
                />
                <Heading fontSize={'xl'} fontFamily={'body'} mt={8}>
                  Cristiane Furlanetti
                </Heading>
               
                <Text
                  textAlign={'justify'}
                  color={useColorModeValue('gray.700', 'gray.400')}
                  px={3}
                  mt={4}
                  lineHeight="8"
                >
                  Bacharel em Arquitetura e Urbanismo, e Pós-Graduada em Master 
                  em Arquitetura -IPOG. É formada na metodologia Green Belt Six 
                  Sigma e MEG. Atua desde 2006 no desenvolvimento de Projetos 
                  Corporativos, Gestão Estratégica e Processos da Qualidade – 
                  MEG/LEAN.MEG/ LEAN.
                </Text>
              </Box>

              <Box
                maxW={'320px'}
                w={'full'}
                bg={useColorModeValue('white', 'gray.900')}
                boxShadow={'2xl'}
                rounded={'lg'}
                p={6}
                textAlign={'center'}>
                <Avatar
                  border="8px solid lightgray"
                  mt={-24}
                  size={'2xl'}
                  src="./images/karin.png"
                  alt={'Avatar Alt'}
                  mb={4}
                  
                />
                <Heading fontSize={'xl'} fontFamily={'body'} mt={8}>
                  Karin Fischdick
                </Heading>
               
                <Text
                  textAlign={'justify'}
                  color={useColorModeValue('gray.700', 'gray.400')}
                  px={3}
                  mt={4}
                  lineHeight="8"
                >
                  Bacharel em Ciências Contábeis
                  Consultora Financeira com 25 anos de experiência em Controladoria
                  e Auditoria Externa, de empresas de médio e grande porte.
                </Text>
              </Box>
            </HStack>
          </Center>

          <Heading
            mt={36}
            mb={8}
            size="sm"
            color="gray.500"
            textAlign="center"
          >
            IDENTIDADE
          </Heading>

          <Center py={6}>

            <HStack
              spacing={8}
              alignItems="stretch"
              justifyContent="space-between"
              w="80%"
            >
              <Box
                maxW={'320px'}
                w={'full'}
                textAlign="center"
              >
                <Heading 
                  fontSize={'2xl'} 
                  fontFamily={'body'} 
                  mt={8}
                >
                  Missão
                </Heading>
                <Text my={8} fontSize="2xl">
                  Transformar vidas e
                  negócios, traduzindo os
                  desejos do cliente em 
                  expressões que alcancem
                  a Excelência
                </Text>
              </Box>

              <Box
                maxW={'320px'}
                w={'full'}
                textAlign="center"
              >
                <Heading 
                  fontSize={'2xl'} 
                  fontFamily={'body'} 
                  mt={8}
                >
                  Visão
                </Heading>
                <Text my={8} fontSize="2xl">
                  Ser reconhecida pela Alta Performance 
                  com entrega de soluções práticas, assertivas 
                  e inovadoras
                </Text>
              </Box>

              <Box
                maxW={'320px'}
                w={'full'}
                textAlign="center"
              >
                <Heading 
                  fontSize={'2xl'} 
                  fontFamily={'body'} 
                  mt={8}
                >
                  Valores
                </Heading>
                <Text my={8} fontSize="2xl">
                  Comprometimento <br />
                  Criatividade    <br />
                  Integridade     <br />
                  Melhoria Contínua <br />
                  Trabalho em Equipe  <br />
                </Text>
              </Box>
            </HStack>
          </Center>
        </Flex>
      </Flex>
    </>
  )
}

export default Home
