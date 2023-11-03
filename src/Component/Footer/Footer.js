import React from "react";
import logo from "../../images/My logo1.png";
import style from "./Footer.module.css";
import "../../css/custom.css";
import { Row, Col, Form, Input } from "antd";
import call from "../../images/Group 80.svg";
import location from "../../images/Group 79.svg";
import mail from "../../images/315-Email Arrow Down.svg";
import { Link } from "react-router-dom";
import {
  FacebookOutlined,
  LinkedinFilled,
  InstagramOutlined,
  TwitterOutlined,
} from "@ant-design/icons";
import { useNavigate } from "react-router-dom";

const Footer = () => {
  const navigate = useNavigate();
  return (
    <div className={style.mainDiv}>
      <div className="container">
        <div style={{ cursor: "pointer" }}>
          <img
            src={logo}
            onClick={() => navigate("/")}
            alt="no"
            className={style.logoImage}
          />
        </div>

        <Row className={style.rowWrapper}>
          <Col lg={9} md={24} sm={24} className={style.firstCol}>
            <div className={style.firstWrapper}>
              <div className={style.para}>
                We deliver Electronics Equipments and services as requirment of
                client for any industries such as small or large organizations
                Globally. We're always here to help!
              </div>
              <div className={style.iconWrapper}>
                <div
                  className={style.icons}
                  data-aos="fade-up"
                  data-aos-delay="0"
                >
                  <a
                    href="https://www.facebook.com/devstree.sweden"
                    target="_blank"
                    // style={{ color: "black" }}
                    className={style.ic1}
                  >
                    {" "}
                    <FacebookOutlined
                      style={{ fontSize: "30px" }}
                      theme="outlined"
                    />
                  </a>
                </div>

                <div
                  className={style.icons}
                  data-aos="fade-up"
                  data-aos-delay="200"
                >
                  <a
                    href="https://twitter.com/devstreesweden"
                    target="_blank"
                    // style={{ color: "black" }}
                    className={style.ic4}
                  >
                    <div className={style.twitterimg}> </div>
                  </a>
                </div>
                <div
                  className={style.icons}
                  data-aos="fade-up"
                  data-aos-delay="400"
                >
                  <a
                    href="https://www.linkedin.com/company/devstree-sweden/"
                    target="_blank"
                    // style={{ color: "#fff", backgroundColor: "#F38521" }}
                    className={style.ic3}
                  >
                    {" "}
                    <LinkedinFilled
                      style={{ fontSize: "30px" }}
                      theme="outlined"
                    />
                  </a>
                </div>
                <div
                  className={style.icons}
                  data-aos="fade-up"
                  data-aos-delay="600"
                >
                  <a
                    href="https://www.instagram.com/devstree.se/"
                    target="_blank"
                    // style={{ color: "black" }}
                    className={style.ic2}
                  >
                    <InstagramOutlined
                      style={{ fontSize: "30px" }}
                      theme="outlined"
                    />
                  </a>
                </div>
              </div>
              {/* <div>
                <Form>
                  <Form.Item>
                    <div className={style.inputWrapper}>
                      <div className={style.emailIconWrapper}>
                        <p className={style.title}>Enter E-Mail Adresse</p>
                        <img src={arrow} alt="no" />
                      </div>

                      <Input className={style.inputType} />
                    </div>
                  </Form.Item>
                </Form>
              </div> */}
            </div>
          </Col>
          <Col lg={2} md={24} sm={24}></Col>
          <Col lg={13} md={24} sm={24} className={style.rowClass}>
            <Row>
              <Col
                lg={12}
                md={12}
                sm={12}
                xs={24}
                className={style.outertitles}
              >
                <div className={style.titles}>
                  <div>Links</div>
                  <Link
                    to="/"
                    className={style.atag}
                    // onClick={() => {
                    //   navigate("/hire-react-native-app-developers/");
                    // }}
                  >
                    Home
                  </Link>
                  <Link
                    to="/hire-android-app-developers/"
                    className={style.atag}
                    // onClick={() => {
                    //   navigate("/hire-android-app-developers/");
                    // }}
                  >
                    About Us
                  </Link>
                  <Link
                    to="/hire-flutter-app-developers/"
                    className={style.atag}
                    // onClick={() => {
                    //   navigate("/hire-flutter-app-developers/");
                    // }}
                  >
                    Provided Serivces
                  </Link>
                  <Link
                    to="/hire-react-js-developers/"
                    className={style.atag}
                    // onClick={() => {
                    //   navigate("/hire-react-js-developers/");
                    // }}
                  >
                    Completed Projects
                  </Link>
                  <Link
                    to="/hire-iphone-app-developers/"
                    className={style.atag}
                    // onClick={() => {
                    //   navigate("/hire-iphone-app-developers/");
                    // }}
                  >
                    Blog Pages
                  </Link>
                </div>
              </Col>
              <Col
                // sm={{ span: 24 }}
                // md={{ span: 7, offset: 1 }}
                // lg={{ span: 7, offset: 1 }}

                lg={12}
                md={12}
                sm={12}
                xs={24}
              >
                <div className={style.lastTitle}>
                  <div>Contact info</div>
                  <div className={style.lastCol}>
                    <div>
                      <img src={call} alt="no" />
                    </div>
                    <a href="tel:+76 73 767 31 32" className={style.underLine}>
                      +67 73 676 31 32
                    </a>
                  </div>
                  <div className={style.lastCol}>
                    <div>
                      <img src={mail} alt="no" />
                    </div>
                    <a href="">info@usha.electronics</a>
                  </div>
                  <div className={style.lastCol}>
                    <div>
                      <img src={location} alt="no" />
                    </div>
                    <a
                      // href="https://www.google.com/maps/place/Devstree+IT+Services+Sweden/@59.4877373,-21.2863451,4z/data=!4m6!3m5!1s0x465fa3b0fd3589db:0x3e862f3d50e9f750!8m2!3d59.4877373!4d17.7370924!16s%2Fg%2F11kb54w6m8?entry=ttu"
                      target="_blank"
                      className={style.underLine}
                    >
                      Kirgistan 1, 196 32 Kungsängen, New Zelend
                    </a>
                  </div>
                </div>
              </Col>
            </Row>
          </Col>
        </Row>
        <div className={style.copyRight}>
          Copyright © 2023 Usha Electronics. All Rights Reserved.
        </div>
      </div>
    </div>
  );
};

export default Footer;
