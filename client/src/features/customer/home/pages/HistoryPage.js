import React from "react";
import PropTypes from "prop-types";
import { Box, Container } from "@mui/material";
import Header from "../../../../components/header";
import Footer from "../../../../components/footer";
import BackToTop from "../../../../components/BackToTop";

History.propTypes = {};

function History(props) {
  return (
    <Box>
      <Header />

      <Container sx={{ pt: 10, fontSize: "1.4rem", textAlign: "justify", mb: 3 }}>
        <Box
          sx={{
            fontSize: "2.5rem",
            fontWeight: "bold",
            mb: 3,
            mt: 2,
            textAlign: "center",
            color: "#fc1d00",
          }}
        >
          Tóm tắt lịch sử Việt Nam
        </Box>
        <Box sx={{ fontWeight: "bold", fontSize: "1.6rem" }}>
          - Thời đại tiền sử {">"} Thời kỳ đồ đá cũ {">"} Thời kỳ đồ đá mới {">"} Thời kỳ đồ đồng{" "}
          {">"} Thời kỳ đồ sắt
        </Box>
        <Box sx={{ fontSize: "1.6rem", fontWeight: "bold", mt: 1 }}>
          - Sự hình thành Nước Văn Lang và Nước Âu Lạc
        </Box>
        <Box>
          <ul style={{ listStyleType: "none" }}>
            <li>+ Các Vua Hùng Vương đã thay nhau trị vì nước Vãn Lang</li>
            <li>
              + Đến thế kỷ thứ 3 trước công nguyên, An Dương Vương lập nên nước âu Lạc và vết tích
              Thành Cổ Loa vẫn còn tồn tại đến ngày nay.
            </li>
          </ul>
        </Box>
        <Box sx={{ fontSize: "1.6rem", fontWeight: "bold", mt: 1 }}>
          - Giai đoạn Bắc thuộc: Từ năm 207 trước công nguyên đến Thế kỷ thứ 10 sau công nguyên:
        </Box>
        <Box sx={{ width: "60%", margin: "0 auto", mt: 1 }}>
          <img
            src="http://lichsucogihay.com/wp-content/uploads/2018/07/giao-chi-duoi-thoi-bac-thuoc-tuy-duong-2.jpg"
            alt=""
            style={{ width: "100%", height: "100%", objectFit: "cover" }}
          />
        </Box>
        <Box sx={{ lineHeight: "2rem", mt: 1 }}>
          Vào nãm 207 trước công nguyên, nước Âu Lạc bị xâm chiếm bởi Triệu Đà là Vua nước Nam Việt
          bên. Sau đó vào nãm 111 trước công nguyên, Nước Âu Lạc bị nhà Hán đô hộ. Âu Lạc bị phân
          chia thành hai Quận: Giao Chỉ và Cửu Chân. Việt Nam tiếp tục bị Trung Hoa đô hộ trong suốt
          11 thế kỷ. Trong giai đoạn nầy nhiều anh hùng dân tộc đã dấy binh khởi nghĩa đấu tranh
          giành độc lập như :
        </Box>
        <Box>
          <ul style={{ listStyleType: "none" }}>
            <li>➞ Khởi nghĩa Hai Bà Trưng của hai chi em Trưng Trắc Trưng Nhị năm 40 - 43</li>
            <li>➞ Khởi nghĩa Bà Triệu của bà Triệu Thị Trinh năm 248</li>
            <li>
              <Box component="span">
                ➞ Khởi nghĩa của Lý Nam Đế hay còn gọi Lý Bôn hay lý Bí năm 542 - 602 lấy{" "}
              </Box>
              <Box component="span" sx={{ fontWeight: "bold" }}>
                tên nước là Vạn Xuân kinh đô tại Long Biên (Long Biên Hà Nội ngày nay)
              </Box>
            </li>
            <li>➞ Khởi nghĩa Mai Thúc Loan còn gọi Mai Hắc Đế năm 722</li>
            <li>➞ Khởi nghĩa Phùng Hưng năm 766 - 791</li>
          </ul>
        </Box>
        <Box sx={{ mt: 2 }}>
          Và Ngô Quyền với trận đại thắng vang dội quân Nam Hán trên Sông Bạch đằng Năm 938, đã chấm
          dứt 1000 nãm đô hộ và giành lại chủ quyền cho Việt Nam.
        </Box>
        <Box sx={{ mt: 2, lineHeight: "2rem" }}>
          Ngô - Ngô Quyền {">"} Đinh - Đinh Tiên Hoàng {">"} Tiền Lê - Lê Hoàn {">"} Lý - Lý Công
          Uẩn {">"} Trần - Trần Thái Tông {">"} Nhà Hồ - Hồ Quí Ly {">"} Hậu Trần - Trần Trùng Quang{" "}
          {">"} Lê Sơ (Lê lợi) {">"} Nhà Mạc - Mạc Thái Tổ {">"} Lê Trung Hưng - Lê Chiêu Thống{" "}
          {">"} Triều đại Tây Sơn - Nguyễn Huệ {">"} Nhà Nguyễn từ Nguyễn Ánh đến Bảo Đại 1945.
          Trịnh Nguyễn phân tranh từ giữa thời Lê Sơ khéo dai gần 200 năm đến hết Lê Trung Hưng. Nhà
          nguyễn tồn tại đến 1945 với Bảo Đại là vị vua cuối cùng.
        </Box>
        <Box>Lịch sử các Triều đại phong kiến Việt Nam:</Box>
        <Box>
          Trang sử mới của lịch sử Việt Nam được mở ra vào đầu thế kỷ thứ 10 khi mà các triều đại
          Ngô, đinh, Tiền Lê đã vững chắc, đoàn kết và có đủ sức mạnh để bảo vệ nền độc lập tự chủ
          của đất nước
        </Box>

        <Box>
          <Box sx={{ fontSize: "1.6rem", fontWeight: "bold", mt: 2 }}>
            <Box component="span">Triều đại Ngô: ( 939 - 965 ) 26 năm với 5 vị Vua tên nước </Box>
            <Box component="span" sx={{ color: "#fc1d00" }}>
              Vạn Xuân kinh độ tại Cổ Loa
            </Box>
          </Box>
          <Box sx={{ width: "60%", margin: "0 auto", mt: 1 }}>
            <img
              src="https://i.ytimg.com/vi/ZUK28Ps-jFo/maxresdefault.jpg"
              alt=""
              style={{ width: "100%", height: "100%", objectFit: "cover" }}
            />
          </Box>
          <Box sx={{ ml: 2 }}>
            <ul style={{ listStyleType: "decimal" }}>
              <li>Tiền Ngô Vương - Ngô Quyền ( 939-944)</li>
              <li>Dương Bình Vương - Dương Tam Kha (Là em vợ là cướp ngôi) (944-950)</li>
              <li>Nam Tấn Vương - Ngô Xương Căn (con thứ hai của Ngô Quyền) (950-965)</li>
              <li>Thiên Sách Vương - Ngô Xương Ngập (Cháu Ngô Quyền) 951-959)</li>
              <li>Ngô Sứ Quân - Ngô Xương Xí (965)</li>
            </ul>
          </Box>
          <Box sx={{ mt: 2, lineHeight: "2rem" }}>
            Kể từ khi Dương Tam Kha cướp ngôi nhà Ngô năm 944, các nơi không chịu thuần phục, các
            thủ lĩnh nổi lên cát cứ một vùng và đem quân đánh chiếm lẫn nhau. Loạn 12 sứ quân kéo
            dài hơn 20 năm (944-968) và kết thúc khi Đinh Bộ Lĩnh thống nhất đất nước, lập ra nhà
            nước Đại Cồ Việt - nhà nước phong kiến tập quyền đầu tiên trong lịch sử.
          </Box>
        </Box>
        <Box>
          <Box sx={{ fontSize: "1.6rem", fontWeight: "bold", mt: 2 }}>
            <Box component="span">
              Triều Đinh: ( 968 - 980) 12 năm với 2 đời vua có tên Quốc hiệu là{" "}
            </Box>
            <Box component="span" sx={{ color: "#fc1d00" }}>
              Đại Cồ Việt kinh đô tại Hoa Lư
            </Box>
          </Box>
          <Box sx={{ width: "60%", margin: "0 auto", mt: 1 }}>
            <img
              src="https://i.ytimg.com/vi/cA1rus2u1fQ/maxresdefault.jpg"
              alt=""
              style={{ width: "100%", height: "100%", objectFit: "cover" }}
            />
          </Box>
          <Box sx={{ ml: 2 }}>
            <ul style={{ listStyleType: "decimal" }}>
              <li>Đinh Tiên Hoàng - Đinh Bộ Lĩnh (968-979)</li>
              <li>Đinh Phế Đế - Đinh Toàn (979-980)</li>
            </ul>
          </Box>
          <Box sx={{ mt: 2, lineHeight: "2rem" }}>
            Đinh Toàn mới lên 6 tuổi, được triều thần đưa lên ngôi vua. Nhân cơ hội đó nhà Tống cho
            quân sang xâm lược nước ta. Vì lợi ích của dân tộc, Thái hậu Dương Vân Nga (vợ của Đinh
            Tiên Hoàng, mẹ đẻ của Đinh Toàn), thể theo nguyện vọng các tướng sĩ, đã trao áo "Long
            Cổn" (biểu tượng của ngôi vua) cho Thập đạo Tướng quân Lê Hoàn, tức là Lê Đại Hành.
          </Box>
        </Box>
        <Box>
          <Box sx={{ fontSize: "1.6rem", fontWeight: "bold", mt: 2 }}>
            <Box component="span">Tiền Lê: (980 - 1009) 29 năm với 3 đời Vua Quốc hiệu là </Box>
            <Box component="span" sx={{ color: "#fc1d00" }}>
              Đại Cồ Việt kinh đô tại Hoa Lư
            </Box>
          </Box>
          <Box sx={{ ml: 2 }}>
            <ul style={{ listStyleType: "decimal" }}>
              <li>Lê Đại Hành - Lê Hoàn (980-1005)</li>
              <li>Lê Trung Tông - Lê Long Việt (1005)</li>
              <li>Lê Ngoạ Triều - Lê Long Đĩnh (1005 - 1009)</li>
            </ul>
          </Box>
          <Box sx={{ mt: 2, lineHeight: "2rem" }}>
            Lê Long Đĩnh đã làm việc càn dỡ giết Vua cướp ngôi, thích dâm đãng, tàn bạo, róc mía
            trên đầu nhà sư... Do chơi bời trác táng quá Lê Ngoạ Triều làm vua được 4 năm (1005 -
            1009) thì mất, thọ 24 tuổi. Long Đĩnh mất, con tên là Sạ còn bé, dưới sự đạo diễn của
            quan Chi Hậu Đào Cam Mộc, triều thần đã tôn Lý Công Uẩn lên ngôi Hoàng đế.
          </Box>
        </Box>
        <Box>
          <Box sx={{ fontSize: "1.6rem", fontWeight: "bold", mt: 2 }}>
            Thời Lý: (1009 – 1225 ) 9 đời Vua trong 216 năm
          </Box>
          <Box sx={{ width: "60%", margin: "0 auto", mt: 1 }}>
            <img
              src="https://i.ytimg.com/vi/rop6suLHfjc/mqdefault.jpg"
              alt=""
              style={{ width: "100%", height: "100%", objectFit: "cover" }}
            />
          </Box>
          <Box sx={{ ml: 2 }}>
            <ul style={{ listStyleType: "decimal" }}>
              <li>Lý Thái Tổ - Lý Công Uẩn (1010 – 1028) năm 1010 dời đô về Thăng Long</li>
              <li>
                <Box component="span">
                  Lý Thái Tông - Lý Phật Mã (1028 – 1054) năm 1054 đổi tên{" "}
                </Box>
                <Box component="span" sx={{ color: "#fc1d00", fontWeight: "bold" }}>
                  Quốc hiệu là Đại Việt kinh đô tại Thăng Long
                </Box>
              </li>
              <li>Lý Thánh Tông - Lý Nhật Tôn (1054 – 1072)</li>
              <li>
                Lý Nhân Tông - Lý Càn Đức (1072 – 1128) - Quốc tử giám đầu tiên được lập vào năm
                1076 tại Kinh thành Thăng Long
              </li>
              <li>Lý Thần Tông - Lý Dương Hoán (1128 - 1138)</li>
              <li>Lý Anh Tông - Lý Thiên Tộ (1138 - 1175)</li>
              <li>Lý Cao Tông - Lý Long Trát (1176 - 1210)</li>
              <li>Lý Huệ Tông - Lý Sảm (1211 - 1224)</li>
              <li>Lý Chiêu Hoàng - Lý Phật Kim (1224 - 1225)</li>
            </ul>
          </Box>
          <Box sx={{ mt: 2, lineHeight: "2rem" }}>
            Dưới sự đạo diễn của Trần Thủ Độ, Lý Huệ Tông bị ép đi tu, nhường ngôi vua cho con gái
            là công chúa Chiêu Thánh (lúc đó mới 7 tuổi) niên hiệu là Lý Chiêu Hoàng. Cũng dưới sự
            đạo diễn của Trần Thủ Độ, Trần Cảnh (8 tuổi) là con ông Trần Thừa được đưa vào hầu cận
            Lý Chiêu Hoàng và Trần Thủ Độ tung tin là Lý Chiêu Hoàng đã lấy chồng là Trần Cảnh.
          </Box>
          <Box sx={{ mt: 1, lineHeight: "2rem" }}>
            Ngày 21 tháng 10 năm Ất Dậu (1225), Lý Chiêu Hoàng mở hội lớn ở điện Thiên An, trước bá
            quan văn võ, Chiêu Hoàng cởi hoàng bào mời Trần Cảnh lên ngôi Hoàng đế đổi niên hiệu là
            Kiến Trung năm thứ nhất, dựng lên triều đại nhà Trần từ đấy.
          </Box>
        </Box>
        <Box>
          <Box sx={{ fontSize: "1.6rem", fontWeight: "bold", mt: 2 }}>
            Đời Trần: (1226 – 1400 ) 175 năm với 12 đời Vua
          </Box>
          <Box sx={{ width: "60%", margin: "0 auto", mt: 1 }}>
            <img
              src="https://i.ytimg.com/vi/jxJQqPkIe-4/maxresdefault.jpg"
              alt=""
              style={{ width: "100%", height: "100%", objectFit: "cover" }}
            />
          </Box>
          <Box sx={{ ml: 2 }}>
            <ul style={{ listStyleType: "decimal" }}>
              <li>Trần Thái Tông (Trần Cảnh, 1225 - 1258)</li>
              <li>Trần Thánh Tông (Trần Hoảng, 1258 - 1278)</li>
              <li>Trần Nhân Tông (Trần Khâm, 1279-1293)</li>
              <li>Trần Anh Tông (1293 - 1314)</li>
              <li>Trần Minh Tông (1314 - 1329)</li>
              <li>Trần Hiến Tông (1329 - 1341)</li>
              <li>Trần Dụ Tông (1341 - 1369)</li>
              <li>Trần Nghệ Tông (1370 - 1372)</li>
              <li>Trần Duệ Tông (1372-1377)</li>
              <li>Trần Phế Đế (1377-1388)</li>
              <li>Trần Thuận Tông (1388-1398)</li>
              <li>Trần Thiếu Đế (1398-1400)</li>
            </ul>
          </Box>
          <Box sx={{ mt: 2, lineHeight: "2rem" }}>
            Tên huý là Trần Án, mưói 3 tuổi lên kế nghiệp tức là Thiếu Đế. Hồ Quý Ly xưng là Khâm
            đức Hưng liệt Đại Vương. Ngày 28 tháng 2 năm Canh Thìn - 1400, Hồ Quý Ly bức Thiếu Đế
            nhường ngôi, phế làm Bảo Ninh Đại Vương.. Triều Trần kể từ Trần Thái Tông Đến Trần Thiếu
            Đế là 12 đời vua, trị vì được 175 năm.
          </Box>
        </Box>
        <Box sx={{ mt: 1, mb: 2 }}>...</Box>
        <Box>
          <Box sx={{ fontWeight: "bold", fontSize: "1.8rem", mt: 2 }}>
            Lịch sử Việt Nam Nam trong thời kỳ Pháp thuộc
          </Box>
          <Box sx={{ width: "60%", margin: "0 auto", mt: 1 }}>
            <img
              src="https://i.pinimg.com/originals/58/5e/05/585e0536791c8505e665f97cdd4ae2c4.jpg"
              alt=""
              style={{ width: "100%", height: "100%", objectFit: "cover" }}
            />
          </Box>
          <Box sx={{ mt: 2 }}>
            <ul style={{ listStyleType: "none" }}>
              <li>
                1858 Quân Pháp chiếm đà Nẵng, đánh dấu sự đô hộ của Pháp ở đông Dương. Phong trào
                Cần Vương do vua Hàm Nghi lãnh đạo
              </li>
              <li>1860 – 1887 Cuộc khởi nghĩa của Mai Xuân Thưởng ở Bình định</li>
              <li>1884-1889 Cuộc khởi nghĩa của Nguyễn Thiện Thuật ở Bãi Sậy</li>
              <li>1885-1895 Cuộc khởi nghĩa của Phan đình Phùng ở Nghệ Tĩnh</li>
              <li>1886-1887 Cuộc khởi nghĩa của đinh Công Tráng ở Thanh Hóa</li>
              <li>1887-1913 Cuộc khởi nghĩa của Hoàng Hoa Thám ở Yên Thế</li>
              <li>
                1904-1908 Phong trào đông Du của Phan Bội Châu và phong trào đông Kinh của Phan Châu
                Trinh.
              </li>
              <li>
                Tháng 12/1927 Cuộc khởi nghĩa của Nguyễn Thái Học ở Yên Bái Ngày 03/02/1930 Thành
                lập đảng Cộng Sản đông Dương (đảng Cộng Sản Việt Nam ngày nay)
              </li>
              <li>Tháng 05/1930 – tháng 04/1931 Phong trào Xô Viết Nghệ Tĩnh</li>
              <li>Tháng 09/1940 Quân Nhật đến đông Dương</li>
              <li>Tháng 09/1940 Khởi nghĩa Bắc Sơn</li>
              <li>Ngày 23/11/1940 Khởi nghĩa Nam Kỳ</li>
              <li>Ngày 19/05/1941 Thành lập mặt trận Việt Minh</li>
              <li>Ngày 09/05/1945 Nhật hất cẳng Pháp khỏi đông Dương</li>
              <li>Ngày 19/08/1945 Quyết định Tổng khởi nghĩa của mặt trận Việt Minh ở Tân Trào</li>
              <li>Ngày 02/09/1945 Hồ Chủ Tịch tuyên bố độc lập khai sinh ra nước</li>
            </ul>
          </Box>
        </Box>
        <Box>
          <Box sx={{ fontSize: "1.8rem", fontWeight: "bold", mt: 2 }}>
            Lịch sử Việt Nam trong kháng chiến chống Mỹ
          </Box>
          <Box sx={{ width: "60%", margin: "0 auto", mt: 1 }}>
            <img
              src="https://vimico.vn/wp-content/uploads/2017/11/850-500x264.jpg"
              alt=""
              style={{ width: "100%", height: "100%", objectFit: "cover" }}
            />
          </Box>
          <Box sx={{ mb: 2, mt: 2 }}>
            Sau khi thực dân Pháp rút khỏi miền Bắc, Việt Nam bị tạm thời chia cắt làm hai miền tại
            vĩ tuyến 17. Miền Bắc (Việt Nam dân chủ cộng hòa) bắt đầu xây dựng lại.
          </Box>
          <Box sx={{}}>
            <ul style={{ listStyleType: "none" }}>
              <li>
                1956 Mỹ ủng hộ chính quyền của Ngô đình Diệm. Năm 1956 đã không có cuộc Tổng tuyển
                cử cả nước đề bầu chính quyền mới thông nhất đất nước như Hiệp định Geneva năm 1954
              </li>
              <li>1956-1960 Phong trào đồng Khởi</li>
              <li>
                1961-1965 Mỹ thất bại trong chiến lược “chiến tranh đặc biệt” ở miền Nam Việt Nam.
              </li>
              <li>
                1965-1968 Mỹ thất bại trong chiến lược “chiến tranh địa phương” ở miền Nam Việt Nam.
              </li>
              <li>
                5/8/1964-1/10/1968 Mỹ thất bại trong cuộc chiến leo thang lần thứ nhất ở miền Bắc
              </li>
              <li>
                30/1/1968-23/09/1968 Cuộc tổng tấn công nãm Mậu Thân của nhân dân và lực lượng cách
                mạng miền Nam.
              </li>
              <li>Ngày 06/061969 Thành lập chính quyền cách mạng lâm thời.</li>
              <li>1968-1972 Mỹ thất bại trong cố gắng “Việt Nam hóa”chiến tranh</li>
              <li>
                06/04/1972-10/1972 Mỹ thất bại trong cuộc chiến tranh phá hoại lần thứ hai ở miền
                Bắc.
              </li>
              <li>
                18-29/12/1972 Mỹ tấn công Hà Nội, Hải Phòng và một số tỉnh khác ở miền Bắc Việt Nam
                bằng bom B-52 và máy bay chiến đấu F111.
              </li>
              <li>Ngày 23/1/1973 Hiệp định Paris được ký kết</li>
              <li>
                Ngày 27/01/1973 Hiệp định Paris chính thức công nhận Việt Nam là một nước độc lập,
                có chủ quyền, toàn vẹn lãnh thổ và yêu cầu quân đội Mỹ rút khỏi Việt Nam
              </li>
              <li>
                Ngày 06/01/1975 Giải phóng đường 14 và tỉnh Phước Long, đánh dấu cho việc tấn công
                và lật đổ chính quyền bù nhìn Sài Gòn.
              </li>
              <li>4-12/03/1975 Thất bại của chính quyền Sài Gòn trong chiến dịch Tây Nguyên</li>
              <li>
                Tháng 03/1975 Các thất bại liên tiếp của chính quyền Sài Gòn ở Huế và đà Nẵng.
              </li>
              <li>Ngày 16/04/1975 Tuyến phòng ngự ở Phan Rang bị thất thủ</li>
              <li>Ngày 26/04/1975 Bước vào chiến dịch Hồ Chí Minh</li>
              <li>Ngày 30/04/1975 Giải phóng Sài Gòn</li>
              <li>
                Ngày 02/05/1975 Giải phóng các tỉnh đồng bằng sông Cửu Long và toàn bộ miền Nam.
              </li>
            </ul>
          </Box>
        </Box>
        <Box>
          <Box sx={{ fontSize: "1.8rem", fontWeight: "bold", mt: 2 }}>
            Chiến tranh biên giới 1975 — 1979
          </Box>
          <Box sx={{ width: "60%", margin: "0 auto", mt: 1 }}>
            <img
              src="https://media-cdn-v2.laodong.vn/storage/newsportal/2019/2/15/657555/Sss.png"
              alt=""
              style={{ width: "100%", height: "100%", objectFit: "cover" }}
            />
          </Box>
          <Box>
            <ul style={{ listStyleType: "none" }}>
              <li>Chiến tranh biên giới Tây Nam 1975-1979</li>
              <li>
                Chiến tranh biên giới Việt – Trung năm từ ngày 17/2/1979 đến - 16/3/1979. Trên thực
                tế, cuộc chiến kéo dài đến năm 1991. Trong đó có trân đánh rất ác liệt và tổn thất
                lớn ở Vị Xuyên, Hà Giang ngày 12 / 7/1984
              </li>
            </ul>
          </Box>
        </Box>
        <Box>
          <Box sx={{ mt: 1, mb: 1 }}>
            <Box component="span" sx={{ color: "#fc1d00", fontWeight: "bold" }}>
              Ngày 02/07/1976 đổi tên nước thành Nước Cộng Hòa Xã Hội Chủ Nghĩa Việt Nam{" "}
            </Box>
            <Box component="span">
              lấy Hà Nội là thủ đô và đổi tên Sài Gòn là thành phố Hồ Chí Minh.
            </Box>
          </Box>
          <Box>
            Sau giải phóng Cả nước khắc phục hậu quả của hơn 30 nãm chiến tranh và bắt đầu xây dựng
            đất nước. Việt Nam bước vào giai đoạn phát triển kinh tế
          </Box>
        </Box>
      </Container>

      <BackToTop />

      <Footer />
    </Box>
  );
}

export default History;
