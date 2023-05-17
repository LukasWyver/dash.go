import { Box, HStack, Stack, Text } from '@chakra-ui/react';
import { Paginationtem } from './Paginationtem';

interface PaginationProps {
  totalCountOfRegisters: number;
  registersPerPage?: number;
  currentPage?: number;
  onPageChange: (page: number) => void;
}

const siblingsCount = 1;

function generatePagesArray(from: number, to: number) {
  return [...new Array(to - from)]
    .map((_, index) => {
      return from + index + 1;
    })
    .filter((page) => page > 0);
}

export function Pagination({
  totalCountOfRegisters,
  registersPerPage = 10,
  currentPage = 1,
  onPageChange,
}: PaginationProps) {
  const lastPage = Math.floor(totalCountOfRegisters / registersPerPage);
  const previousPages =
    currentPage > 1
      ? generatePagesArray(currentPage - 1 - siblingsCount, currentPage - 1)
      : [];

  const nextPages =
    currentPage < lastPage
      ? generatePagesArray(
          currentPage,
          Math.min(currentPage + siblingsCount, lastPage)
        )
      : [];

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
        {currentPage > 1 + siblingsCount && (
          <>
            <Paginationtem onPageChange={onPageChange} number={1} />
            {currentPage > 2 + siblingsCount && (
              <Text
                p="1"
                w="8"
                rounded="md"
                bg="gray.700"
                color="gray.300"
                textAlign="center"
              >
                ...
              </Text>
            )}
          </>
        )}

        {previousPages.length > 0 &&
          previousPages.map((page) => {
            return <Paginationtem onPageChange={onPageChange} key={page} number={page} />;
          })}

        <Paginationtem onPageChange={onPageChange} number={currentPage} isCurrent />

        {nextPages.length > 0 &&
          nextPages.map((page) => {
            return <Paginationtem onPageChange={onPageChange} key={page} number={page} />;
          })}

        {currentPage + siblingsCount < lastPage && (
          <>
            {currentPage + 1 + siblingsCount < lastPage && (
              <Text
                p="1"
                w="8"
                rounded="md"
                bg="gray.700"
                color="gray.300"
                textAlign="center"
              >
                ...
              </Text>
            )}
            <Paginationtem onPageChange={onPageChange} number={lastPage} />
          </>
        )}
      </HStack>
    </Stack>
  );
}
