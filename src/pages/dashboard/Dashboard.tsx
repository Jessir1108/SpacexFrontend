import { ReactElement } from 'react';
import { Box } from '@mui/material';

import VisitorInsights from 'components/sections/dashboard/visitor-insights/VisitorInsights';
import TodaysSales from 'components/sections/dashboard/todays-sales/TodaysSales';
import TopProducts from 'components/sections/dashboard/top-products/TopProducts';
import Level from 'components/sections/dashboard/level/Level';

const Dashboard = (): ReactElement => {
  const sections = [
    {
      component: <TodaysSales />,
      gridColumn: { xs: 'span 12', '2xl': 'span 8' },
      order: { xs: 0 },
    },
    {
      component: <TopProducts />,
      gridColumn: { xs: 'span 12', lg: 'span 4' },
      order: { xs: 1, '2xl': 1 },
      sx: { minHeight: 'calc(100% + 90%)' },
    },
    {
      component: <Level />,
      gridColumn: { xs: 'span 12', lg: 'span 8' },
      order: { xs: 2, '2xl': 2 },
      sx: { minHeight: 'calc(100% + 30%)' },
    },
    {
      component: <VisitorInsights />,
      gridColumn: { xs: 'span 12' },
      order: { xs: 3, '2xl': 3 },
      sx: {
        minHeight: 'calc(100% + 30%)',
        pt: 4,
        pb: 2, 
        position: 'relative',
        '& .MuiBox-root': {
          marginTop: (theme: { spacing: (arg0: number) => any }) => theme.spacing(3), 
        },
      },
    },
  ];

  return (
    <Box
      display="grid"
      gridTemplateColumns="repeat(12, 1fr)"
      gap={3.5}
      sx={{
        padding: { xs: 2, md: 3 },
        backgroundColor: 'background.default',
        minHeight: '100vh',
        overflow: 'auto', 
      }}
    >
      {sections.map((section, index) => (
        <Box
          key={`dashboard-section-${index}`}
          gridColumn={section.gridColumn}
          order={section.order}
          sx={{
            ...section.sx,
            transition: 'all 0.3s ease-in-out',
            borderRadius: 2,
            boxShadow: 1,
            backgroundColor: 'background.paper',
          }}
        >
          {section.component}
        </Box>
      ))}
    </Box>
  );
};

export default Dashboard;