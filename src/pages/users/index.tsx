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
  Spinner,
  Table,
  Tbody,
  Td,
  Text,
  Th,
  Thead,
  Tr,
  useBreakpointValue,
} from '@chakra-ui/react';
import Link from 'next/link';
import { useEffect } from 'react';
import { api } from '@/services/api';
import { useQuery } from '@tanstack/react-query';
import { RiAddLine, RiPencilLine, RiRefreshLine } from 'react-icons/ri';

type User = {
  id: string;
  name: string;
  email: string;
  createdAt: string;
};

export default function UserList() {
  const { data, isLoading, isFetching, refetch, error } = useQuery({
    queryKey: ['users'],
    queryFn: async () => {
      // const response = await fetch('https://localhost:3000/api/users');
      const { data } = await api.get('/users');
      // const data = await response.json();
      const users = data.users.map((user: User) => {
        return {
          id: user.id,
          name: user.name,
          email: user.email,
          createdAt: new Date(user.createdAt).toLocaleDateString('pt-BR', {
            day: '2-digit',
            month: 'long',
            year: 'numeric',
          }),
        };
      });

      return users;
    },
    staleTime: 1000 * 5, // 5 segs
  });

  const isWideVersion = useBreakpointValue({
    base: false,
    lg: true,
  });

  useEffect(() => {}, []);

  return (
    <Box>
      <Header />
      <Flex w="100%" maxW={1480} my="6" mx="auto" px={['2', '4', '6']}>
        <Sidebar />

        <Box flex="1" rounded="8" bg="gray.800" p={['2', '4', '6', '8']}>
          <Flex mb="8" justify="space-between" align="center">
            <Heading size="lg" fontWeight="normal">
              Usuários{' '}
              {!isLoading && isFetching && (
                <Spinner
                  ml="4"
                  size="sm"
                  speed="0.65s"
                  thickness="4px"
                  color="pink.500"
                />
              )}
            </Heading>

            {isWideVersion && (
              <Button
                mr="4"
                ml="auto"
                size="sm"
                fontSize="sm"
                variant="ghost"
                colorScheme="whiteAlpha"
                onClick={() => refetch()}
                leftIcon={<Icon as={RiRefreshLine} fontSize="16"  />}
              >
                Recarregar
              </Button>
            )}

            <Link href="/users/create">
              <Button
                size="sm"
                fontSize="sm"
                colorScheme="pink"
                leftIcon={<Icon as={RiAddLine} fontSize="20" />}
              >
                Criar novo
              </Button>
            </Link>
          </Flex>

          {isLoading ? (
            <Flex justify="center" align="center">
              <Spinner speed="0.65s" thickness="4px" color="pink.500" />
            </Flex>
          ) : error ? (
            <Flex justify="center">
              <Text>Falha ao obter dados dos usuários.</Text>
            </Flex>
          ) : (
            <>
              <Table colorScheme="whiteAlpha">
                <Thead>
                  <Tr>
                    <Th px={['2', '4', '6']} color="gray.300" width="8">
                      <Checkbox colorScheme="pink" />
                    </Th>
                    <Th px={['2', '4', '6']}>Usuário</Th>
                    {isWideVersion && <Th>Data de cadastro</Th>}
                    <Th width="8"></Th>
                  </Tr>
                </Thead>
                <Tbody>
                  {data.map((user: User) => {
                    return (
                      <Tr key={user.id}>
                        <Td px={['2', '4', '6']}>
                          <Checkbox colorScheme="pink" />
                        </Td>
                        <Td px={['2', '4', '6']}>
                          <Box>
                            <Text fontWeight="bold">{user.name}</Text>
                            <Text fontSize="small" color="gray.300">
                              {user.email}
                            </Text>
                          </Box>
                        </Td>

                        {isWideVersion && <Td>{user.createdAt}</Td>}

                        <Td px={['2', '4', '6']}>
                          {isWideVersion ? (
                            <Button
                              as="a"
                              size="sm"
                              fontSize="sm"
                              colorScheme="purple"
                              leftIcon={
                                <Icon as={RiPencilLine} fontSize="16" />
                              }
                            >
                              Editar
                            </Button>
                          ) : (
                            <IconButton
                              icon={<Icon as={RiPencilLine} color="white" />}
                              aria-label="Editar user"
                              colorScheme="purple"
                              fontSize="sm"
                              size="sm"
                              as="a"
                            ></IconButton>
                          )}
                        </Td>
                      </Tr>
                    );
                  })}
                </Tbody>
              </Table>

              <Pagination />
            </>
          )}
        </Box>
      </Flex>
    </Box>
  );
}
