import { theme } from '@/styles/theme';
import type { AppProps } from 'next/app';
import { ChakraProvider } from '@chakra-ui/react';
import { SidebarDrawerProvider } from '@/contexts/SidebarDrawerContext';

export default function App({ Component, pageProps }: AppProps) {
  return (
    <ChakraProvider theme={theme}>
      <SidebarDrawerProvider>
        <Component {...pageProps} />
      </SidebarDrawerProvider>
    </ChakraProvider>
  );
}
