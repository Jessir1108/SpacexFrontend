import { ReactElement, useEffect, useState } from 'react';
import { Box, Paper, Typography } from '@mui/material';
import { fetchSalesData } from 'api/getSalesData';
import SaleCard from './SaleCard';
import { SaleItem } from 'data/sales-data';
import totalOrder from 'assets/images/todays-sales/total-order.png';
import totalSales from 'assets/images/todays-sales/total-sales.png';
import productSold from 'assets/images/todays-sales/product-sold.png';

const TodaysSales = (): ReactElement => {
  const [salesData, setSalesData] = useState<SaleItem[]>([]);

  useEffect(() => {
    const getData = async () => {
      const counts = await fetchSalesData();
      const updatedSalesData: SaleItem[] = [
        {
          id: 1,
          icon: totalOrder,
          title: counts.success.toString(),
          subtitle: 'Successful releases',
          color: 'primary.main',
        },
        {
          id: 2,
          icon: totalSales,
          title: counts.upcoming.toString(),
          subtitle: 'Next to travel',
          color: 'warning.main',
        },
        {
          id: 3,
          icon: productSold,
          title: counts.failed.toString(),
          subtitle: 'Failed',
          color: 'secondary.main',
        },
      ];
      setSalesData(updatedSalesData);
    };
    getData();
  }, []);

  return (
    <Paper sx={{ p: { xs: 4, sm: 8 }, height: 1 }}>
      <Typography variant="h4" color="common.white" mb={1.25}>
        Spacex Travel
      </Typography>
      <Typography variant="subtitle2" color="text.disabled" mb={6}>
        Summary of trips over the years
      </Typography>

      {/* Contenedor flex con los elementos ocupando el mismo ancho */}
      <Box display="flex" width="100%" gap={2}>
        {salesData.map((saleItem) => (
          <Box key={saleItem.id} flex={1}>
            <SaleCard saleItem={saleItem} />
          </Box>
        ))}
      </Box>
    </Paper>
  );
};

export default TodaysSales;