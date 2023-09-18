import { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import useTheme from '@mui/material/styles/useTheme';
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
} from "@mui/material";
import { Menu as MenuIcon, Home } from "@mui/icons-material";

const navItems = [
  // {
  //   title: 'Home',
  //   slug: '',
  // },
  {
    title: "Energie",
    slug: "energie",
    main: true,
    icon: "/green-energy.png",
    variant: "contained",
  },
  {
    title: "Banking",
    slug: "banking",
    main: true,
    icon: "/growth.png",
    variant: "contained",
  },
  {
    title: "Mobilfunk",
    slug: "mobile-funk",
    main: true,
    icon: "/sim-card.png",
    variant: "contained",
  },
  {
    title: "Qualität",
    slug: "qualitaet",
    variant: "text",
  },
  {
    title: "Blog",
    slug: "blog",
    variant: "text",
  },
];

export default function Header() {
  const navigate = useNavigate();
  const { screen } = useParams();
  const theme = useTheme();

  const [anchorElNav, setAnchorElNav] = useState(null);

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };

  const handleCloseNavMenu = (slug) => {
    setAnchorElNav(null);
    navigate("/" + slug);
  };

  return (
    <AppBar color="background">
      <Container maxWidth="lg">
        <Toolbar disableGutters sx={{ minHeight: "64px !important" }}>
          <Typography
            noWrap
            onClick={() => navigate("/")}
            sx={{
              flexGrow: 1,
              mr: 2,
              display: { xs: "none", md: "flex" },
              fontFamily: "monospace",
              fontWeight: 700,
              letterSpacing: ".3rem",
              color: "inherit",
              textDecoration: "none",
            }}
          >
            <img src="./logo_final.svg" width={"200px"} alt="Logo" />
          </Typography>

          <Typography
            noWrap
            onClick={() => navigate("/")}
            sx={{
              display: { xs: "flex", md: "none" },
              flexGrow: 1,
              fontFamily: "monospace",
              fontWeight: 700,
              letterSpacing: ".3rem",
              color: "inherit",
              textDecoration: "none",
            }}
          >
            <img src="./logo_final.svg" width={"200px"} alt="Logo" />
          </Typography>

          <Box sx={{ display: { xs: "flex", md: "none" } }}>
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              sx={{ color: "#2c9b42" }}
            >
              <MenuIcon />
            </IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: "bottom",
                horizontal: "left",
              }}
              keepMounted
              transformOrigin={{
                vertical: "top",
                horizontal: "left",
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{
                display: { xs: "block", md: "none" },
              }}
            >
              {navItems.map((item, i) => (
                <MenuItem key={i} onClick={() => handleCloseNavMenu(item.slug)}>
                  <Typography textAlign="center">{item.title}</Typography>
                </MenuItem>
              ))}
            </Menu>
          </Box>

          <Box sx={{ display: { xs: "none", md: "flex" }, gap: "2px" }}>
            {navItems.map((item, i) => (
              <Button
                key={i}
                onClick={() => handleCloseNavMenu(item.slug)}
                sx={{
                  my: 2,
                  display: "block",
                  borderRadius: "20px",
                  color: item.main ? "#fff" : "#000",
                }}
                variant={
                  item.variant
                  // item?.slug === screen
                  //   ? 'contained'
                  //   : item?.main
                  //   ? 'outlined'
                  //   : ''
                }
              >
                <Box display="flex" alignItems="center" gap="6px">
                  {item.title === "Home" ? (
                    <Home color="primary" />
                  ) : (
                    item.title
                  )}
                  {item.icon && (
                    <img src={item.icon} alt="button icon" width="20" />
                  )}
                </Box>
              </Button>
            ))}
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
}
