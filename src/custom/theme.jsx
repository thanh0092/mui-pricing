import { Box, Container, styled } from "@mui/material";

export const NavbarContainer = styled(Box)(({ theme }) => ({
  width: "50%",
  margin: "0 auto",
  marginBottom: "1.25rem",
  backgroundColor: "white",
  display: "flex",
  justifyContent: "space-between",
  transform: "translateY(15%)",
  gap: "1rem",

  [theme.breakpoints.down("sm")]: {
    backgroundColor: "red",
  },
}));
export const ContainerCustom = styled(Container)(() => ({
  backgroundColor: "white",
  minWidth: "100%",
}));

export const NavBarList = styled("div")(({ theme }) => ({
  [theme.breakpoints.down("md")]: {
    display: 'none',
  },
  [theme.breakpoints.down("lg")]: {
    display: 'none',
  },
  [theme.breakpoints.down("xl")]: {
    display: 'none',
  },
}));
