import { LinearProgressProps } from '@mui/material';
import { fetchSalesData } from 'api/getSalesData';

export interface ProductItem {
  id?: string;
  name: string;
  color: LinearProgressProps['color'];
  successPercentage?: number;
  upcomingPercentage?: number;
  failedPercentage?: number;
}

export const productTableRows: ProductItem[] = [
  {
    id: '01',
    name: 'Success',
    color: 'warning'
  },
  {
    id: '02',
    name: 'Upcoming',
    color: 'primary'
  },
  {
    id: '03',
    name: 'Failed',
    color: 'info'
  },
];

export const updateProductTableRows = async () => {
  const salesData = await fetchSalesData();
  console.log('Fetched sales data:', salesData);

  const success = Number(salesData.success);
  const upcoming = Number(salesData.upcoming);
  const failed = Number(salesData.failed);

  console.log('Converted sales data:', { success, upcoming, failed });

  const totalSales = success + upcoming + failed;
  console.log('Total sales:', totalSales);

  productTableRows.forEach(product => {
    product.successPercentage = (success / totalSales) * 100;
    product.upcomingPercentage = (upcoming / totalSales) * 100;
    product.failedPercentage = (failed / totalSales) * 100;

    console.log(`Updated product ${product.id}:`, {
      successPercentage: product.successPercentage,
      upcomingPercentage: product.upcomingPercentage,
      failedPercentage: product.failedPercentage,
    });
  });
};

updateProductTableRows();