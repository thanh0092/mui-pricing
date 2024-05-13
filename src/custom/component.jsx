import { alpha, styled } from "@mui/material/styles";
import { Button, TextField, Typography } from "@mui/material";

export const StyledButton = styled(Button)(() => ({
  height: "2rem",
  margin: "0.25rem 0",
  padding: "1.25rem 1rem",
  ":hover": {
    color: "rgb(26,30,35)",
    backgroundColor: "rgb(246,246,249)",
    opacity: "0.5",
    fontWeight: "bolder",
    outlineColor: "white",
  },
  borderColor: "#CCBFC7",
  color: "black",
  borderRadius: "1rem",

  fontWeight: "600",
}));

export const StyledText = styled(Typography)(({ theme }) => ({
  color: theme.palette.success.main,
  ":hover": {
    color: "white",
  },
}));
export const TextFieldCustom = styled(TextField)(({ theme }) => ({
  backgroundColor: "#F6F6F9",
  borderRadius: "1.25rem",
  "& .MuiInput-underline:after": {
    borderBottomColor: "#B2BAC2",
  },
  "& .MuiOutlinedInput-root": {
    "& fieldset": {
      border: "0",
    },
    "&:hover fieldset": {
      borderColor: "#B2BAC2",
    },
    "&.Mui-focused fieldset": {
      borderColor: "#6F7E8C",
    },
  },
  backgroundColor: "gray",
}));
export const ButtonOrigin = styled(Button)(() => ({
  MuiButtonBase: {
    disableRipple: true,
  },
}));
