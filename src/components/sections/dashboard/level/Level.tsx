import { Box, Divider, Paper, Stack, Typography, alpha, useTheme } from '@mui/material';
import EChartsReactCore from 'echarts-for-react/lib/core';
import { ReactElement, useEffect, useRef, useState } from 'react';
import LevelChart from './LevelChart';
import { fetchTravelsData } from 'api/getSalesData';
import { levelData } from 'data/chart-data/level';

const Level = (): ReactElement => {
  const theme = useTheme();
  const chartRef = useRef<EChartsReactCore | null>(null);
  const [data, setData] = useState(levelData);

  useEffect(() => {
    const handleResize = () => {
      if (chartRef.current) {
        chartRef.current.getEchartsInstance().resize();
      }
    };
    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, [chartRef]);

  useEffect(() => {
    const fetchData = async () => {
      const result = await fetchTravelsData();
      const years = Object.keys(result);
      const success = years.map(year => result[year].success);
      const upcoming = years.map(year => result[year].upcoming);
      const failed = years.map(year => result[year].failed);

      setData({ years, success, upcoming, failed });
    };

    fetchData();
  }, []);

  return (
    <Paper sx={{ p: { xs: 4, sm: 8 }, height: 1 }}>
      <Typography variant="h4" color="common.white" sx={{ mb: 2 }}>
        Barchart - Travels by year
      </Typography>
      <Box sx={{ mb: 2 }} /> {/* Agregar padding entre Typography y LevelChart */}
      <LevelChart
        chartRef={chartRef}
        data={data}
        sx={{ height: 'calc(100% - 48px) !important', flexGrow: 1 }}
      />
      <Stack
        direction="row"
        justifyContent="space-around"
        divider={
          <Divider
            orientation="vertical"
            flexItem
            sx={{ borderColor: alpha(theme.palette.common.white, 0.06), height: 1 }}
          />
        }
        px={2}
        pt={3}
      >
      </Stack>
    </Paper>
  );
};

export default Level;