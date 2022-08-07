import React from "react";
import PropTypes from "prop-types";
import { Box, Container } from "@mui/material";
import Header from "../../../../components/header";
import Footer from "../../../../components/footer";
import BackToTop from "../../../../components/BackToTop";

FoodPage.propTypes = {};

function FoodPage(props) {
  return (
    <Box>
      <Header />

      <Container
        sx={{ pt: 10, fontSize: "1.6rem", lineHeight: "2.5rem", textAlign: "justify", mb: 3 }}
      >
        <Box sx={{ textAlign: "center", fontSize: "2.5rem", fontWeight: "bold", mt: 2 }}>
          Ẩm thực Việt Nam
        </Box>

        <Box sx={{ mt: 2 }}>
          <Box sx={{ fontSize: "2rem", fontWeight: "bold", color: "#d0021b", mb: 4 }}>
            ẨM THỰC VIỆT NAM LÀ GÌ?
          </Box>
          <Box>
            Ẩm thực Việt Nam là cách gọi của phương thức chế biến món ăn, nguyên lý pha trộn gia vị
            và những thói quen ăn uống nói chung của mọi người Việt trên đất nước Việt Nam. Tuy có
            ít nhiều có sự khác biệt giữa các vùng miền, dân tộc thì ẩm thực Việt Nam vẫn bao hàm ý
            nghĩa khái quát nhất để chỉ tất cả những món ăn phổ biến trong cộng đồng người Việt.
          </Box>
          <Box sx={{ width: "50%", margin: "0 auto", mt: 2 }}>
            <img
              src="https://banhkhome.com/uploads/images/am-thuc-viet.jpg"
              alt=""
              style={{ width: "100%", height: "100%", objectFit: "cover" }}
            />
          </Box>
        </Box>

        <Box>
          <Box sx={{ fontSize: "2rem", fontWeight: "bold", color: "#d0021b", mb: 4, mt: 5 }}>
            ĐẶC ĐIỂM ẨM THỰC VIỆT THEO TỪNG MIỀN
          </Box>

          <Box>
            <Box sx={{ fontSize: "1.8rem", fontWeight: "bold", mb: 2 }}>Ẩm Thực Miền Bắc</Box>
            <Box sx={{ width: "50%", margin: "0 auto", mt: 2, mb: 1 }}>
              <img
                src="https://cdn.pastaxi-manager.onepas.vn/content/uploads/articles/nguyendoan/anh-blog/am-thuc-mien-bac/nhung-dac-trung-cua-am-thuc-mien-bac-1.jpg"
                alt=""
                style={{ width: "100%", height: "100%", objectFit: "cover" }}
              />
            </Box>
            <Box>
              Ẩm thực miền Bắc đặc trưng với khẩu vị mặn mà, đậm đà, thường không đậm các vị cay,
              béo, ngọt bằng các vùng khác, chủ yếu sử dụng nước mắm loãng, mắm tôm. Sử dụng nhiều
              món rau và các loại thủy sản nước ngọt dễ kiếm như tôm, cua, cá, trai, hến... và nhìn
              chung, do truyền thống xa xưa có nền nông nghiệp nghèo nàn, ẩm thực miền Bắc trước kia
              ít thịnh hành các món ăn với nguyên liệu chính là thịt, cá. Nhiều người đánh giá cao
              ẩm thực Hà Nội một thời, cho rằng nó đại diện tiêu biểu nhất của tinh hoa ẩm thực miền
              Bắc Việt Nam với những món phở, bún thang, bún chả, các món quà như cốm Vòng, bánh
              cuốn Thanh Trì... và gia vị đặc sắc như tinh dầu cà cuống, rau húng Láng.
            </Box>
          </Box>

          <Box>
            <Box sx={{ fontSize: "1.8rem", fontWeight: "bold", mb: 2, mt: 4 }}>
              Ẩm Thực Miền Trung
            </Box>
            <Box sx={{ width: "50%", margin: "0 auto", mt: 2, mb: 1 }}>
              <img
                src="https://cdn.pastaxi-manager.onepas.vn/content/uploads/articles/nguyendoan/anh-blog/am-thuc-mien-trung/Dac-trung-am-thuc-mien-trung-1.jpg"
                alt=""
                style={{ width: "100%", height: "100%", objectFit: "cover" }}
              />
            </Box>
            <Box>
              Đồ ăn miền Trung được biết đến với vị cay nồng, với tất cả tính chất đặc sắc của nó
              thể hiện qua hương vị riêng biệt, nhiều món ăn cay và mặn hơn đồ ăn miền Bắc và miền
              Nam, màu sắc được phối trộn phong phú, rực rỡ, thiên về màu đỏ và nâu sậm. Các tỉnh
              thành miền Trung như Huế, Đà Nẵng, Bình Định rất nổi tiếng với mắm tôm chua, các loại
              mắm ruốc hay các loại đặc sản bánh kẹo Đà Nẵng, Huế. Đặc biệt, ẩm thực Huế do ảnh
              hưởng từ phong cách ẩm thực hoàng gia, cho nên rất cầu kỳ trong chế biến và trình bày.
              Một mặt khác, do địa phương không có nhiều sản vật mà ẩm thực hoàng gia lại đòi hỏi số
              lượng lớn món, nên mỗi loại nguyên liệu đều được chế biến rất đa dạng với trong nhiều
              món khác nhau.
            </Box>
          </Box>

          <Box>
            <Box sx={{ fontSize: "1.8rem", fontWeight: "bold", mb: 2, mt: 4 }}>
              Ẩm Thực Miền Nam
            </Box>
            <Box sx={{ width: "50%", margin: "0 auto", mt: 2, mb: 1 }}>
              <img
                src="https://gonatour.vn/vnt_upload/news/04_2020/ca_loc_nuong_trui_mien_tay_gonatour.jpg"
                alt=""
                style={{ width: "100%", height: "100%", objectFit: "cover" }}
              />
            </Box>
            <Box>
              Ẩm thực miền Nam, có thiên hướng hảo vị chua ngọt, đây là nơi chịu ảnh hưởng nhiều của
              ẩm thực Trung Quốc, Campuchia, Thái Lan, có đặc điểm là thường cho thêm đường và hay
              sử dụng sữa dừa (nước cốt và nước dão của dừa). Nền ẩm thực này cũng sản sinh ra vô số
              loại mắm khô (như mắm cá sặc, mắm bò hóc, mắm ba khía...). Ẩm thực miền Nam cũng dùng
              nhiều đồ hải sản nước mặn và nước lợ hơn miền Bắc (các loại cá, tôm, cua, ốc biển), và
              rất đặc biệt với những món ăn dân dã, đặc thù của một thời đi mở cõi, hiện nay nhiều
              khi đã trở thành đặc sản: chuột đồng khìa nước dừa, dơi quạ hấp chao, rắn hổ đất nấu
              cháo đậu xanh, đuông dừa, đuông đất hoặc đuông chà là, vọp chong, cá lóc nướng trui...
            </Box>
          </Box>

          <Box>
            <Box sx={{ fontSize: "1.8rem", fontWeight: "bold", mb: 2, mt: 4 }}>
              Ẩm Thực Các Dân Tộc
            </Box>
            <Box sx={{ width: "50%", margin: "0 auto", mt: 2, mb: 1 }}>
              <img
                src="https://anvuitudosong.com/wp-content/uploads/2020/11/dac-san-tinh-dak-nong.jpg"
                alt=""
                style={{ width: "100%", height: "100%", objectFit: "cover" }}
              />
            </Box>
            <Box>
              Với 54 dân tộc sống trên nhiều vùng địa lý đa dạng khắp toàn quốc, ẩm thực của mỗi dân
              tộc trong cộng đồng các dân tộc Việt Nam đều có bản sắc riêng biệt. Rất nhiều món
              trong số đó ít được biết đến tại các dân tộc khác, như các món thịt lợn sống trộn phèo
              non của các dân tộc Tây Nguyên. Tuy nhiên, nhiều món ăn đã trở thành đặc sản trên đất
              nước Việt Nam và được nhiều người biết đến, như mắm bò hóc miền Nam, bánh cuốn trứng
              (Cao Bằng, Lạng Sơn), bánh coóng phù (bánh trôi dân tộc Tày, xuất xứ từ bánh trôi tàu
              của người Hoa), lợn sữa và vịt quay mắc mật (quả mặt), khâu nhục Lạng Sơn (ảnh hưởng
              từ Quảng Đông, Trung Quốc), phở chua, cháo nhộng ong, phở cốn sủi, thắng cố, các món
              xôi nếp nương của người Mường, thịt chua Thanh Sơn (Phú Thọ)...
            </Box>
          </Box>
        </Box>

        <Box>
          <Box sx={{ fontSize: "2rem", fontWeight: "bold", color: "#d0021b", mb: 4, mt: 5 }}>
            ẨM THỰC THỂ HIỆN VĂN HÓA TINH THẦN NGƯỜI VIỆT
          </Box>

          <Box sx={{ mt: 2 }}>
            Văn hóa tinh thần của người Việt trong ẩm thực chính là sự thể hiện nét đẹp trong văn
            hóa giao tiếp, là sự cư xử giữa người với người trong bữa ăn, làm vui lòng nhau qua thái
            độ ứng xử lịch lãm, có giáo dục. Việc ăn uống đều có những phép tắc, lề lối riêng, từ
            bản thân, đến trong gia đình, rồi các mối quan hệ ngoài xã hội.
          </Box>
          <Box sx={{ mt: 2 }}>
            Bản thân mỗi người phải biết giữ gìn, thận trọng trong khi ăn, cũng như đề cao danh dự
            của mình: “ăn trông nồi, ngồi trông hướng”, hay “ăn phải nhai, nói phải nghĩ.
          </Box>
          <Box sx={{ mt: 2 }}>
            Trong gia đình: ăn chung mâm, ưu tiên thức ăn ngon cho người lớn tuổi, trẻ nhỏ”kính trên
            nhường dưới”, thể hiện sự kính trọng, tình cảm yêu thương. Bữa cơm hàng ngày được xem là
            bữa cơm xum họp gia đình, mọi người quây quần bên nhau, cùng nhau vui vầy sau một ngày
            làm việc mệt nhọc.
          </Box>
          <Box sx={{ mt: 2 }}>
            Ngoài xã hội: việc mời khách đến nhà thể hiện nét văn hóa giữa người với người trong xã
            hội. Khi có dịp tổ chức ăn uống, gia chủ thường làm những món ăn thật ngon, nấu thật
            nhiều để đãi khách. Chủ nhà thường gắp thức ăn mời khách, tránh việc dừng đũa trước
            khách, và có lời mời ăn thêm khi khách dừng bữa. Bữa cơm thiết không chỉ đơn thuần là
            cuộc vui mà còn thể hiện tấm lòng hiếu khách đặc trưng của người Việt.
          </Box>
          <Box sx={{ mt: 2 }}>
            Ẩm thực Việt Nam là một bức tranh đầy màu sắc, nêu bật lên bản sắc riêng của từng dân
            tộc, vùng miền nhưng chúng vẫn mang trong mình cốt cách, linh hồn Việt đồng nhất. Đậm đà
            vị dân tộc không thể xóa nhòa.
          </Box>
        </Box>
      </Container>

      <BackToTop />

      <Footer />
    </Box>
  );
}

export default FoodPage;
