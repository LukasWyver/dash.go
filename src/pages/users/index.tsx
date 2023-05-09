import { Header } from '@/components/Header';
import { Pagination } from '@/components/Pagination';
import { Sidebar } from '@/components/Sidebar';
import {
  Box,
  Button,
  Checkbox,
  Flex,
  Heading,
  Icon,
  IconButton,
  Table,
  Tbody,
  Td,
  Text,
  Th,
  Thead,
  Tr,
  useBreakpointValue,
} from '@chakra-ui/react';
import { RiAddLine, RiPencilLine } from 'react-icons/ri';

export default function UserList() {
  const isWideVersion = useBreakpointValue({
    base:false,
    lg: true,
  });

  return (
    <Box>
      <Header />
      <Flex w="100%" maxW={1480} my="6" mx="auto" px={["2","4","6"]}>
        <Sidebar />

        <Box flex="1" rounded="8" bg="gray.800" p={["2","4","6","8"]}>
          <Flex mb="8" justify="space-between" align="center">
            <Heading size="lg" fontWeight="normal">
              Usuários
            </Heading>

            <Button
              as="a"
              size="sm"
              fontSize="sm"
              colorScheme="pink"
              leftIcon={<Icon as={RiAddLine} fontSize="20" />}
            >
              Criar novo
            </Button>
          </Flex>

          <Table colorScheme="whiteAlpha">
            <Thead>
              <Tr>
                <Th px={["2","4","6"]} color="gray.300" width="8">
                  <Checkbox colorScheme="pink" />
                </Th>
                <Th px={["2","4","6"]}>Usuário</Th>
                {isWideVersion && <Th>Data de cadastro</Th>}
                <Th width="8"></Th>
              </Tr>
            </Thead>
            <Tbody>
              <Tr>
                <Td px={["2","4","6"]}>
                  <Checkbox colorScheme="pink" />
                </Td>
                <Td px={["2","4","6"]}>
                  <Box>
                    <Text fontWeight="bold">Lucas Wyver</Text>
                    <Text fontSize="small" color="gray.300">
                      lucaswyvergimenes@hotmail.com
                    </Text>
                  </Box>
                </Td>
                {isWideVersion && <Td>05 de Maio, 2023</Td>}

                <Td px={["2","4","6"]}>
                  {isWideVersion ? (
                    <Button
                    as="a"
                    size="sm"
                    fontSize="sm"
                    colorScheme='purple'
                    leftIcon={<Icon as={RiPencilLine} fontSize="16"/>}
                  >
                    Editar
                  </Button>
                  ) : (
                    <IconButton
                      icon={<Icon as={RiPencilLine} color="white"/>}
                      aria-label="Editar user"
                      colorScheme='purple'
                      fontSize="sm"
                      size="sm"
                      as="a"
                    ></IconButton>
                  )}
                </Td>
              </Tr>
            </Tbody>
          </Table>

          <Pagination />
        </Box>
      </Flex>
    </Box>
  );
}
