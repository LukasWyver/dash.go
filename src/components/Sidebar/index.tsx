import { Box, Stack } from '@chakra-ui/react';
import {
  RiContactsLine,
  RiDashboardLine,
  RiGitMergeLine,
  RiInputMethodLine,
} from 'react-icons/ri';
import { NavSection } from './NavSection';
import { NavLink } from './NavLink';

export function Sidebar() {
  return (
    <Box as="aside" w="64" mr="8">
      <Stack spacing="12" align="flex-start">
        <NavSection title="GERAL">
          <NavLink title="Dashboard" href="/Dashboard" icon={RiDashboardLine} />
          <NavLink title="Usuários" href="/users" icon={RiContactsLine} />
        </NavSection>

        <NavSection title="AUTOMAÇÃO">
          <NavLink title="Formulários" icon={RiInputMethodLine} />
          <NavLink title="Automação" icon={RiGitMergeLine} />
        </NavSection>
      </Stack>
    </Box>
  );
}
