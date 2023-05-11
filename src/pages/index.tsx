import Head from 'next/head';
import { useForm, SubmitHandler } from 'react-hook-form';
import { Flex, Button, Stack } from '@chakra-ui/react';
import { yupResolver } from '@hookform/resolvers/yup'
import { Input } from '@/components/Form/Input';
import * as yup from 'yup';

type SignInFormData = {
  email: string;
  password: string;
};

const signInFormSchema = yup.object().shape({
  email: yup.string().required('E-mail obrigatório').email('E-mail inválido'),
  password: yup.string().required('Senha obrigatória'),
})

export default function SignIn() {
  const { register, handleSubmit, formState: { errors, isSubmitting } } = useForm<SignInFormData>({
    resolver: yupResolver(signInFormSchema)
  });

  const handleSignIn: SubmitHandler<SignInFormData> = async (values) => {
    await new Promise((resolve) => setTimeout(resolve, 200));
    console.log(values);
  };

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
            <Input
              label="E-mail"
              type="email"
              error={errors.email}
              {...register('email')}
            />
            <Input
              label="Senha"
              type="password"
              error={errors.password}
              {...register('password')}
            />
          </Stack>

          <Button
            type="submit"
            mt="6"
            colorScheme="pink"
            size="lg"
            isLoading={isSubmitting}
          >
            Entrar
          </Button>
        </Flex>
      </Flex>
    </>
  );
}
