import React, { useEffect, useRef, useState } from "react";
import axios from "axios";
import { useSnackbar } from "notistack";

import { URL_API } from "../../../constants";
import {
  Button,
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

function UnverifyCompany(props) {
  const { setContent } = props;

  const [companies, setCompanies] = useState([]);
  const [check, setCheck] = useState(1);

  const { enqueueSnackbar } = useSnackbar();

  const navigate = useNavigate();

  useEffect(() => {
    const getCompanies = async () => {
      try {
        const res = await axios.get(`${URL_API}/admin/user/companyunauth`);
        if (res.status === 200) {
          setCompanies(res.data.companys);
        } else if (res.status === 204) {
          setCompanies([]);
        }
      } catch (error) {}
    };
    getCompanies();
  }, [check]);

  const handleConfirm = async (id) => {
    try {
      const confirm = window.confirm("Are you sure to confirm this company account?");
      if (confirm == true) {
        const res = await axios.put(`${URL_API}/admin/user/auth`, { userId: id });
        if (res.status === 200) {
          setCheck((prev) => prev + 1);
          enqueueSnackbar("This account has been confirmed!", { variant: "success" });
        }
      }
    } catch (error) {}
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
                    {/* <PreviewIcon sx={{ fontSize: "2.5rem", cursor: "pointer" }} color="secondary" /> */}
                    <Button
                      sx={{ fontSize: "1.4rem", fontWeight: "bold" }}
                      variant="contained"
                      onClick={() => handleConfirm(company._id)}
                    >
                      Confirm
                    </Button>
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

export default UnverifyCompany;
