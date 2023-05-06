import { extendTheme } from '@chakra-ui/react';

export const theme = extendTheme({
  colors: {
    gray: {
      '900': '#181B23',
      '800': '#1F2029',
      '700': '#353646',
      '600': '#4B4D63',
      '500': '#616480',
      '400': '#797D9A',
      '300': '#9699B0',
      '200': '#B3B5C6',
      '100': '#D1D2DC',
      '50': '#EEEEF2',
    },

    headline: {
      '500': '#31393C',
    },

    sky: {
      '600': '#2176FF',
      '300': '#33A1FD',
    },

    yellow: {
      '600': '#F79824',
      '300': '#FDCA40',
    },
  },

  fonts: {
    heading: 'Ubuntu',
    body: 'Ubuntu',
  },

  styles: {
    global: {
      body: {
        bg: 'gray.900',
        color: 'gray.50',
      },
    },
  },
});
