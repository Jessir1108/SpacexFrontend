import React from 'react';
import EChartsReactCore from 'echarts-for-react/lib/core';
import * as echarts from 'echarts/core';
import { BarChart } from 'echarts/charts';
import { GridComponent, TooltipComponent, TitleComponent } from 'echarts/components';
import { CanvasRenderer } from 'echarts/renderers';

echarts.use([TitleComponent, TooltipComponent, GridComponent, BarChart, CanvasRenderer]);

interface LevelChartProps {
  chartRef: React.RefObject<EChartsReactCore>;
  data: {
    years: string[];
    success: number[];
    upcoming: number[];
    failed: number[];
  };
  sx?: object;
}

const LevelChart: React.FC<LevelChartProps> = ({ chartRef, data, sx }) => {
  const option = {
    tooltip: {
      trigger: 'axis',
    },
    legend: {
      data: ['Success', 'Upcoming', 'Failed'],
      textStyle: {
        color: '#ffffff', // Cambiar el color del texto de la leyenda a blanco
      },
    },
    xAxis: {
      type: 'category',
      data: data.years,
      axisLine: {
        lineStyle: {
          color: '#ffffff',
        },
      },
      axisLabel: {
        color: '#ffffff',
      },
    },
    yAxis: {
      type: 'value',
      axisLine: {
        lineStyle: {
          color: '#ffffff',
        },
      },
      axisLabel: {
        color: '#ffffff',
      },
      splitLine: {
        lineStyle: {
          color: 'rgba(255, 255, 255, 0.1)',
        },
      },
    },
    series: [
      {
        name: 'Success',
        type: 'bar',
        data: data.success,
      },
      {
        name: 'Upcoming',
        type: 'bar',
        data: data.upcoming,
      },
      {
        name: 'Failed',
        type: 'bar',
        data: data.failed,
      },
    ],
  };

  return <EChartsReactCore ref={chartRef} echarts={echarts} option={option} style={sx} />;
};

export default LevelChart;