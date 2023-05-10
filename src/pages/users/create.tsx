import { Input } from '@/components/Form/Input';
import { Header } from '@/components/Header';
import { Sidebar } from '@/components/Sidebar';
import {
  Box,
  Button,
  Divider,
  Flex,
  HStack,
  Heading,
  SimpleGrid,
  VStack,
} from '@chakra-ui/react';
import Link from 'next/link';

export default function UserCreate() {
  return (
    <Box>
      <Header />
      <Flex w="100%" maxW={1480} my="6" mx="auto" px={["4","6"]}>
        <Sidebar />

        <Box flex="1" rounded="8" bg="gray.800" p={["6","8"]}>
          <Heading size="lg" fontWeight="normal">
            Criar usuário
          </Heading>
          <Divider my="6" borderColor="gray.700" />

          <VStack spacing="8">
            <SimpleGrid minChildWidth={240} spacing={["6","8"]} w="100%">
              <Input name="name" label="Nome completo" />
              <Input name="email" type="email" label="E-mail" />
            </SimpleGrid>

            <SimpleGrid minChildWidth={240} spacing={["6","8"]} w="100%">
              <Input name="password" type="password" label="Senha" />
              <Input
                name="password_confirmation"
                type="password"
                label="Confirmação da senha"
              />
            </SimpleGrid>
          </VStack>

          <Flex mt="8" justify="flex-end">
            <HStack spacing="4">
              <Link href="/users"><Button colorScheme='whiteAlpha'>Cancelar</Button></Link>
              <Link href="/"><Button colorScheme='pink'>Salvar</Button></Link>
            </HStack>
          </Flex>
        </Box>
      </Flex>
    </Box>
  );
}
