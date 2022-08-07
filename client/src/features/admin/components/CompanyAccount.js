import React, { useEffect, useState } from "react";
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
import { useNavigate } from "react-router-dom";
import axios from "axios";
import queryString from "query-string";
import { URL_API } from "../../../constants";

axios.defaults.withCredentials = true;

CompanyAccount.propTypes = {};

const columns = ["NO", "Company's name", "Email", "Phone-number"];

function CompanyAccount(props) {
  const { setContent } = props;

  const navigate = useNavigate();

  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(10);
  const [companies, setCompanies] = useState([]);

  useEffect(() => {
    const getCompanies = async () => {
      try {
        const res = await axios.get(`${URL_API}/admin/user/companyauth`);
        if (res.status === 200) {
          setCompanies(res.data.companys);
        }
      } catch (error) {
        console.log(error);
      }
    };
    getCompanies();
  }, []);

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };

  const handleViewDetail = (id) => {
    setContent("company-info");
    navigate({
      search: queryString.stringify({
        _id: id,
      }),
    });
  };

  return (
    <Box>
      <Search placeholder={"Enter company's name..."} />
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
              {companies.map((company, index) => {
                return (
                  <TableRow key={company._id}>
                    <TableCell align="center" sx={{ fontSize: "1.4rem" }}>
                      {index + 1}
                    </TableCell>
                    <TableCell
                      align="center"
                      sx={{ fontSize: "1.4rem", cursor: "pointer" }}
                      onClick={() => handleViewDetail(company._id)}
                    >
                      {company.username}
                    </TableCell>
                    <TableCell align="center" sx={{ fontSize: "1.4rem" }}>
                      {company.email}
                    </TableCell>
                    <TableCell align="center" sx={{ fontSize: "1.4rem" }}>
                      {company.phoneNumber}
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

export default CompanyAccount;
