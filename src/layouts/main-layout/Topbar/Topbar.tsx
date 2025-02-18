import {
  Stack,
  AppBar,
  Toolbar,
  IconButton,
  Typography,
} from '@mui/material';
import IconifyIcon from 'components/base/IconifyIcon';
import { ReactElement } from 'react';
import { drawerCloseWidth, drawerOpenWidth } from '..';
import { useBreakpoints } from 'providers/BreakpointsProvider';

const Topbar = ({
  open,
  handleDrawerToggle,
}: {
  open: boolean;
  handleDrawerToggle: () => void;
}): ReactElement => {
  const { down } = useBreakpoints();

  const isMobileScreen = down('sm');

  return (
    <AppBar
      position="fixed"
      sx={{
        left: 0,
        ml: isMobileScreen ? 0 : open ? 60 : 27.5,
        width: isMobileScreen
          ? 1
          : open
          ? `calc(100% - ${drawerOpenWidth}px)`
          : `calc(100% - ${drawerCloseWidth}px)`,
        paddingRight: '0 !important',
      }}
    >
      <Toolbar
        component={Stack}
        direction="row"
        alignItems="center"
        justifyContent="space-between"
        sx={{
          bgcolor: 'background.default',
          height: 116,
        }}
      >
        <Stack direction="row" gap={2} alignItems="center" ml={2.5}>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            onClick={handleDrawerToggle}
            edge="start"
          >
            <IconifyIcon
              icon={open ? 'ri:menu-unfold-4-line' : 'ri:menu-unfold-3-line'}
              color="common.white"
            />
          </IconButton>
          <IconButton
            color="inherit"
            sx={{
              display: { xs: 'flex', sm: 'none' },
            }}
          >
            <IconifyIcon icon="mdi:search" />
          </IconButton>
        </Stack>
        <Typography variant="h2" component="div" sx={{ flexGrow: 1, textAlign: 'center', color: 'white' }}>
          SpacexJF
        </Typography>
        <Stack
          direction="row"
          gap={3.75}
          alignItems="center"
          justifyContent="flex-end"
          mr={3.75}
        >
        </Stack>
      </Toolbar>
    </AppBar>
  );
};

export default Topbar;