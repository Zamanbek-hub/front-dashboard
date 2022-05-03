import * as React from 'react';
import { styled } from '@mui/material/styles';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import Header from "../header/Header";

const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: theme.palette.common.black,
    color: theme.palette.common.white,
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 14,
  },
}));

function createData(name, calories, fat, carbs, page) {
  return { name, calories, fat, carbs, page };
}

const rows = [
  createData('Frozen yoghurt', 159, 6.0, 24, "google.com"),
  createData('Ice cream sandwich', 237, 9.0, 37, "google.com"),
  createData('Eclair', 262, 16.0, 24, "google.com"),
  createData('Cupcake', 305, 3.7, 67, "google.com"),
  createData('Gingerbread', 356, 16.0, 49, "google.com"),
];

export default function Main() {
  return (
      <div className="container-fluid">
        <Header />
        <div className="container">
          <TableContainer component={Paper} sx={{ width: '100%' }}>
          <Table>
            <TableHead>
              <TableRow>
                <StyledTableCell>Robot</StyledTableCell>
                <StyledTableCell align="right">Location</StyledTableCell>
                <StyledTableCell align="right">Status</StyledTableCell>
                <StyledTableCell align="right">More Details</StyledTableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {rows.map((row) => (
                <TableRow key={row.name}>
                  <TableCell component="th" scope="row">{row.name}</TableCell>
                  <TableCell align="right">{row.calories}</TableCell>
                  <TableCell align="right">{row.fat}</TableCell>
                  <TableCell component="a" href='google.com'>Profile</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
        </div>
      </div>
  );
}
