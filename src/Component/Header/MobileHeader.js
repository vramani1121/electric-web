import React, { useEffect, useState, useRef } from "react";
import {
  AppstoreOutlined,
  MailOutlined,
  SettingOutlined,
  UnorderedListOutlined,
  GlobalOutlined,
  BookOutlined,
  UsergroupAddOutlined,
  PhoneOutlined,
  CloseOutlined,
} from "@ant-design/icons";
import { FaBlogger } from "react-icons/fa";
import { BiHomeAlt2 } from "react-icons/bi";
import { FcAbout, FcServices, FcHome, FcCallTransfer } from "react-icons/fc";
import { GrServices } from "react-icons/gr";
import { FiPhoneCall } from "react-icons/fi";

import style from "./MobileHeader.module.css";
import { Collapse, Row, Col, Menu } from "antd";
import logo from "../../images/My logo1.png";
import { Link, useNavigate } from "react-router-dom";
function getItem(label, key, icon, children, type) {
  return {
    key,
    icon,
    children,
    label,
    type,
  };
}

const MobileHeader = () => {
  const [showSlider, setShowSlider] = useState();

  const navigate = useNavigate();

  const onClick = (e) => {
    window.localStorage.setItem("Headerkeys", e.key);
  };

  const showModal = () => {
    setShowSlider(!showSlider);
  };
  return (
    <>
      <div className={style.HomeMobile}>
        <div className="container">
          <Row
            style={{
              alignItems: "center",
              borderBottom: "1px solid #3A3A3A",
              paddingBottom: "2%",
            }}
          >
            <Col lg={6} md={6} sm={12} style={{ textAlign: "center" }}>
              <div className={style.logo}>
                <img
                  className={`logo ${style.logoSize}`}
                  src={logo}
                  alt="logo"
                  style={{ cursor: "pointer"}}
                  onClick={() => navigate("/")}
                />
              </div>
            </Col>
            <Col lg={10} md={10}></Col>
            <Col lg={8} md={8} sm={12}></Col>
          </Row>
        </div>
        <div>
          {showSlider == true ? (
            <CloseOutlined className={style.UnorderDiv} onClick={showModal} />
          ) : (
            <UnorderedListOutlined
              className={style.UnorderDiv}
              onClick={showModal}
            />
          )}
        </div>
        <div>
          {showSlider == true ? (
            <div>
              <Menu
                onClick={onClick}
                selectedKeys={[localStorage.getItem("Headerkeys")]}
                mode="inline"
                items={[
                  {
                    label: (
                      <a
                        onClick={() => {
                          navigate("/");
                        }}
                      >
                        {" "}
                        Home
                      </a>
                    ),
                    key: "mail",
                    icon: <BiHomeAlt2 />,
                  },
                  {
                    id: "aboutus",
                    label: (
                      <a
                        onClick={() => {
                          navigate("/about-us/");
                        }}
                      >
                        {" "}
                        About Us{" "}
                      </a>
                    ),
                    key: "app",
                    icon: <FcAbout />,
                    path: "/about-us/",
                  },
                  {
                    label: "Services",
                    key: "services",
                    icon: <GrServices />,
                    children: [
                      {
                        label: (
                          <div
                            onClick={() => {
                              navigate("/web-development/");
                            }}
                          >
                            Web Development
                          </div>
                        ),

                        key: "WebDevelopment",
                        children: [
                          {
                            label: (
                              <a
                                onClick={() => {
                                  navigate("/magento-development-services/");
                                }}
                              >
                                {" "}
                                Adobe Commerce (Magento){" "}
                              </a>
                            ),
                            key: "Adobe Commerce",
                          },
                          {
                            label: (
                              <a
                                onClick={() => {
                                  navigate("/php-development-services/");
                                }}
                              >
                                {" "}
                                PHP{" "}
                              </a>
                            ),
                            key: "PHP",
                          },
                          {
                            label: (
                              <a
                                onClick={() => {
                                  navigate(
                                    "/codeigniter-development-services/"
                                  );
                                }}
                              >
                                Codeigniter{" "}
                              </a>
                            ),
                            key: "Codeignigter",
                          },
                          {
                            label: (
                              <a
                                onClick={() => {
                                  navigate("/wordpress-development-services/");
                                }}
                              >
                                {" "}
                                WordPress{" "}
                              </a>
                            ),
                            key: "Wordpress",
                          },
                          {
                            label: (
                              <a
                                onClick={() => {
                                  navigate("/laravel-development-services/");
                                }}
                              >
                                Laravel{" "}
                              </a>
                            ),
                            key: "Laravel",
                          },

                          // {
                          //   label: (
                          //     <a
                          //       onClick={() => {
                          //         navigate("/spryker-development-services/");
                          //       }}
                          //     >
                          //       {" "}
                          //       Spryker{" "}
                          //     </a>
                          //   ),
                          //   key: "spryker",
                          // },

                          {
                            label: (
                              <a
                                onClick={() => {
                                  navigate("/asp-net-development-services/");
                                }}
                              >
                                {" "}
                                Asp.Net{" "}
                              </a>
                            ),
                            key: "Asp.Net",
                          },

                          {
                            label: (
                              <a
                                onClick={() => {
                                  navigate("/digital-marketing-services/");
                                }}
                              >
                                Digital Marketing{" "}
                              </a>
                            ),
                            key: "Digital Marketing",
                          },
                        ],
                      },
                      {
                        key: "3",
                        label: "App Development",
                        label: (
                          <div
                            onClick={() => {
                              navigate("/app-development/");
                            }}
                          >
                            App Development
                          </div>
                        ),
                        children: [
                          {
                            key: "1",
                            label: (
                              <a
                                onClick={() => {
                                  navigate("/mobile-app-development/");
                                }}
                              >
                                Mobile App Development
                              </a>
                            ),
                          },
                          {
                            key: "2",
                            label: (
                              <a
                                onClick={() => {
                                  navigate("/ios-app-development-services/");
                                }}
                              >
                                iOS APP DEVELOPMENT
                              </a>
                            ),
                          },
                          {
                            key: "3",
                            label: (
                              <a
                                onClick={() => {
                                  navigate(
                                    "/android-app-development-services/"
                                  );
                                }}
                              >
                                Android APP DEVELOPMENT
                              </a>
                            ),
                          },
                          {
                            key: "4",
                            label: (
                              <a
                                onClick={() => {
                                  navigate(
                                    "/react-native-app-development-services/"
                                  );
                                }}
                              >
                                React Native APP DEVELOPMENT
                              </a>
                            ),
                          },
                          {
                            key: "5",
                            label: (
                              <a
                                onClick={() => {
                                  navigate(
                                    "/flutter-app-development-services/"
                                  );
                                }}
                              >
                                Flutter APP DEVELOPMENT
                              </a>
                            ),
                          },
                        ],
                      },
                      {
                        key: "fullStackDevelopment",
                        label: (
                          <div
                            onClick={() => {
                              navigate("/full-stack-development/");
                            }}
                          >
                            Full Stack Development
                          </div>
                        ),
                        children: [
                          {
                            key: "1",
                            label: (
                              <a
                                onClick={() => {
                                  navigate("/node-js-development-services/");
                                }}
                              >
                                Node.js{" "}
                              </a>
                            ),
                          },
                          {
                            key: "3",
                            label: (
                              <a
                                onClick={() => {
                                  navigate("/react-js-development-services/");
                                }}
                              >
                                React.js
                              </a>
                            ),
                          },
                          {
                            key: "4",
                            label: (
                              <a
                                onClick={() => {
                                  navigate("/vue-js-development-services/");
                                }}
                              >
                                Vue.js
                              </a>
                            ),
                          },
                          {
                            key: "2",
                            label: (
                              <a
                                onClick={() => {
                                  navigate("/angular-js-development-services/");
                                }}
                              >
                                Angular.js
                              </a>
                            ),
                          },
                        ],
                      },
                    ],
                  },
                  {
                    label: (
                      <a
                        onClick={() => {
                          navigate("/hire-us/");
                        }}
                      >
                        Hire Resources
                      </a>
                    ),
                    label: "Hire Resources",
                    key: "hireResources",
                    icon: <GlobalOutlined />,
                    children: [
                      {
                        key: "1",
                        label: (
                          <a
                            onClick={() => {
                              navigate("/hire-iphone-app-developers/");
                            }}
                          >
                            {" "}
                            Hire iPhone App Developers{" "}
                          </a>
                        ),
                      },
                      {
                        key: "2",
                        label: (
                          <a
                            onClick={() => {
                              navigate("/hire-android-app-developers/");
                            }}
                          >
                            Hire Android App Developer
                          </a>
                        ),
                      },
                      {
                        key: "3",
                        label: (
                          <a
                            onClick={() => {
                              navigate("/hire-react-native-app-developers/");
                            }}
                          >
                            Hire React Native App Developers
                          </a>
                        ),
                      },
                      {
                        key: "4",
                        label: (
                          <a
                            onClick={() => {
                              navigate("/hire-flutter-app-developers/");
                            }}
                          >
                            Hire Flutter App Developers
                          </a>
                        ),
                      },
                      {
                        key: "10",
                        label: (
                          <a
                            onClick={() => {
                              navigate("/hire-react-js-developers/");
                            }}
                          >
                            Hire React JS Developers{" "}
                          </a>
                        ),
                      },
                      {
                        key: "5",
                        label: (
                          <a
                            onClick={() => {
                              navigate("/hire-nodejs-developers/");
                            }}
                          >
                            Hire Node JS Developers
                          </a>
                        ),
                      },
                      {
                        key: "6",
                        label: (
                          <a
                            onClick={() => {
                              navigate("/hire-python-developers/");
                            }}
                          >
                            Hire Python Developers
                          </a>
                        ),
                      },
                    ],
                  },
                  {
                    label: (
                      <a
                        onClick={() => {
                          navigate("/blog/");
                        }}
                      >
                        {" "}
                        Blog{" "}
                      </a>
                    ),
                    key: "blog",
                    icon: <FaBlogger />,
                  },
                  {
                    label: (
                      <a
                        onClick={() => {
                          navigate("/portfolio/");
                        }}
                      >
                        {" "}
                        Portfolio{" "}
                      </a>
                    ),
                    key: "portfolio",
                    icon: <UsergroupAddOutlined />,
                  },
                  {
                    label: (
                      <a
                        onClick={() => {
                          navigate("/contact/");
                        }}
                      >
                        {" "}
                        Contact Us{" "}
                      </a>
                    ),
                    key: "contact-us",
                    icon: <FiPhoneCall />,
                  },
                ]}
                className={style.landingMenu}
              />
            </div>
          ) : (
            ""
          )}
        </div>
      </div>
    </>
  );
};
export default MobileHeader;
