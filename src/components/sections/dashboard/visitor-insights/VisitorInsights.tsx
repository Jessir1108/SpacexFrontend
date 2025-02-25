import { Box, Button, Paper, Stack, Typography } from '@mui/material';
import VisitorInsightsChart from './VisitorInsightsChart';
import { ReactElement, useEffect, useRef, useState } from 'react';
import EChartsReactCore from 'echarts-for-react/lib/core';
import { fetchTravelsData } from 'api/getSalesData';

const VisitorInsights = (): ReactElement => {
  const chartRef = useRef<EChartsReactCore | null>(null);
  const [data, setData] = useState<{ years: string[], success: number[], upcoming: number[], failed: number[] }>({ years: [], success: [], upcoming: [], failed: [] });

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
      <Stack
        direction="row"
        justifyContent="space-between"
        alignItems="center"
        flexWrap="wrap"
        gap={2}
        mb={6}
      >
        <Typography variant="h4" color="common.white">
          Linechart - Travels by years
        </Typography>
        <Button
          variant="text"
          disableRipple
          startIcon={
            <Box
              sx={{
                width: 5,
                height: 5,
                bgcolor: 'warning.main',
                borderRadius: 400,
              }}
            />
          }
          sx={{
            justifyContent: 'flex-start',
            px: 4,
            py: 2,
            borderRadius: 1,
            alignItems: 'center',
            fontSize: 'body2.fontSize',
            gap: 1,
            color: 'text.disabled',
            bgcolor: 'background.default',
            cursor: 'default',
            '&:hover': {
              bgcolor: 'background.default',
            },
            '& .MuiButton-startIcon': {
              mx: 0,
            },
          }}
        >
          Travels by year
        </Button>
      </Stack>
      <VisitorInsightsChart
        chartRef={chartRef}
        data={data}
        sx={{ height: '342px !important', flexGrow: 1 }}
      />
    </Paper>
  );
};

export default VisitorInsights;