import {
  RiContactsLine,
  RiDashboardLine,
  RiGitMergeLine,
  RiInputMethodLine,
} from 'react-icons/ri';
import { NavSection } from './NavSection';
import { NavLink } from './NavLink';
import { Stack } from '@chakra-ui/react';

export function SidebarNav(){
  return (
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
  );
}
