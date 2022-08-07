import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";
import Header from "../../../../components/header";
import Footer from "../../../../components/footer";
import {
  Box,
  Button,
  Container,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TablePagination,
  TableRow,
} from "@mui/material";

import { URL_API } from "../../../../constants";
import axios from "axios";
import { blue, orange } from "@mui/material/colors";

Transaction.propTypes = {};

function Transaction(props) {
  const [orders, setOrders] = useState([]);
  const [count, setCount] = useState(1);
  useEffect(() => {
    const getOrders = async () => {
      try {
        const res = await axios.get(`${URL_API}/booking/show`);
        if (res.status === 200) {
          setOrders(res.data.bookings);
        }
      } catch (error) {
        console.log(error);
      }
    };
    getOrders();
  }, [count]);

  return (
    <div>
      <Header />

      {/* <Container sx={{ pt: 13, pb: 5 }}> */}
      <Paper sx={{ pt: 10, pb: 5, px: 10 }}>
        <TableContainer sx={{ maxHeight: 440 }}>
          <Table stickyHeader aria-label="sticky table">
            <TableHead>
              <TableRow>
                <TableCell align="center" sx={{ fontWeight: "bold", fontSize: "1.4rem" }}>
                  NO
                </TableCell>
                <TableCell align="center" sx={{ fontWeight: "bold", fontSize: "1.4rem" }}>
                  Tour
                </TableCell>
                <TableCell align="center" sx={{ fontWeight: "bold", fontSize: "1.4rem" }}>
                  Ngày đặt
                </TableCell>
                <TableCell align="center" sx={{ fontWeight: "bold", fontSize: "1.4rem" }}>
                  Ngày khởi hành
                </TableCell>
                <TableCell align="center" sx={{ fontWeight: "bold", fontSize: "1.4rem" }}>
                  Ngày kết thúc (dự kiến)
                </TableCell>
                <TableCell align="center" sx={{ fontWeight: "bold", fontSize: "1.4rem" }}>
                  Số hành khách
                </TableCell>
                <TableCell align="center" sx={{ fontWeight: "bold", fontSize: "1.4rem" }}>
                  Tổng tiền
                </TableCell>
                <TableCell align="center" sx={{ fontWeight: "bold", fontSize: "1.4rem" }}>
                  Auth
                </TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {orders.map((order, index) => {
                const createDay = order.createdAt.slice(0, 10);
                const day = createDay.slice(8);
                const month = createDay.slice(5, 7);
                const year = createDay.slice(0, 4);
                return (
                  <TableRow key={order._id}>
                    <TableCell align="center" sx={{ fontSize: "1.4rem" }}>
                      {index + 1}
                    </TableCell>
                    <TableCell align="center" sx={{ fontSize: "1.4rem" }}>
                      {order.tour[0].title}
                    </TableCell>
                    <TableCell align="center" sx={{ fontSize: "1.4rem" }}>
                      {`${day}-${month}-${year}`}
                    </TableCell>
                    <TableCell align="center" sx={{ fontSize: "1.4rem" }}>
                      {order.timeStart}
                    </TableCell>
                    <TableCell align="center" sx={{ fontSize: "1.4rem" }}>
                      {order.timeOut}
                    </TableCell>
                    <TableCell align="center" sx={{ fontSize: "1.4rem" }}>
                      {order.numberTicket}
                    </TableCell>
                    <TableCell align="center" sx={{ fontSize: "1.4rem" }}>
                      {order.total.toFixed(0)}
                    </TableCell>
                    <TableCell align="center" sx={{ fontSize: "1.4rem" }}>
                      {order.auth == 0 ?
                        <Box sx={{ padding: '4px 0', background: '#fff600', borderRadius: '14px' }}>Chờ xác nhận</Box> :
                        <Box sx={{ padding: '4px 0', background: '#6ee04d', borderRadius: '14px' }}>Đã xác nhận</Box>
                      }
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
      {/* </Container> */}

      <Footer />
    </div>
  );
}

export default Transaction;
