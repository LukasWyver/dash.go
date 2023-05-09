import { Flex, Icon, IconButton, useBreakpointValue } from '@chakra-ui/react';

import { Logo } from './Logo';
import { Profile } from './Profile';
import { SearchBox } from './SearchBox';
import { Notifications } from './Notifications';
import { useSidebarDrawer } from '@/contexts/SidebarDrawerContext';
import { RiMenuLine } from 'react-icons/ri';

export function Header() {
  const { onOpen } = useSidebarDrawer();
  const isWideVersion = useBreakpointValue({
    base: false,
    lg: true,
  });

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
      {!isWideVersion && (
        <IconButton
          icon={<Icon as={RiMenuLine} color="gray.300"/>}
          aria-label="Open navigation"
          variant="unstyled"
          onClick={onOpen}
          fontSize="24"
          mr="2"
          mt="2"
        ></IconButton>
      )}
      <Logo />

      {isWideVersion && <SearchBox />}

      <Flex align="center" ml="auto">
        <Notifications />
        <Profile showProfileData={isWideVersion} />
      </Flex>
    </Flex>
  );
}
