import React, { useEffect, useRef, useState } from "react";
import PropTypes from "prop-types";
import { useLocation } from "react-router-dom";
import queryString from "query-string";
import axios from "axios";
import { URL_API } from "../../../constants";
import { Grid } from "@mui/material";
import { Box } from "@mui/system";

axios.defaults.withCredentials = true;

CompanyDetail.propTypes = {};

function CompanyDetail(props) {
  const location = useLocation();
  const params = useRef(queryString.parse(location.search));

  const [company, setCompany] = useState({});
  useEffect(() => {
    const getCompany = async () => {
      const res = await axios.get(`${URL_API}/admin/user/showdetail/${params.current._id}`);
      if (res.status === 200) {
        setCompany(res.data.company[0]);
      }
    };
    getCompany();
  }, []);

  return (
    <Grid container spacing={2} sx={{ padding: "0 5rem" }}>
      <Grid item xs={5}>
        <Box sx={{ width: "100%", height: "30rem" }}>
          <img
            src={company.avatar ? `${URL_API.slice(0, -4)}/avatar/${company.avatar}` : ""}
            alt=""
            style={{ width: "100%", height: "100%", objectFit: "cover" }}
          />
        </Box>
      </Grid>
      <Grid item xs={6} sx={{ ml: 10 }}>
        <Grid container spacing={3}>
          <Grid item xs={5} sx={{ fontWeight: "bold" }}>
            Tên công ty :
          </Grid>
          <Grid item xs={7}>
            {company.username ? company.username : ""}
          </Grid>

          <Grid item xs={5} sx={{ fontWeight: "bold" }}>
            Số điện thoại :
          </Grid>
          <Grid item xs={7}>
            {company.phoneNumber ? company.phoneNumber : ""}
          </Grid>

          {/* <Grid item xs={5} sx={{ fontWeight: "bold" }}>
            Địa chỉ :
          </Grid>
          <Grid item xs={7}>
            <ul>
              {company.info[0]
                ? company.info[0].address.map((info) => {
                    return (
                      <li key={info._id} style={{ margin: "0", padding: "0", listStyle: "none" }}>
                        {info}
                      </li>
                    );
                  })
                : ""}
            </ul>
          </Grid> */}

          <Grid item xs={5} sx={{ fontWeight: "bold" }}>
            email :
          </Grid>
          <Grid item xs={7}>
            {company.email ? company.email : ""}
          </Grid>

          <Grid item xs={5} sx={{ fontWeight: "bold" }}>
            Ngày khởi tạo:
          </Grid>
          <Grid item xs={7}>
            {company.createdAt ? company.createdAt.slice(0, 10) : ""}
          </Grid>

          <Grid item xs={5} sx={{ fontWeight: "bold" }}>
            Số lượng Tour:
          </Grid>
          <Grid item xs={7}>
            {company.tours ? company.tours.length : ""}
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
}

export default CompanyDetail;
