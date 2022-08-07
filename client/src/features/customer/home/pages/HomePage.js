import React, { useEffect } from "react";
import Header from "../../../../components/header";
import Footer from "../../../../components/footer";
import { Box, Container, Grid, Typography } from "@mui/material";
import Slide from "../components/Slide";
import Intro from "../components/intro";
import { intro, places } from "../../../../fakeData";
import FeedBackList from "../components/feedback/FeedBackList";
import FeedBackForm from "../components/FeedBackForm";
import BackToTop from "../../../../components/BackToTop";
import { URL_API } from "../../../../constants";
import axios from "axios";
import { useCookies } from "react-cookie";

const Styles = {
  title: {
    fontFamily: `'Sedgwick Ave', cursive`,
    display: "flex",
    justifyContent: "center",
    gap: 1,
  },
  titleSpan: {
    padding: "1rem",
    borderRadius: "50%",
    backgroundColor: "#e7dfd3",
    color: "#d18936",
    fontSize: "4.5rem",
    lineHeight: "4.5rem",
  },
  description: {
    fontStyle: "italic",
    fontSize: "2rem",
    lineHeight: "2rem",
    margin: "1.5rem 0",
  },
};

function HomePage(props) {
  const [cookie, setCookie] = useCookies(["token"]);

  useEffect(() => {
    const getInfor = async () => {
      try {
        const res = await axios.get(`${URL_API}`);
        if (res.data.role === 1) {
          localStorage.setItem("user", JSON.stringify(res.data.user));
        }
      } catch (error) {
        console.log(error);
      }
    };
    getInfor();
  }, [cookie.token]);

  return (
    <Box>
      <Header />
      <Slide />
      <Container>
        <Grid container sx={{ mt: 6 }}>
          <Grid item xs={12} sx={{ textAlign: "center" }}>
            <Box sx={Styles.title}>
              <Box variant="span" sx={Styles.titleSpan}>
                Giới
              </Box>
              <Box variant="span" sx={Styles.titleSpan}>
                thiệu
              </Box>
            </Box>
            <Typography sx={Styles.description}>
              Hãy cùng chúng tôi tìm hiểu về Việt Nam quê tôi nhé!
            </Typography>
          </Grid>
          <Grid container spacing={5}>
            {intro.map((item) => (
              <Grid item lg={4} md={6} sm={6} xs={12} key={item.id}>
                <Intro intro={item} />
              </Grid>
            ))}
          </Grid>
        </Grid>
        <Grid container sx={{ mt: 8 }}>
          <Grid item xs={12} sx={{ textAlign: "center" }}>
            <Box sx={Styles.title}>
              <Box variant="span" sx={Styles.titleSpan}>
                Địa
              </Box>
              <Box variant="span" sx={Styles.titleSpan}>
                Danh
              </Box>
            </Box>
            <Typography sx={Styles.description}>
              Một số địa điểm du lịch nổi tiếng bạn nên đến khi tới Viet Nam !
            </Typography>
          </Grid>
          <Grid container spacing={4}>
            {places.map((place) => (
              <Grid item md={4} xs={6}>
                <Intro intro={place} />
              </Grid>
            ))}
          </Grid>
        </Grid>
        <Grid container sx={{ mt: 8 }}>
          <Grid item xs={12} sx={{ textAlign: "center" }}>
            <Box sx={Styles.title}>
              <Box variant="span" sx={Styles.titleSpan}>
                Lễ
              </Box>
              <Box variant="span" sx={Styles.titleSpan}>
                Hội
              </Box>
            </Box>
            <Typography sx={Styles.description}>
              Một đặc trung không thể thiếu ở Việt Nam chính là các lễ hội
            </Typography>
          </Grid>
          <Grid container spacing={5}>
            <Grid item xs={6}>
              <Intro />
            </Grid>
            <Grid item xs={6}>
              <Intro />
            </Grid>
          </Grid>
        </Grid>
        <Grid container sx={{ mt: 8 }}>
          <Grid item xs={12} sx={{ textAlign: "center" }}>
            <Box sx={Styles.title}>
              <Box variant="span" sx={Styles.titleSpan}>
                Đánh giá
              </Box>
              <Box variant="span" sx={Styles.titleSpan}>
                và
              </Box>
              <Box variant="span" sx={Styles.titleSpan}>
                Nhận xét
              </Box>
            </Box>
            <Typography sx={Styles.description}>
              Một số đánh giá của khách nước ngoài khi trải nghiệp dịch vụ du lịch lại Việt Nam
            </Typography>
          </Grid>
          <FeedBackList />
        </Grid>
        <Grid container sx={{ mt: 8, mb: 4 }}>
          <Grid item xs={12} sx={{ textAlign: "center" }}>
            <Box sx={Styles.title}>
              <Box variant="span" sx={Styles.titleSpan}>
                Nhận xét
              </Box>
              <Box variant="span" sx={Styles.titleSpan}>
                của bạn
              </Box>
            </Box>
            <Typography sx={Styles.description}>
              Chúng tớ rất mong nhận được nhận xét của bạn về trang du lịch Việt Nam !
            </Typography>
            <Typography sx={Styles.description}>
              Mong các bạn đóng góp thêm ý kiến để chúng mình ngày càng hoàn thiện và phát triển hơn
              nữa !
            </Typography>
          </Grid>
          <FeedBackForm />
        </Grid>
      </Container>
      <BackToTop />
      <Footer />
    </Box>
  );
}

export default HomePage;
