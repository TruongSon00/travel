import React from "react";
import PropTypes from "prop-types";

import "./styles.css";
import { Button } from "@mui/material";
import { useNavigate } from "react-router-dom";

Intro.propTypes = {
  intro: PropTypes.object,
};

function Intro({ intro = {} }) {
  const navigate = useNavigate();

  const handelClick = (title) => {
    if (title === "lịch sử") {
      navigate("/history");
    } else if (title === "Thiên nhiên") {
      navigate("/nature");
    } else {
      navigate("/food");
    }
  };

  return (
    <div className="intro">
      <div className="intro__image">
        <img
          src={
            intro.thumbnail ||
            "https://i0.wp.com/semprefuigeek.com.br/wp-content/uploads/2022/04/one-piece-luffy-gear-5-fanart-autor-desconhecido-postcover-1.jpg?fit=800%2C450&ssl=1"
          }
        />
        <div className="intro__detail">
          <div className="intro_content">
            <div className="intro__title">{intro.title || "luffy"}</div>
            <div className="intro__description">{intro.description || ""}</div>
            <Button
              onClick={() => handelClick(intro.title)}
              size="large"
              variant="contained"
              sx={{ backgroundColor: "#daa15e", ":hover": { backgroundColor: "#d28731" } }}
            >
              Xem thêm
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Intro;
