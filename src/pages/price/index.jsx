import TableDataPrice from "@/components/Table";
import styled from "@emotion/styled";
import { Box, Typography,useTheme } from "@mui/material";
import React from "react";
const TextResponse = styled(Typography)
const Price = () => {
  return (
    <>
      <Box sx={{ textAlign: "center", margin: {
        xs: "0 auto",
        sm: "0 auto",
        md: "3rem",
        lg: "3rem"
      } }}>
        <Typography
          variant="p"
          sx={{
            color: "hsl(210, 100%, 45%)",
            fontWeight: "bold",
            fontSize: {
              xs: "0.5rem",
              sm: "0.75rem",
              md: "1rem",
              lg: "1.25rem"
            },
          }}
        >
          Pricing
        </Typography>
        <Typography
          variant="h3"
          sx={{
            color: 'black',
            fontWeight: 'bold',
            fontSize: {
              xs: 16, // Small screens
              sm: 20, // Medium screens
              md: 24, // Large screens
              lg: 28, // Extra large screens
            },
            '& strong': { // Target the nested strong element
              color: 'hsl(210, 100%, 45%)',
            },
          }}
        >
          Start using MUI's products{" "}
          <strong
            style={{
              color: "hsl(210, 100%, 45%)",
            }}
          >
            for free!
          </strong>
        </Typography>
        <Typography variant="h2"
          sx={{
            fontSize: {
              lg: "1.5rem",
              md: "1.25rem",
              sm: "1rem",
              xs: "0.75rem"
            },
            fontWeight: '300',
            whiteSpace: "wrap",
            width: "30%",
            margin: "1rem auto",
          }}
        >
          Switch to a commercial plan to access advanced features & technical
          support.
        </Typography>
      </Box>
      <hr style={{opacity: 0.3}}/>
      <TableDataPrice/>
    </>
  );
};

export default Price;
