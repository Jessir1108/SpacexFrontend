import { ReactElement, useEffect, useState } from 'react';
import {
  Paper,
  Table,
  TableRow,
  TableBody,
  TableCell,
  TableHead,
  Typography,
  TableContainer,
} from '@mui/material';
import { productTableRows, updateProductTableRows } from 'data/product-data';
import ProductItemRow from './ProductItemRow';
import SimpleBar from 'simplebar-react';

const TopProducts = (): ReactElement => {
  const [products, setProducts] = useState(productTableRows);

  useEffect(() => {
    const fetchData = async () => {
      await updateProductTableRows();
      setProducts([...productTableRows]);
    };

    fetchData();
  }, []);

  return (
    <Paper sx={{ p: { xs: 3, sm: 8 }, height: 1 }}>
      <Typography variant="h4" color="common.white" mb={6}>
        Percentage - Travel status 
      </Typography>
      <TableContainer component={SimpleBar}>
        <Table sx={{ minWidth: 440 }}>
          <TableHead>
            <TableRow>
              <TableCell align="left">#</TableCell>
              <TableCell align="left">Status</TableCell>
              <TableCell align="left">Percentage</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {products.map((product) => (
              <ProductItemRow key={product.id} productItem={product} />
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </Paper>
  );
};

export default TopProducts;