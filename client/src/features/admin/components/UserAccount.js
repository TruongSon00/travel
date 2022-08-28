import React from "react";
import PropTypes from "prop-types";
import Paper from "@mui/material/Paper";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TablePagination from "@mui/material/TablePagination";
import TableRow from "@mui/material/TableRow";
import Search from "./Search";
import { Box } from "@mui/material";

import RemoveRedEyeOutlinedIcon from "@mui/icons-material/RemoveRedEyeOutlined";
import DeleteForeverOutlinedIcon from "@mui/icons-material/DeleteForeverOutlined";

UserAccount.propTypes = {};

const rows = [
  {
    id: 1,
    userName: "hoàng phan",
    Email: "hoangpb123@gmail.com",
    phoneNumber: "123456789",
  },
  {
    id: 2,
    userName: "Đạt phan",
    Email: "datpb123@gmail.com",
    phoneNumber: "123456789",
  },
  {
    id: 3,
    userName: "hoàng Hà",
    Email: "hoangha123@gmail.com",
    phoneNumber: "123456789",
  },
  {
    id: 1,
    userName: "alo alo",
    Email: "aloalo123@gmail.com",
    phoneNumber: "123456789",
  },
];

const columns = ["ID", "User-name", "Email", "Phone-number"];

function UserAccount(props) {
  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(10);

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };

  return (
    <Box>
      <Search placeholder={"Enter userName..."} />
      <Paper sx={{ width: "90%", overflow: "hidden", margin: "0 auto" }}>
        <TableContainer sx={{ maxHeight: 440 }}>
          <Table stickyHeader aria-label="sticky table">
            <TableHead>
              <TableRow>
                {columns.map((column) => (
                  <TableCell
                    key={column.id}
                    align="center"
                    sx={{ fontWeight: "bold", fontSize: "1.4rem" }}
                  >
                    {column}
                  </TableCell>
                ))}
                <TableCell align="center" sx={{ fontWeight: "bold", fontSize: "1.4rem" }}>
                  Details
                </TableCell>
                <TableCell align="center" sx={{ fontWeight: "bold", fontSize: "1.4rem" }}>
                  Delete
                </TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {rows.map((row) => {
                return (
                  <TableRow key={row.id}>
                    <TableCell align="center" sx={{ fontSize: "1.4rem" }}>
                      {row.id}
                    </TableCell>
                    <TableCell align="center" sx={{ fontSize: "1.4rem" }}>
                      {row.userName}
                    </TableCell>
                    <TableCell align="center" sx={{ fontSize: "1.4rem" }}>
                      {row.Email}
                    </TableCell>
                    <TableCell align="center" sx={{ fontSize: "1.4rem" }}>
                      {row.phoneNumber}
                    </TableCell>
                    <TableCell align="center">
                      <RemoveRedEyeOutlinedIcon
                        sx={{ fontSize: "2.5rem", cursor: "pointer" }}
                        color="secondary"
                      />
                    </TableCell>
                    <TableCell align="center">
                      <DeleteForeverOutlinedIcon
                        sx={{ fontSize: "2.5rem", cursor: "pointer" }}
                        color="error"
                      />
                    </TableCell>
                  </TableRow>
                );
              })}
            </TableBody>
          </Table>
        </TableContainer>
        <TablePagination
          rowsPerPageOptions={[10, 25, 100]}
          component="div"
          // count={rows.length}
          // rowsPerPage={rowsPerPage}
          // page={page}
          onPageChange={handleChangePage}
          onRowsPerPageChange={handleChangeRowsPerPage}
        />
      </Paper>
    </Box>
  );
}

export default UserAccount;
