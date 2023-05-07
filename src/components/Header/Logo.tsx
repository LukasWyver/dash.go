import { Highlight, Text } from "@chakra-ui/react";

export function Logo() {
  return (
    <Text fontSize="3xl" fontWeight="bold" letterSpacing="tight" w="64">
      <Highlight query="." styles={{ mr: 0.5, color: 'pink.500' }}>
        Dash.Go
      </Highlight>
    </Text>
  );
}
