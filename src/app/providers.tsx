'use client'

import { Header } from '@/components/Header'
import { theme } from '@/styles/theme'
import { ChakraProvider, Flex } from '@chakra-ui/react'

export function Providers({ 
    children 
  }: { 
  children: React.ReactNode 
  }) {
  return (
      <ChakraProvider resetCSS theme={theme}>
        <Header />
        <Flex
          w="100%"
          maxWidth={1480}
          mx="auto"
          mt="1"
          justifyContent={'center'}
        >
          {children}
        </Flex>
      </ChakraProvider>
  )
}