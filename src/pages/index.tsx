import Head from 'next/head';
import { Flex, Button, Stack } from '@chakra-ui/react';
import { Input } from '@/components/Form/Input';

export default function SignIn() {
  return (
    <>
      <Head>
        <title>Início | Dash.go Next App</title>
      </Head>

      <Flex w="100vw" h="100vh" align="center" justify="center">
        <Flex
          p={8}
          w="100%"
          as="form"
          maxW={360}
          rounded={8}
          bg="gray.800"
          flexDir="column"
        >
          <Stack spacing="4">
            <Input label="E-mail" name="email" type="email" />
            <Input label="Senha" name="password" type="password" />
          </Stack>

          <Button type="submit" mt="6" colorScheme="pink" size="lg">
            Entrar
          </Button>
        </Flex>
      </Flex>
    </>
  );
}
