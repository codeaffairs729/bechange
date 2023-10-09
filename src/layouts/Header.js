import { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import useTheme from "@mui/material/styles/useTheme";
import {
  Box,
  Button,
  Container,
  IconButton,
  Toolbar,
  Typography,
} from "@mui/material";
import { Menu as MenuIcon, Home } from "@mui/icons-material";
import CloseIcon from "@mui/icons-material/Close";
import MobileMenu from "../components/MobileMenu";

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
    active: true,
  },
  {
    title: "Banking",
    slug: "banking",
    main: true,
    icon: "/growth.png",
    variant: "contained",
    active: true,
  },
  {
    title: "Mobilfunk",
    slug: "mobile-funk",
    main: true,
    icon: "/sim-card.png",
    variant: "contained",
    active: true,
  },
  {
    title: "Qualität",
    slug: "qualitaet",
    variant: "text",
    active: false,
  },
  {
    title: "Blog",
    slug: "blog",
    variant: "text",
    active: false,
  },
  {
    title: "About",
    slug: "about",
    variant: "text",
    active: false,
  },
];

export default function Header() {
  const navigate = useNavigate();
  const [open, setOpen] = useState(false);

  const theme = useTheme();

  const [anchorElNav, setAnchorElNav] = useState(null);

  const handleOpenNavMenu = (event) => {
    setOpen(!open);
    setAnchorElNav(event.currentTarget);
  };

  const handleCloseNavMenu = (slug) => {
    setOpen(false);
    setAnchorElNav(null);
    navigate("/" + slug);
  };

  const path = useParams();

  const { screen } = path;

  return (
    <Box id="hero-section" sx={{ position: "relative" }}>
      <Container maxWidth="lg">
        <Toolbar
          disableGutters
          sx={{
            minHeight: "64px !important",
          }}
        >
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
              aria-controls="menu-Box"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              sx={{ color: "#2c9b42" }}
            >
              {open ? <CloseIcon /> : <MenuIcon />}
            </IconButton>
          </Box>

          <Box sx={{ display: { xs: "none", md: "flex" }, gap: "10px" }}>
            {navItems.map((item, i) => (
              <Button
                key={i}
                onClick={() => handleCloseNavMenu(item.slug)}
                size="small"
                sx={{
                  my: 2,
                  display: "block",
                  borderRadius: "20px",
                  color: item.main ? "#fff" : "#000",
                  background:
                    item.active &&
                    (screen == item.slug ? "rgb(62, 100, 36)" : ""),
                }}
                variant={item.variant}
              >
                <Box display="flex" alignItems="center" gap="6px">
                  {item.title === "Home" ? (
                    <Home color="primary" />
                  ) : (
                    item.title
                  )}
                  {item.icon && (
                    <img src={item.icon} alt="button icon" width="20px" />
                  )}
                </Box>
              </Button>
            ))}
          </Box>
        </Toolbar>
      </Container>
      {open && (
        <MobileMenu
          navItems={navItems}
          screen={screen}
          handleOpenNavMenu={handleOpenNavMenu}
          handleCloseNavMenu={handleCloseNavMenu}
        />
      )}
    </Box>
  );
}
