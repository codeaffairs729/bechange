import React from "react";
import { Box, Button } from "@mui/material";
import { Menu as Home } from "@mui/icons-material";

const MobileMenu = ({ navItems, handleCloseNavMenu }) => {
  const styles = {
    Container: {
      position: "absolute",
      flexDirection: "column",
      top: "63px",
      width: "100vw",
      height: "calc(100vh - 63px);",
      zIndex: "1",
      borderRadius: "0px 0px 40px 40px",
      background: "linear-gradient(180deg,  #d9d0be 15%, #709A4C  50%)",
    },
    button: {
      my: 2,
      borderRadius: "20px",
      width: "150px",
    },
    buttonContent: {
      borderRadius: "20px",
      width: "150px",
      gap: "8px",
    },
    flexCenter: {
      display: "flex",
      justifyContent: "center",
      justifyItems: "center",
      alignContent: "center",
      alignItems: "center",
    },
  };

  return (
    <Box sx={{ ...styles.Container, ...styles.flexCenter }}>
      {navItems.map((item, i) => (
        <Box
          key={i}
          onClick={() => handleCloseNavMenu(item.slug)}
          sx={{
            display: "flex",
            width: "100vw",
            border: "none",
            gap: "20px",
            justifyContent: "center",
          }}
        >
          <Button
            key={i}
            onClick={() => handleCloseNavMenu(item.slug)}
            sx={{
              ...styles.button,
              ...styles.flexCenter,
              color: item.main ? "#fff" : "#000",
            }}
            variant={item.variant}
          >
            <Box
              sx={{
                ...styles.buttonContent,
                ...styles.flexCenter,
              }}
            >
              {item.title === "Home" ? <Home color="primary" /> : item.title}
              {item.icon && (
                <img src={item.icon} alt="button icon" width="20" />
              )}
            </Box>
          </Button>
        </Box>
      ))}
    </Box>
  );
};

export default MobileMenu;
