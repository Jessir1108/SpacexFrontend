import totalSales from 'assets/images/todays-sales/total-sales.png';
import totalOrder from 'assets/images/todays-sales/total-order.png';
import productSold from 'assets/images/todays-sales/product-sold.png';

export interface SaleItem {
  id?: number;
  icon: string;
  title: string;
  subtitle: string;
  color: string;
}

const salesData: SaleItem[] = [
  {
    id: 1,
    icon: totalOrder,
    title: '0', // Placeholder, will be updated with actual data
    subtitle: 'Successful releases',
    color: 'primary.main',
  },
  {
    id: 2,
    icon: totalSales,
    title: '0', // Placeholder, will be updated with actual data
    subtitle: 'Next to travel',
    color: 'warning.main',
  },
  {
    id: 3,
    icon: productSold,
    title: '0', // Placeholder, will be updated with actual data
    subtitle: 'Failed',
    color: 'secondary.main',
  },
];

export default salesData;