import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";
import Header from "../../../components/headerCompany";
import {
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
import Footer from "../../../components/footer";
import { URL_API } from "../../../constants";
import axios from "axios";
import { useSnackbar } from "notistack";

axios.defaults.withCredentials = true;

HistoryPage.propTypes = {};

function HistoryPage(props) {
  const [orders, setOrders] = useState([]);
  const [count, setCount] = useState(1);

  const { enqueueSnackbar } = useSnackbar();

  useEffect(() => {
    const getOrders = async () => {
      try {
        const res = await axios.get(`${URL_API}/company/booking/show`);
        if (res.status === 200) {
          setOrders(res.data.bookings);
        }
      } catch (error) {
        console.log(error);
      }
    };
    getOrders();
  }, [count]);

  const handleConfirm = async (id) => {
    try {
      const check = window.confirm("Would you like to receive this tour?");
      if (check === true) {
        const res = await axios.put(`${URL_API}/company/booking/auth/${id}`);
        if (res.status === 200) {
          setCount((prev) => prev + 1);
          enqueueSnackbar("You have accepted this tour!", { variant: "success" });
        }
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div>
      <Header />

      <Container maxWidth="xl" sx={{ pt: 13, pb: 5 }}>
        <Paper>
          <TableContainer sx={{ maxHeight: 500 }}>
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
                    khách hàng
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
                  <TableCell></TableCell>
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
                        {order.user[0].username}
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
                      <TableCell align="center">
                        {order.auth == 0 ? (
                          <Button
                            variant="contained"
                            sx={{ fontSize: "1.2rem", fontWeight: "bold" }}
                            onClick={() => handleConfirm(order._id)}
                          >
                            confirm
                          </Button>
                        ) : (
                          ""
                        )}
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
      </Container>

      <Footer />
    </div>
  );
}

export default HistoryPage;
