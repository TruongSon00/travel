import React, { useEffect, useState } from "react";
import axios from "axios";

import { URL_API } from "../../../constants";
import {
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TablePagination,
  TableRow,
} from "@mui/material";
import PreviewIcon from "@mui/icons-material/Preview";
import { useNavigate } from "react-router-dom";
import queryString from "query-string";

axios.defaults.withCredentials = true;

function VerifyCompany(props) {
  const { setContent } = props;
  const [companies, setCompanies] = useState([]);

  const navigate = useNavigate();

  useEffect(() => {
    const getCompanies = async () => {
      try {
        const res = await axios.get(`${URL_API}/admin/user/companyauth`);
        if (res.status === 200) {
          setCompanies(res.data.companys);
        }
      } catch (error) {}
    };
    getCompanies();
  }, []);

  const handleViewDetail = (id) => {
    setContent("company-info");
    navigate({
      search: queryString.stringify({
        _id: id,
      }),
    });
  };

  return (
    <Paper sx={{ width: "90%", overflow: "hidden", margin: "0 auto" }}>
      <TableContainer sx={{ maxHeight: 440 }}>
        <Table stickyHeader aria-label="sticky table">
          <TableHead>
            <TableRow>
              <TableCell align="center" sx={{ fontWeight: "bold", fontSize: "1.4rem" }}>
                NO
              </TableCell>
              <TableCell align="center" sx={{ fontWeight: "bold", fontSize: "1.4rem" }}>
                User name
              </TableCell>
              <TableCell align="center" sx={{ fontWeight: "bold", fontSize: "1.4rem" }}>
                Email
              </TableCell>
              <TableCell align="center" sx={{ fontWeight: "bold", fontSize: "1.4rem" }}>
                Phone Number
              </TableCell>
              <TableCell></TableCell>
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
                    <PreviewIcon sx={{ fontSize: "2.5rem", cursor: "pointer" }} color="secondary" />
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
        // onPageChange={handleChangePage}
        // onRowsPerPageChange={handleChangeRowsPerPage}
      />
    </Paper>
  );
}

export default VerifyCompany;
