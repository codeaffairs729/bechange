import { useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import {
  AppBar,
  Box,
  Button,
  Container,
  IconButton,
  Menu,
  MenuItem,
  Toolbar,
  Typography,
} from '@mui/material';
import { Menu as MenuIcon, Home } from '@mui/icons-material';

const navItems = [
  {
    title: 'Home',
    slug: '',
  },
  {
    title: 'Energie',
    slug: 'energie',
    main: true,
  },
  {
    title: 'Banking',
    slug: 'banking',
    main: true,
  },
  {
    title: 'Mobilfunk',
    slug: 'mobile-funk',
    main: true,
  },
  {
    title: 'Qualität',
    slug: 'qualitaet',
  },
  {
    title: 'Blog',
    slug: 'blog',
  },
];

export default function Header() {
  const navigate = useNavigate();
  const { screen } = useParams();

  const [anchorElNav, setAnchorElNav] = useState(null);

  const handleOpenNavMenu = event => {
    setAnchorElNav(event.currentTarget);
  };

  const handleCloseNavMenu = slug => {
    setAnchorElNav(null);
    navigate('/' + slug);
  };

  return (
    <AppBar color='background'>
      <Container maxWidth='xl'>
        <Toolbar disableGutters>
          <Typography
            noWrap
            onClick={() => navigate('/')}
            sx={{
              flexGrow: 1,
              mr: 2,
              display: { xs: 'none', md: 'flex' },
              fontFamily: 'monospace',
              fontWeight: 700,
              letterSpacing: '.3rem',
              color: 'inherit',
              textDecoration: 'none',
            }}
          >
            <img src='./logo_final.svg' width={'200px'} alt='Logo' />
          </Typography>

          <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
            <IconButton
              size='large'
              aria-label='account of current user'
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
              {navItems.map((item, i) => (
                <MenuItem key={i} onClick={() => handleCloseNavMenu(item.slug)}>
                  <Typography textAlign='center'>{item.title}</Typography>
                </MenuItem>
              ))}
            </Menu>
          </Box>
          <Typography
            noWrap
            onClick={() => navigate('/')}
            sx={{
              mr: 2,
              display: { xs: 'flex', md: 'none' },
              flexGrow: 1,
              fontFamily: 'monospace',
              fontWeight: 700,
              letterSpacing: '.3rem',
              color: 'inherit',
              textDecoration: 'none',
            }}
          >
            <img src='./logo_final.svg' width={'200px'} alt='Logo' />
          </Typography>
          <Box sx={{ display: { xs: 'none', md: 'flex' } }}>
            {navItems.map((item, i) => (
              <Button
                key={i}
                onClick={() => handleCloseNavMenu(item.slug)}
                sx={{ my: 2, display: 'block' }}
                variant={
                  item?.slug === screen
                    ? 'contained'
                    : item?.main
                    ? 'outlined'
                    : ''
                }
              >
                {item.title === 'Home' ? <Home color='primary' /> : item.title}
              </Button>
            ))}
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
}
