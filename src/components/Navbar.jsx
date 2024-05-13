import { StyledButton, StyledText, TextFieldCustom } from "@/custom/component";
import { NavBarList, NavbarContainer } from "@/custom/theme";
import SearchIcon from "@mui/icons-material/Search";
import { Button, Typography, createTheme, useTheme } from "@mui/material";
import GitHubIcon from "@mui/icons-material/GitHub";
import NotificationsIcon from "@mui/icons-material/Notifications";
import DarkModeIcon from "@mui/icons-material/DarkMode";
import React from "react";

const Navbar = () => {
  const theme = useTheme();
  const data = [
    { id: 1, name: "Products" },
    { id: 2, name: "Docs" },
    { id: 3, name: "Pricing" },
    { id: 3, name: "About us" },
    { id: 4, name: "Blog" },
  ];
  const style = {
    typography: {
      [theme.breakpoints.down("sm")]: {
        display: "flex",
      },
    },
  };
  return (
    <>
      <NavbarContainer>
        <div
          className=""
          style={{
            display: "flex",
            alignItems: "center",

            justifyContent: 'space-between',
            gap: "1rem",
          }}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="30"
            height="32"
            viewBox="0 0 36 32"
            fill="none"
            className="css-1170n61"
          >
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M30.343 21.976a1 1 0 00.502-.864l.018-5.787a1 1 0 01.502-.864l3.137-1.802a1 1 0 011.498.867v10.521a1 1 0 01-.502.867l-11.839 6.8a1 1 0 01-.994.001l-9.291-5.314a1 1 0 01-.504-.868v-5.305c0-.006.007-.01.013-.007.005.003.012 0 .012-.007v-.006c0-.004.002-.008.006-.01l7.652-4.396c.007-.004.004-.015-.004-.015a.008.008 0 01-.008-.008l.015-5.201a1 1 0 00-1.5-.87l-5.687 3.277a1 1 0 01-.998 0L6.666 9.7a1 1 0 00-1.499.866v9.4a1 1 0 01-1.496.869l-3.166-1.81a1 1 0 01-.504-.87l.028-16.43A1 1 0 011.527.86l10.845 6.229a1 1 0 00.996 0L24.21.86a1 1 0 011.498.868v16.434a1 1 0 01-.501.867l-5.678 3.27a1 1 0 00.004 1.735l3.132 1.783a1 1 0 00.993-.002l6.685-3.839zM31 7.234a1 1 0 001.514.857l3-1.8A1 1 0 0036 5.434V1.766A1 1 0 0034.486.91l-3 1.8a1 1 0 00-.486.857v3.668z"
              fill="#007FFF"
            ></path>
          </svg>

          <NavBarList>
            {data.map((item) => {
              return (
                <StyledButton key={item.id} className={""}>
                  {item.name}
                </StyledButton>
              );
            })}
          </NavBarList>
        </div>
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: "1rem",
          }}
        >
          <Button
            sx={{
              "&:hover": {
                backgroundColor: "white",
              },
              "&:active": {
                backgroundColor: "white",
              },
              border: "1px solid hsl(215, 15%, 89%)",
              borderRadius: "1rem",
              padding: "0.5rem",
              width: "230px",
              display: "flex",
              justifyContent: "space-between",
              boxShadow:
                "rgb(255, 255, 255) 0px 2px 0px inset, rgba(232, 234, 238, 0.5) 0px -1.5px 0px inset, rgba(223, 226, 231, 0.5) 0px 1px 2px 0px",
            }}
          >
            <Typography
              variant="p"
              sx={{ color: "gray", display: "flex", gap: "0.25rem" }}
            >
              <SearchIcon /> Search...
            </Typography>
            <Typography
              sx={{
                border: "1px solid hsl(215, 15%, 89%)",
                color: "black",
                padding: "0.125rem",
                borderRadius: "0.25rem",
                fontWeight: "bold",
              }}
            >
              Crt+K
            </Typography>
          </Button>
          <Typography
            variant="p"
            sx={{
              color: "gray",
              display: "none",
              gap: "0.25rem",
            }}
            style={style.typography}
          >
            <SearchIcon /> Search...
          </Typography>
          <button
            style={{
              border: "1px solid hsl(215, 15%, 89%)",
              borderRadius: "1rem",
              padding: "0.5rem",
            }}
          >
            <GitHubIcon />
          </button>
          <button
            style={{
              border: "1px solid hsl(215, 15%, 89%)",
              borderRadius: "1rem",
              padding: "0.5rem",
            }}
          >
            <DarkModeIcon />
          </button>
        </div>
      </NavbarContainer>
    </>
  );
};

export default Navbar;
