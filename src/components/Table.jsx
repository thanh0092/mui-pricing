"use client";
import {
  Box,
  Paper,
  Table,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Typography,
  Button,
  TableBody,
} from "@mui/material";
const data = [
  {
    name: "Material UI ",
    community: true,
    pro: true,
    pre: true,
  },
  {
    name: "Joy UI ",
    community: true,
    pro: true,
    pre: true,
  },
  {
    name: "Base UI  ",
    community: true,
    pro: true,
    pre: true,
  },
  {
    name: "MUI System",
    community: true,
    pro: true,
    pre: true,
  },
];
export default function TableDataPrice() {
  return (
    <TableContainer
      sx={{ margin: "5rem auto", width: "70%" }}
      component={Paper}
    >
      <Table sx={{ minWidth: 650 }}>
        <TableHead>
          <TableRow sx={{ display: "flex", justifyContent: "space-between" }}>
            <TableCell>
              <Typography sx={{ fontWeight: "bold" }}>Plan</Typography>
            </TableCell>
            <TableCell
              sx={{ width: "25%", height: "400px", position: "relative" }}
            >
              <Box sx={{ textAlign: "center" }}>
                <Typography
                  variant="span"
                  sx={{
                    fontWeight: "bold",
                    marginTop: "1rem",
                    fontSize: "1.25rem",
                  }}
                >
                  Community
                </Typography>
                <Typography sx={{ width: "70%", margin: "0 auto" }}>
                  Get started with the industry-standard React UI library,
                  MIT-licensed.
                </Typography>
                <Typography
                  sx={{
                    margin: "3rem",
                    fontSize: "3rem",
                    fontWeight: "bold",
                    color: "hsl(144, 72%, 41%)",
                  }}
                >
                  $0
                </Typography>
                <Typography
                  sx={{
                    marginBottom: "1rem",
                    width: "70%",
                    margin: "0 auto",
                  }}
                >
                  Free forever!
                </Typography>

                <Button
                  sx={{
                    color: "#629EE5",
                    fontWeight: "bold",
                    border: "1px solid hsl(210, 100%, 45%)",
                    width: "50%",
                    position: "absolute",
                    bottom: 20,
                    left: 100,
                  }}
                >
                  Get start {">"}
                </Button>
              </Box>
            </TableCell>
            <TableCell
              sx={{ width: "25%", height: "400px", position: "relative" }}
            >
              <Box sx={{ textAlign: "center" }}>
                <Typography
                  variant="span"
                  sx={{
                    fontWeight: "bold",
                    marginTop: "1rem",
                    fontSize: "1.25rem",
                  }}
                >
                  Pro
                </Typography>
                <Typography sx={{ width: "70%", margin: "0 auto" }}>
                  Best for professional developers building enterprise or
                  data-rich applications.
                </Typography>
                <Typography
                  sx={{
                    margin: "3rem",
                    fontSize: "3rem",
                    fontWeight: "bold",
                    color: "hsl(210, 100%, 45%)",
                  }}
                >
                  $15{" "}
                  <span
                    style={{
                      color: "gray",
                      fontWeight: "300",
                      fontSize: "1.25rem",
                    }}
                  >
                    / month / dev
                  </span>
                </Typography>
                <Typography
                  sx={{
                    marginBottom: "1rem",
                    width: "70%",
                    margin: "0 auto",
                  }}
                >
                  Billed annually at $180/dev. No additional fee beyond 10 devs.
                </Typography>

                <Button
                  sx={{
                    color: "#629EE5",
                    fontWeight: "bold",
                    border: "1px solid hsl(210, 100%, 45%)",
                    backgroundColor: "hsl(210, 100%, 45%)",
                    color: "white",
                    width: "50%",
                    position: "absolute",
                    bottom: 20,
                    left: 100,
                    "&:hover": {
                      backgroundColor: "hsl(210, 100%, 40%)",
                    },
                  }}
                >
                  Buy now {">"}
                </Button>
              </Box>
            </TableCell>
            <TableCell
              sx={{ width: "25%", height: "400px", position: "relative" }}
            >
              <Box sx={{ textAlign: "center" }}>
                <Typography
                  variant="span"
                  sx={{
                    fontWeight: "bold",
                    marginTop: "1rem",
                    fontSize: "1.25rem",
                  }}
                >
                  Premium
                </Typography>
                <Typography sx={{ width: "70%", margin: "0 auto" }}>
                  The most advanced features for data-rich applications, as well
                  as the highest priority for support.
                </Typography>
                <Typography
                  sx={{
                    margin: "3rem",
                    fontSize: "3rem",
                    fontWeight: "bold",
                    color: "hsl(144, 72%, 41%)",
                  }}
                >
                  $0
                </Typography>
                <Typography
                  sx={{
                    marginBottom: "1rem",
                    width: "70%",
                    margin: "0 auto",
                  }}
                >
                  Billed annually at $444/dev. 🐦 Early bird special (25% off).
                </Typography>

                <Button
                  sx={{
                    color: "#629EE5",
                    fontWeight: "bold",
                    border: "1px solid hsl(210, 100%, 45%)",
                    backgroundColor: "hsl(210, 100%, 45%)",
                    color: "white",
                    width: "50%",
                    position: "absolute",
                    bottom: 20,
                    left: 100,
                    "&:hover": {
                      backgroundColor: "hsl(210, 100%, 40%)",
                    },
                  }}
                >
                  Buy now {">"}
                </Button>
              </Box>
            </TableCell>
          </TableRow>
        </TableHead>

        <TableBody sx={{ "&:last-child td, &:last-child th": { border: 0 } }}>
          {data.map((item) => {
            return (
              <TableRow
                sx={{ display: "flex", justifyContent: "space-between" }}
              >
                <TableCell>{item.name}</TableCell>
                <TableCell>{item.community === true ? 'Yes' : 'No'}</TableCell>
                <TableCell>{}</TableCell>
              </TableRow>
            );
          })}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
