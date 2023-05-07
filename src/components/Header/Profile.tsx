import { Avatar, Box, Flex, Text } from '@chakra-ui/react';

export function Profile() {
  return (
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
  );
}
