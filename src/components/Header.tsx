import {
  Flex,
  Text,
  Highlight,
  Input,
  Icon,
  HStack,
  Box,
  Avatar,
} from '@chakra-ui/react';
import {
  RiNotificationLine,
  RiSearchLine,
  RiUserAddLine,
} from 'react-icons/ri';

export function Header() {
  return (
    <Flex
      w="100%"
      as="header"
      maxW={1480}
      h="20"
      mx="auto"
      mt="4"
      px="6"
      align="center"
    >
      <Text fontSize="3xl" fontWeight="bold" letterSpacing="tight" w="64">
        <Highlight query="." styles={{ mr: 0.5, color: 'green.500' }}>
          Dash.Go
        </Highlight>
      </Text>

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

      <Flex align="center" ml="auto">
        <HStack
          py="1"
          mx="8"
          pr="8"
          spacing="8"
          color="gray.300"
          borderRightWidth={1}
          borderColor="gray.700"
        >
          <Icon as={RiNotificationLine} fontSize="20" />
          <Icon as={RiUserAddLine} fontSize="20" />
        </HStack>

        <Flex align="center">
          <Box mr="4" textAlign="right">
            <Text>Lucas Wyver Gimenes</Text>
            <Text color="gray.300" fontSize="small">
              lucaswyvergimenes@hotmail.com
            </Text>
          </Box>

          <Avatar
            size="md"
            name="Lucas Wyver"
            src="https://github.com/lukaswyver.png"
          />
        </Flex>
      </Flex>
    </Flex>
  );
}
