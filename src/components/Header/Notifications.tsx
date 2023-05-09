import { HStack, Icon } from '@chakra-ui/react';
import { RiNotificationLine, RiUserAddLine } from 'react-icons/ri';

export function Notifications() {
  return (
    <HStack
      py="1"
      pl={["4","0"]}
      pr={["4","6","8"]}
      mx={["2","4","6","8"]}
      color="gray.300"
      spacing={["2","4","6","8"]}
      borderRightWidth={1}
      borderColor="gray.700"
    >
      <Icon as={RiNotificationLine} fontSize="20" />
      <Icon as={RiUserAddLine} fontSize="20" />
    </HStack>
  );
}
