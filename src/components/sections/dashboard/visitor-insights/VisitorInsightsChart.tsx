import { SxProps, useTheme } from '@mui/material';
import ReactEChart from 'components/base/ReactEChart';
import * as echarts from 'echarts/core';
import EChartsReactCore from 'echarts-for-react/lib/core';
import { LineChart } from 'echarts/charts';
import { LegendComponent, TooltipComponent, GridComponent, LegendComponentOption, TooltipComponentOption, GridComponentOption } from 'echarts/components';
import { LineSeriesOption } from 'echarts/charts';
import { ReactElement, useMemo } from 'react';

echarts.use([LineChart, LegendComponent, TooltipComponent, GridComponent]);

type VisitorInsightsChartProps = {
  chartRef: React.MutableRefObject<EChartsReactCore | null>;
  data?: any;
  sx?: SxProps;
};

type VisitorInsightsChartOptions = echarts.ComposeOption<
  LineSeriesOption | LegendComponentOption | TooltipComponentOption | GridComponentOption
>;

const VisitorInsightsChart = ({
  chartRef,
  data,
  ...rest
}: VisitorInsightsChartProps): ReactElement => {
  const theme = useTheme();
  const option: VisitorInsightsChartOptions = useMemo(
    () => ({
      tooltip: {
        trigger: 'axis',
        axisPointer: {
          type: 'line',
          lineStyle: {
            color: theme.palette.warning.main,
          },
          label: {
            backgroundColor: theme.palette.warning.main,
          },
        },
      },
      legend: {
        show: true,
        data: ['Success', 'Upcoming', 'Failed'],
        textStyle: {
          color: theme.palette.common.white,
        },
      },
      grid: {
        top: '5%',
        right: '1%',
        bottom: '2.5%',
        left: '1.25%',
        containLabel: true,
      },
      xAxis: [
        {
          type: 'category',
          boundaryGap: false,
          data: data.years,
          axisLine: {
            show: false,
          },
          axisTick: {
            show: false,
          },
          axisLabel: {
            formatter: (value: string) => value, // Mostrar el valor completo
            padding: [10, 25, 10, 15],
            fontSize: theme.typography.body2.fontSize,
            fontWeight: theme.typography.fontWeightMedium as number,
            color: theme.palette.common.white,
          },
        },
      ],
      yAxis: [
        {
          type: 'value',
          min: 0,
          axisLine: {
            show: false,
          },
          axisTick: {
            show: false,
          },
          splitLine: {
            show: false,
          },
          axisLabel: {
            padding: [0, 10, 0, 0],
            fontSize: theme.typography.body2.fontSize,
            fontWeight: theme.typography.fontWeightMedium as number,
            color: theme.palette.common.white,
          },
        },
      ],
      series: [
        {
          id: 1,
          name: 'Success',
          type: 'line',
          smooth: false,
          color: theme.palette.primary.main,
          lineStyle: {
            width: 2,
            color: theme.palette.primary.main,
          },
          showSymbol: false,
          areaStyle: {
            opacity: 0.5,
            color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
              {
                offset: 1,
                color: theme.palette.primary.light,
              },
              {
                offset: 0,
                color: theme.palette.primary.main,
              },
            ]),
          },
          emphasis: {
            focus: 'series',
          },
          data: data.success,
        },
        {
          id: 2,
          name: 'Upcoming',
          type: 'line',
          smooth: false,
          color: theme.palette.secondary.main,
          lineStyle: {
            width: 2,
            color: theme.palette.secondary.main,
          },
          showSymbol: false,
          areaStyle: {
            opacity: 0.5,
            color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
              {
                offset: 1,
                color: theme.palette.secondary.light,
              },
              {
                offset: 0,
                color: theme.palette.secondary.main,
              },
            ]),
          },
          emphasis: {
            focus: 'series',
          },
          data: data.upcoming,
        },
        {
          id: 3,
          name: 'Failed',
          type: 'line',
          smooth: false,
          color: theme.palette.error.main,
          lineStyle: {
            width: 2,
            color: theme.palette.error.main,
          },
          showSymbol: false,
          areaStyle: {
            opacity: 0.5,
            color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
              {
                offset: 1,
                color: theme.palette.error.light,
              },
              {
                offset: 0,
                color: theme.palette.error.main,
              },
            ]),
          },
          emphasis: {
            focus: 'series',
          },
          data: data.failed,
        },
      ],
    }),
    [data, theme]
  );

  // Agregar console.log para depuración
  console.log('Years:', data.years);
  console.log('Success:', data.success);
  console.log('Upcoming:', data.upcoming);
  console.log('Failed:', data.failed);

  return <ReactEChart ref={chartRef} echarts={echarts} option={option} {...rest} />;
};

export default VisitorInsightsChart;