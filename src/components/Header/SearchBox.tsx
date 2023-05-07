import { Flex, Icon, Input } from "@chakra-ui/react";
import { RiSearchLine } from "react-icons/ri";

export function SearchBox() {
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
        color="gray.50"
        variant="unstyled"
        placeholder="Buscar na plataforma"
        _placeholder={{
          color: 'gray.400',
        }}
      />
      <Icon as={RiSearchLine} fontSize="20" />
    </Flex>
  );
}
