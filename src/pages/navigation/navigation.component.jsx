import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import Button from '@mui/material/Button';
import MenuItem from '@mui/material/MenuItem';

import { ReactComponent as Logo } from '../../assets/spacex.svg';
import './navigation.styles.css';
import { useState } from 'react';
import { Link, Outlet } from 'react-router-dom';

const Navigation = () => {
  const [anchorElNav, setAnchorElNav] = useState(null);

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  return (
    <>
      <AppBar
        sx={{ bgcolor: '#000', zIndex: (theme) => theme.zIndex.drawer + 1 }}
        position='sticky'
      >
        <Container maxWidth='xl'>
          <Toolbar disableGutters>
            <Typography
              variant='h6'
              noWrap
              sx={{
                display: { xs: 'none', md: 'flex' },
              }}
            >
              <Link to='/'>
                <Logo className='logo' />
              </Link>
            </Typography>

            <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
              <IconButton
                size='large'
                aria-controls='menu-appbar'
                aria-haspopup='true'
                onClick={handleOpenNavMenu}
                color='inherit'
              >
                <MenuIcon />
              </IconButton>
              <Menu
                id='menu-appbar'
                anchorEl={anchorElNav}
                anchorOrigin={{
                  vertical: 'bottom',
                  horizontal: 'left',
                }}
                keepMounted
                transformOrigin={{
                  vertical: 'top',
                  horizontal: 'left',
                }}
                open={Boolean(anchorElNav)}
                onClose={handleCloseNavMenu}
                sx={{
                  display: { xs: 'block', md: 'none' },
                }}
              >
                <MenuItem onClick={handleCloseNavMenu}>
                  <Typography
                    component={Link}
                    to='past-launches'
                    textAlign='center'
                  >
                    Past Launches
                  </Typography>
                  <Typography
                    component='a'
                    href='https://github.com/ragiptopalli/pabau-spacex'
                    target='_blank'
                    textAlign='center'
                  >
                    GitHub Repo
                  </Typography>
                </MenuItem>
              </Menu>
            </Box>

            <Typography
              variant='h5'
              noWrap
              sx={{
                mr: 2,
                display: { xs: 'flex', md: 'none' },
                flexGrow: 1,
              }}
            >
              <Link to='/'>
                <Logo className='logo' />
              </Link>
            </Typography>
            <Box
              sx={{
                flexGrow: 1,
                display: { xs: 'none', md: 'flex' },
                justifyContent: 'right',
              }}
            >
              <Button
                component={Link}
                to='past-launches'
                onClick={handleCloseNavMenu}
                sx={{
                  my: 2,
                  color: '#fff',
                  display: 'block',
                  fontSize: '16px',
                }}
              >
                Past Launches
              </Button>
              <Button
                component='a'
                href='https://github.com/ragiptopalli/pabau-spacex'
                target='_blank'
                onClick={handleCloseNavMenu}
                sx={{
                  my: 2,
                  color: '#fff',
                  display: 'block',
                  fontSize: '16px',
                }}
              >
                GitHub Repo
              </Button>
            </Box>
          </Toolbar>
        </Container>
      </AppBar>
      <Outlet />
    </>
  );
};
export default Navigation;
