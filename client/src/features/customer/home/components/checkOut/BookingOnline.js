import React from "react";
import PropTypes from "prop-types";
import { Box, Button, Typography } from "@mui/material";

Booking.propTypes = {};

function Booking(props) {
  return (
    <Box>
      <Typography variant="h1" sx={{ textAlign: "center", mt: 2 }}>
        Summary
      </Typography>
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          width: "50%",
          margin: "0 auto",
          mt: 3,
          fontSize: "1.6rem",
          pb: 3,
          borderBottom: "1px solid #999",
        }}
      >
        <Box sx={{ textAlign: "left" }}>
          <Box>Original price:</Box>
          <Box sx={{ mt: 2 }}>Discounts:</Box>
        </Box>
        <Box sx={{ textAlign: "right" }}>
          <Box>$84.99</Box>
          <Box sx={{ mt: 2 }}>-$68.00</Box>
        </Box>
      </Box>
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          width: "50%",
          margin: "0 auto",
          mt: 3,
          fontSize: "1.6rem",
          fontWeight: "bold",
        }}
      >
        <Box>Total:</Box>
        <Box>$16.99</Box>
      </Box>
      <Box sx={{ width: "50%", margin: "2rem auto" }}>
        <Button
          variant="contained"
          fullWidth
          sx={{ fontSize: "1.6rem", fontWeight: "bold", padding: "2rem" }}
        >
          Complete Checkout
        </Button>
      </Box>
      <Box sx={{ fontSize: "1.8rem", fontWeight: "bold", mt: 5, mb: 2 }}>
        Lưu ý khi thanh toán Paypal:
      </Box>
      <Box sx={{ fontSize: "1.4rem", lineHeight: "2.5rem", textAlign: "justify" }}>
        <ul style={{ listStyleType: "decimal" }}>
          <li>
            Nên verify (xác minh) tài khoản Paypal, việc verify Paypal bằng thẻ Visa sẽ giúp tài
            khoản Paypal của bạn có thể hoạt động ổn định, không bị giới hạn khi thanh toán,Và việc
            này cũng để cho bạn dễ dàng thanh toán online bằng Paypal. (nên dùng thẻ ACB hoặc VCB vì
            tính ổn định của nó, có nghĩa là rất ít khi xảy ra lỗi khi thanh toán)
          </li>
          <li>
            Sau khi nhận tiền từ tài khoản khác. Không chuyển tiền (send money) hoặc rút tiền
            (withdraw money) ngay . Chờ tối thiểu 30 phút sau đó chuyển tiền. Chờ tối thiểu 1 ngày
            sau đó withdraw. (Chỉ mang tính chất cẩn thận hơn khi sử dụng). Với số lượng tiền lớn,
            khuyến khích rút về ngân hàng
          </li>
          <li>
            Không nên lạm dụng giao dịch gửi tiền và nhận tiền kiểu personal, friend, gửi cho nhau
            không mất phí. Thường xuyên gửi $ ko mất fee, sẽ bị Paypal coi là lạm dụng và bị quy vào
            lỗi “trốn thuế Paypal” khả năng dẫn đến bị limit cao, Paypal có những đợt truy quét rà
            soát, acc nào bị dính limit 180 ngày thì ko thể gỡ !!!
          </li>
        </ul>
      </Box>
    </Box>
  );
}

export default Booking;
