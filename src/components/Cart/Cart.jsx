import React, { useContext, useEffect } from "react";
import { styled } from "@mui/material/styles";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell, { tableCellClasses } from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import Paper from "@mui/material/Paper";
import { Button, IconButton, TableRow, Typography } from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";
import { newsContext } from "../../Context/ContextMy";
import { Link } from "react-router-dom";

const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: theme.palette.common.black,
    color: theme.palette.common.white,
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 14,
  },
}));
const StyledTableRow = styled(TableRow)(({ theme }) => ({
  "&:nth-of-type(odd)": {
    backgroundColor: theme.palette.action.hover,
  },
  "&:last-child td, &:last-child th": {
    border: 0,
  },
}));

export default function Cart() {
  const { cart, getCart, changeNewsCount, deleteFromCart } =
    useContext(newsContext);

  useEffect(() => {
    getCart();
  }, []);

  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 700 }} aria-label="customized table">
        <TableHead>
          <TableRow>
            <StyledTableCell align="center">Image</StyledTableCell>
            <StyledTableCell align="center">Title</StyledTableCell>
            <StyledTableCell align="center">Price</StyledTableCell>
            <StyledTableCell align="center">Count</StyledTableCell>
            <StyledTableCell align="center">SubPrice</StyledTableCell>
            <StyledTableCell align="center">Delete</StyledTableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {cart.news ? (
            <>
              {cart.news.map((elem) => (
                <StyledTableRow key={elem.item.id}>
                  <StyledTableCell component="th" scope="row">
                    <img
                      width="200px"
                      src={elem.item.photo}
                      alt={elem.item.news}
                    />
                  </StyledTableCell>
                  <StyledTableCell align="center">
                    {elem.item.header}
                  </StyledTableCell>
                  <StyledTableCell height="120" align="center">
                    {elem.item.describetion}
                  </StyledTableCell>
                  <StyledTableCell align="center">
                    <input
                      type="number"
                      value={elem.count}
                      onChange={(e) =>
                        changeNewsCount(e.target.value, elem.item.id)
                      }
                      min="1"
                    />
                  </StyledTableCell>
                  <StyledTableCell align="center">
                    {elem.subPrice}
                  </StyledTableCell>
                  <StyledTableCell align="center">
                    <IconButton
                      aria-label="delete"
                      onClick={(e) =>
                        deleteFromCart(elem.item.id, elem.item.price)
                      }
                    >
                      <DeleteIcon />
                    </IconButton>
                  </StyledTableCell>
                </StyledTableRow>
              ))}
            </>
          ) : (
            <TableRow>
              <TableCell>
                <h1>Loading...</h1>
              </TableCell>
            </TableRow>
          )}

          <TableRow>
            <TableCell rowSpan={3} />
            <TableCell colSpan={2}>
              <Typography variant="h5">Total:</Typography>
            </TableCell>
          </TableRow>
          <TableRow>
            <TableCell colSpan={3} align="right">
              <Link to="/credit">
                <Button variant="contained" color="primary">
                  BUY
                </Button>
              </Link>
            </TableCell>
          </TableRow>
        </TableBody>
      </Table>
    </TableContainer>
  );
}
