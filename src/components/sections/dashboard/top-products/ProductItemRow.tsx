import { Chip, LinearProgress, TableCell, TableRow, Box } from '@mui/material';
import { ProductItem } from 'data/product-data';
import { ReactElement } from 'react';

const ProductItemRow = ({ productItem }: { productItem: ProductItem }): ReactElement => {
  let progressValue = 0;
  let progressLabel = '';
  let progressColor: 'primary' | 'secondary' | 'error' = 'primary';

  switch (productItem.name) {
    case 'Success':
      progressValue = productItem.successPercentage || 0;
      progressLabel = `Success: ${progressValue.toFixed(2)}%`;
      progressColor = 'primary';
      break;
    case 'Upcoming':
      progressValue = productItem.upcomingPercentage || 0;
      progressLabel = `Upcoming: ${progressValue.toFixed(2)}%`;
      progressColor = 'secondary';
      break;
    case 'Failed':
      progressValue = productItem.failedPercentage || 0;
      progressLabel = `Failed: ${progressValue.toFixed(2)}%`;
      progressColor = 'error';
      break;
    default:
      break;
  }

  return (
    <TableRow>
      <TableCell
        align="left"
        component="th"
        variant="head"
        scope="row"
        sx={{
          color: 'common.white',
          fontSize: 'body1.fontSize',
        }}
      >
        {productItem.id}
      </TableCell>
      <TableCell
        align="left"
        sx={{
          whiteSpace: 'nowrap',
        }}
      >
        {productItem.name}
      </TableCell>
      <TableCell align="left">
        <Box sx={{ mb: 1 }}>
          <LinearProgress
            variant="determinate"
            color={progressColor}
            value={progressValue}
            sx={{
              bgcolor: 'grey.900',
            }}
          />
          <Chip
            label={progressLabel}
            color={progressColor}
            variant="outlined"
            size="small"
            sx={{ mt: 1 }}
          />
        </Box>
      </TableCell>
    </TableRow>
  );
};

export default ProductItemRow;