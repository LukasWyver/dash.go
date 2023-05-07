import { ElementType } from "react";
import { Icon, Link, LinkProps as ChakraLinkProps, Text } from "@chakra-ui/react";

interface NavLinkProps extends ChakraLinkProps {
  icon: ElementType;
  title: string;
}

export function NavLink({ title,  icon, ...rest }:NavLinkProps) {
  return (
    <Link display="flex" alignItems="center" {...rest}>
      <Icon as={icon} fontSize="20" />
      <Text ml="4" fontWeight="medium">
        {title}
      </Text>
    </Link>
  );
}
