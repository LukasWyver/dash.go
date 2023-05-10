import { useRef, useState } from 'react';
import { Flex, Icon, Input } from '@chakra-ui/react';
import { RiSearchLine } from 'react-icons/ri';

export function SearchBox() {
  // const [search, setSearch] = useState(''); // Controlled components // Declarative
  // const searchInputRef = useRef<HTMLInputElement>(null);
  // console.log(searchInputRef.current.value); // Uncotrolled components  // Imperative

  return (
    <Flex
      py="4"
      px="8"
      ml="6"
      flex="1"
      maxW={400}
      as="label"
      bg="gray.800"
      rounded="full"
      color="gray.200"
      alignSelf="center"
      position="relative"
    >
      <Input
        px="4"
        mr="4"
        // value={search}
        color="gray.50"
        variant="unstyled"
        //ref={searchInputRef}
        placeholder="Buscar na plataforma"
        autoFocus
        // onChange={(event) => setSearch(event.target.value)}
        _placeholder={{
          color: 'gray.400',
        }}
      />
      <Icon as={RiSearchLine} fontSize="20" />
    </Flex>
  );
}
