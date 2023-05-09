import { Box, HStack, Stack } from '@chakra-ui/react';
import { Paginationtem } from './Paginationtem';

export function Pagination() {
  return (
    <Stack
      flexDir={['column', 'row']}
      justify="space-between"
      align="center"
      spacing="6"
      mt="8"
    >
      <Box>
        <strong>0</strong> - <strong>10</strong> de <strong>100</strong>
      </Box>

      <HStack spacing="2">
        <Paginationtem number={1} isCurrent />
        <Paginationtem number={2} />
        <Paginationtem number={3} />
        <Paginationtem number={4} />
      </HStack>
    </Stack>
  );
}
