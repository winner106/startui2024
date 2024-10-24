import { Box, Container, Grid, Heading } from '@chakra-ui/react';

import {
  AdminLayoutPage,
  AdminLayoutPageContent,
} from '@/features/admin/AdminLayoutPage';

import BarChart from './charts/BarChart';
import ColumnChart from './charts/ColumnChart';
import LineChart from './charts/LineChart';
import PieChart from './charts/PieChart';
import RadarChart from './charts/RadarChart';
import ScatterPlot from './charts/ScatterPlot';

export default function PageAdminDashboard() {
  return (
    <AdminLayoutPage containerMaxWidth="container.md">
      {/* <AdminLayoutPageContent> */}
      <Container maxW="80%" centerContent marginTop={'2%'}>
        <Grid
          templateColumns={{ base: '1fr', md: 'repeat(2, 1fr)' }}
          gap={6}
          width="100%"
        >
          <ChartWithTitle title="条形图">
            <BarChart
              width={700}
              height={400}
              margin={{ top: 50, right: 20, bottom: 50, left: 50 }}
            />
          </ChartWithTitle>
          <ChartWithTitle title="柱状图">
            <ColumnChart width={700} height={400} />
          </ChartWithTitle>
          <ChartWithTitle title="折线图" width={700} height={400}>
            <LineChart />
          </ChartWithTitle>
          <ChartWithTitle title="散点图" width={700} height={400}>
            <ScatterPlot />
          </ChartWithTitle>
          <ChartWithTitle title="雷达图">
            <RadarChart
              width={700}
              height={400}
              levels={6}
              margin={{ top: 10, right: 20, bottom: 20, left: 20 }}
            />
          </ChartWithTitle>
          <ChartWithTitle title="饼图">
            <PieChart width={700} height={400} />
          </ChartWithTitle>
        </Grid>
        {/* </AdminLayoutPageContent> */}
      </Container>
    </AdminLayoutPage>
  );
}

const ChartWithTitle = ({ title, children }: TODO) => (
  <Box
    border="1px solid #e2e8f0"
    p={4}
    borderRadius="md"
    display="flex"
    flexDirection="column"
    justifyContent="center"
    alignItems="center" // 水平居中
  >
    <Heading size="md" textAlign="center" mb={4}>
      {title}
    </Heading>
    {children}
  </Box>
);
