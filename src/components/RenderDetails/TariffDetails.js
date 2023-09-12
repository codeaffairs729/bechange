import React from "react";
import { Box, Button, Divider, Typography } from "@mui/material";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";

function createData(name, calories, fat, carbs, protein) {
  return { name, calories, fat, carbs, protein };
}
const TariffDetails = () => {
  const rows = [
    createData("Arbeitpris", 159, 6.0),
    createData("Arbeitpris", 237, 9.0),
    createData("Arbeitpris", 262, 16.0),
    createData("Arbeitpris", 305, 3.7),
    createData("Arbeitpris", 356, 16.0),
  ];

  return (
    <Box>
      <Typography id="modal-modal-title" variant="h6" component="h2">
        Wirklich Okostrom
      </Typography>
      <Typography id="modal-modal-description" sx={{ mt: 2 }}>
        Duis mollis, est non commodo luctus, nisi erat porttitor ligula.Duis
        mollis, est non commodo luctus, nisi erat porttitor ligula.Duis mollis,
        est non commodo luctus, nisi erat porttitor ligula.
      </Typography>
      <Box my={4}>
        <TableContainer component={Paper}>
          <Table sx={{ minWidth: 650 }} aria-label="simple table">
            <TableHead>
              <TableRow>
                <TableCell></TableCell>
                <TableCell align="right">Wirklich Okostorm</TableCell>
                <TableCell align="right">EON Grundversorgung Strom</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {rows.map((row) => (
                <TableRow key={row.name}>
                  <TableCell align="right">{row.calories}</TableCell>
                  <TableCell align="right">{row.fat}</TableCell>
                  <TableCell align="right">{row.fat}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </Box>
      <Typography variant="p" fontSize="12px">
        Duis mollis, est non commodo luctus, nisi erat porttitor ligula.Duis
        mollis, est non commodo luctus, nisi erat porttitor ligula.Duis mollis,
        est non commodo luctus, nisi erat porttitor ligula.
      </Typography>
      <Divider sx={{ my: 2 }} />
      <Box display="flex" alignItems="center" justifyContent="end" gap={2}>
        <Typography variant="h6">
          <span style={{ color: "#2c9b42", fontWeight: 600 }}>
            195,68 &#8364;
          </span>{" "}
          Ersparnis |
          <span style={{ color: "#33eaff", fontWeight: 600 }}>
            120 &#8364;/Monat
          </span>
          (1.435 &#8364;/Monat)
        </Typography>
        <Button variant="contained" color="primary" size="large">
          Wechseln
        </Button>
      </Box>
    </Box>
  );
};

export default TariffDetails;
