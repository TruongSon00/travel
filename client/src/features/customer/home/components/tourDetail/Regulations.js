import React from 'react';
import PropTypes from 'prop-types';
import { Box } from '@mui/system';
import { Typography } from '@mui/material';

Regulations.propTypes = {

};

function Regulations(props) {
    return (
        <Box>
            <Box sx={{ mt: 4 }}>
                <Typography variant="h2" sx={{ fontSize: '2rem', fontWeight: 'bold', textDecoration: 'underline', color: '#b22222', textAlign: 'center', mt: 2 }}>Quy Trình Đăng Ký Tour</Typography>
                <Box sx={{ fontSize: '1.4rem', lineHeight: '2rem' }}>
                    <ul>
                        <li>Đợt 01: Quý khách thanh toán 50% giá trị của tour ngay khi đăng kí mua tour.</li>
                        <li>Đợt 02: Quý khách thanh toán 50% giá trị của tour trước lịch khởi hành 07 ngày.</li>
                    </ul>
                </Box>
                <Box sx={{ fontSize: '1.4rem', lineHeight: '2rem' }}>
                    <Box component='span' sx={{ fontWeight: 'bold' }}>Note: </Box>
                    Đối với những tour quý khách đăng kí sát lịch khởi hành từ 05 cho đến 07 ngày, quý khách vui lòng thanh toán 100% giá trị của tour.
                </Box>
            </Box>
            <Box sx={{ fontSize: '1.4rem', lineHeight: '2rem', mt: 4 }}>
                <Typography variant="h2" sx={{ fontSize: '2rem', fontWeight: 'bold', textDecoration: 'underline', color: '#b22222', textAlign: 'center' }}>Điều Kiện Hủy Tour</Typography>
                <Box sx={{ fontWeight: 'bold', textDecoration: 'underline', mt: 1 }}>Trường hợp hủy bỏ dịch vụ từ Vietnam Booking:</Box>
                <Box sx={{ mt: 1 }}>Trong trường hợp không thể tiếp tục sử dụng dịch vụ/ tour, Quý khách phải thông báo cho Công ty bằng văn bản hoặc email (Không giải quyết các trường hợp liên hệ chuyển/ hủy tour qua điện thoại). Đồng thời Quý khách vui lòng mang Biên bản đăng ký tour/ dịch vụ & biên lai đóng tiền đến văn phòng Vietnam Booking để làm thủ tục hủy/ chuyển tour.</Box>
                <Box sx={{ mt: 1 }}>Các trường hợp chuyển/ đổi dịch vụ/ tour: Cty sẽ căn cứ xem xét tình hình thực tế để tính phí và có mức hỗ trợ Quý khách hàng thỏa đáng.</Box>
                <Box sx={{ mt: 1 }}>Trường hợp hủy dịch vụ/ tour: Quý khách phải chịu chi phí hủy tour/ dịch vụ theo quy định của Vietnam Booking và toàn bộ phí ngân hàng cho việc thanh toán trực tuyến.</Box>
                <Box variant="h3">Phí hủy được quy định như sau:</Box>
                <Box>
                    <ul>
                        <li>Hủy tour sau khi đăng ký: 30% giá tour.</li>
                        <li>Trước ngày đi 20 Ngày: 50% giá tour.</li>
                        <li>Trước ngày đi 10-19 ngày: 75% giá tour.</li>
                        <li>Trước ngày đi 0-10 Ngày: 100% giá tour.</li>
                        <li>Các quy định trên không áp dụng cho các dịp lễ, tết và Chủ Nhật.</li>
                        <li>Giai đoạn Lễ/Tết: không hoàn, không hủy, không đổi.</li>
                    </ul>
                </Box>
                <Box>Sau khi hủy tour, du khách vui lòng đến công ty nhận tiền trong vòng 2 tuần kể từ ngày đăng ký hủy tour. Chúng tôi chỉ thanh toán trong thời gian 14 ngày nói trên. </Box>
                <Box sx={{ mt: 1 }}>Việc huỷ bỏ chuyến đi phải được thông báo trực tiếp với Công ty hoặc qua fax, email, tin nhắn và phải được Công ty xác nhận. Việc huỷ bỏ bằng điện thoại không được chấp nhận.</Box>
            </Box>
            <Box sx={{ mt: 2, fontSize: '1.4rem', lineHeight: '2rem' }}>
                <Typography variant="h2" sx={{ fontSize: '1.8rem', fontWeight: 'bold', textDecoration: 'underline', color: '#b22222', textAlign: 'center' }}>LƯU Ý KHÁC</Typography>
                <Box >
                    <ul>
                        <li>Ngày khởi hành, Quý khách vui lòng tập trung tại điểm đón theo quy định.</li>
                        <li>Chúng tôi không chịu trách nhiệm khi Quý khách đến trễ.</li>
                        <li>Quý khách phải mang theo: giấy tờ tùy thân hợp pháp (CMND hoặc Passport).</li>
                        <li>Quý khách là người ăn chay vui lòng mang thêm đồ ăn chay theo để đảm bảo khẩu vị của mình.</li>
                        <li>Bất cứ dịch vụ nào trong tour nếu Quý khách không sử dụng cũng không được hoàn lại.</li>
                        <li>Hướng dẫn viên có quyền sắp xếp lại thứ tự các điểm thăm quan cho phù hợp điều kiện từng ngày khởi hành cụ thể nhưng vẫn đảm bảo tất cả các điểm thăm quan trong chương trình.</li>
                        <li>Quy định nhận & trả phòng tại các khách sạn/resort: nhận phòng sau 14h và trả phòng trước 12h.</li>
                        <li>Quý khách nên mang theo hành lý gọn nhẹ, không mang vali lớn. </li>
                        <li>Trẻ em phải đi cùng cha mẹ hoặc có giấy cam kết đi tour cùng người thân, khi đi phải mang theo giấy khai sinh hoặc hộ chiếu. </li>
                        <li>Khi đăng ký, quý khách vui lòng cung cấp đầy đủ Họ tên và năm sinh.</li>
                        <li>Đối với du khách là Việt kiều, Quốc tế nhập cảnh Việt Nam bằng visa rời, vui lòng mang theo tờ khai hải quan và visa khi đi tour.</li>
                    </ul>
                </Box>
                <Box sx={{ textDecoration: 'underline', fontWeight: 'bold' }}>LƯU Ý BẮT BUỘC</Box>
                <Box>
                    <ul>
                        <li>Tuân thủ theo đúng quy định Bộ Y Tế về phòng chống dịch bệnh ở thời điểm hiện hành (linh hoạt theo mỗi ngành nghề).</li>
                        <li>Đảm bảo nguyên tắc 5K, khử khuẩn.</li>
                        <li>Thẻ xanh covid (khách đã tiêm vaccine ngừa covid đủ liều, thời gian hoàn tất mũi 2 trước 14 ngày và không quá 12 tháng), khách là FO đã khỏi bệnh (có giấy chứng nhận của Sở Y Tế và không quá 12 tháng).</li>
                        <li>Trong trường hợp bất khả kháng, như trước ngày tour khởi hành tại điểm đến xảy ra dịch bệnh. Khi có thông báo và công văn của ban chỉ đạo phòng chống dịch của tỉnh hoặc điểm đến, công ty sẽ linh hoạt xử lý theo từng trường hợp cho quý khách hàng. </li>
                    </ul>
                </Box>
                <Box sx={{ fontWeight: 'bold', textDecoration: 'underline' }}>(*) Trách nhiệm của khách hàng:</Box>
                <Box>
                    <ul>
                        <li>Khách hàng tự chịu trách nhiệm về sức khỏe và các bệnh mãn tính (tim mạch, huyết áp, tiểu đường, xương khớp…), bệnh bẩm sinh, bệnh tiềm ẩn, bệnh HIV AIDS, bệnh rối loạn tinh thần và thần kinh, phụ nữ đang mang thai... là những bệnh không nằm trong phạm vi được bảo hiểm. Khi cần thiết Quý khách phải viết cam kết về bệnh tật của bản thân khi tham gia tour. Bên tổ chức tour không chịu trách nhiệm đối với những trường hợp Quý khách không khai báo bệnh, khai báo không trung thực cũng như các trường hợp nằm ngoài phạm vi bảo hiểm du lịch trong tour.</li>
                        <li>Khách hàng phải tự bảo quản tài sản riêng của mình trong mọi trường hợp và ở tất cả các nơi trong suốt chuyến đi. Bên tổ chức tour không chịu trách nhiệm về những mất mát về tiền bạc, tư trang quý, vé máy bay, và tài sản riêng của khách hàng trong chuyến đi.</li>
                    </ul>
                </Box>
                <Box>**Trong những trường hợp khách quan như: khủng bố, thiên tai…hoặc do có sự cố, có sự thay đổi lịch trình của các phương tiện vận chuyển công cộng như: máy bay, tàu hỏa…thì Vietnam Booking sẽ giữ quyền thay đổi lộ trình bất cứ lúc nào vì sự thuận tiện, an toàn cho khách hàng và sẽ không chịu trách nhiệm bồi thường những thiệt hại phát sinh**.</Box>
                <Box sx={{ mt: 1 }}>***Nếu số khách tham gia không đủ số lượng tối thiểu để khởi hành, Công ty sẽ hỗ trợ dời sang ngày khởi hành gần nhất hoặc hoàn lại phí tour như đã đặt cọc cho quý khách​***.</Box>
            </Box>
        </Box>
    );
}

export default Regulations;