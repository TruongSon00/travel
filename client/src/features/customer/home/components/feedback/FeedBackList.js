import React, { useEffect, useRef, useState } from "react";
import PropTypes from "prop-types";
import FeedBack from "./FeedBack";
import { feedbacks } from "../../../../../fakeData";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import "./styles.css";

FeedBackList.propTypes = {};

function FeedBackList(props) {
  return (
    <>
      <Swiper
        slidesPerView={3}
        spaceBetween={30}
        slidesPerGroup={1}
        loop={true}
        loopFillGroupWithBlank={true}
        modules={[Autoplay]}
        speed={1500}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        className="mySwiper"
      >
        {feedbacks.map((feedback) => (
          <SwiperSlide>
            <FeedBack feedback={feedback} />
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  );
}

export default FeedBackList;
