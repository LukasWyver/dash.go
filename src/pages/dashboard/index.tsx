import { Header } from '@/components/Header';
import { Sidebar } from '@/components/Sidebar';
import { Box, Flex, SimpleGrid, Text, theme } from '@chakra-ui/react';

import dynamic from 'next/dynamic';

const Chart = dynamic(() => import('react-apexcharts'), {
  ssr: false,
});

import { ApexOptions } from 'apexcharts';
import Head from 'next/head';

const options: ApexOptions = {
  chart: {
    toolbar: {
      show: false,
    },
    zoom: {
      enabled: false,
    },
    foreColor: theme.colors.gray[500],
  },
  grid: {
    show: false,
  },
  dataLabels: {
    enabled: false,
  },
  tooltip: {
    enabled: false,
  },
  xaxis: {
    type: "datetime",
    axisBorder: {
      color: theme.colors.gray[600],
    },
    axisTicks: {
      color: theme.colors.gray[600],
    },
    categories: [
      "2023-05-18T00:00:00.000Z",
      "2023-05-19T00:00:00.000Z",
      "2023-05-20T00:00:00.000Z",
      "2023-05-21T00:00:00.000Z",
      "2023-05-22T00:00:00.000Z",
      "2023-05-23T00:00:00.000Z",
      "2023-05-24T00:00:00.000Z",
    ],
  },
  fill: {
    opacity: 0.3,
    type: "gradient",
    gradient: {
      shade: "dark",
      opacityFrom: 0.7,
      opacityTo: 0.3
    }
  }
};
const series = [{ name: 'series1', data: [31, 120, 10, 28, 61, 18, 59] }];

export default function Dashboard() {
  return (
    <Flex flexDir="column" h="100vh">
      <Head>
        <title>Dashboard | Dash.go Next App</title>
      </Head>
      <Header />

      <Flex w="100%" maxW={1480} my="6" mx="auto" px="6">
        <Sidebar />

        <SimpleGrid
          flex="1"
          gap="4"
          minChildWidth={[300,320]}
          alignItems="flex-start"
        >
          <Box p={["6","8"]} pb="4" bg="gray.800" rounded={8}>
            <Text fontSize="lg" mb="4">
              Inscritos da semana
            </Text>
            <Chart type="area" height={160} options={options} series={series} />
          </Box>

          <Box p={["6","8"]} pb="4" bg="gray.800" rounded={8}>
            <Text fontSize="lg" mb="4">
              Taxa de abertura
            </Text>
            <Chart type="area" height={160} options={options} series={series} />
          </Box>
        </SimpleGrid>
      </Flex>
    </Flex>
  );
}
