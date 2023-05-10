import { Box, Center, Flex, Stack, Text } from '@chakra-ui/react';
import Image from 'next/image';

export default function Custom404() {
  return (
    <Flex  flexDir="column" w="100vw" h="100vh" alignItems="center" justify="center">

        <Image src="/_404_Page_Not_Found.png" width={400} height={256} alt="Página não encontrada!" />
        <Text align="center" fontSize="3xl" mt="-16">Erro 404 - Página não encontrada!</Text>

    </Flex>
  );
}
