import Head from 'next/head';
import { useForm, SubmitHandler, FieldValues } from 'react-hook-form';
import { Flex, Button, Stack } from '@chakra-ui/react';
import { Input } from '@/components/Form/Input';

type SignInFormData = {
  email: string;
  password: string;
};

export default function SignIn() {
  const { register, handleSubmit, formState } = useForm<SignInFormData>();

  const handleSignIn: SubmitHandler<SignInFormData> = async (values) => {
    await new Promise(resolve => setTimeout(resolve, 200))
    console.log(values);
  }

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
          onSubmit={handleSubmit(handleSignIn)}
        >
          <Stack spacing="4">
            <Input label="E-mail" type="email" {...register('email')} />
            <Input label="Senha"  type="password" {...register('password')} />
          </Stack>

          <Button type="submit" mt="6" colorScheme="pink" size="lg" isLoading={formState.isSubmitting}>
            Entrar
          </Button>
        </Flex>
      </Flex>
    </>
  );
}
