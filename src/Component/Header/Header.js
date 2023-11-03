import React from "react";
import { useNavigate } from "react-router-dom";
import group_1 from "../../images/My logo1.png";
import { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import { Row, Col, Divider } from "antd";
import { DownOutlined } from "@ant-design/icons";
import phone from "../../images/ph_phone-call-thin.png";
import { Link } from "react-router-dom";
import "./Header.css";

const Header = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const menuItems = [
    { path: "/", name: "home" },
    { path: "/about-us/", name: "about" },
    { path: "/services/", name: "services" },
    { path: "/contact/", name: "contactus" },

    { path: "/services/", name: "services" },
    { path: "/projects/", name: "projects" },
    { path: "/blog/", name: "blog" },
  ];
  const [selectedItem, setSelectedItem] = useState(null);
  const [IsVisible, setIsVisible] = useState(false);
  const handleItemClick = (item, path) => {
    setSelectedItem(item);
    // navigate(path);
  };
  useEffect(() => {
    const { pathname } = location;

    const selectedItem =
      menuItems.find((item) => item.path === pathname)?.name || null;

    setSelectedItem(selectedItem);
  }, [location]);

  useEffect(() => {
    window.addEventListener("scroll", listenscroll);
  }, []);

  const listenscroll = () => {
    let heightToHidden = 100;
    const winScroll =
      document.body.scrollTop || document.documentElement.scrollTop;

    if (winScroll > heightToHidden) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  return (
    <>
      <div
        className="flexing floating"
        // style={{ backgroundColor: IsVisible ? "white" : "" }}
        style={{ backgroundColor: IsVisible ? "white" : "transparent" }}
      >
        <div>
          <img
            src={group_1}
            className="devstree-logo"
            onClick={() => navigate("/")}
          />
        </div>
        <div className="inner-header">
          <Link
            className={`items text-line ${
              selectedItem === "home" ? "selected-item-header " : ""
            }`}
            onClick={() => handleItemClick("home", "/")}
            to="/"
          >
            Home
          </Link>
          <Link
            to="/about-us/"
            className={`items text-line ${
              selectedItem === "about" ? "selected-item-header " : ""
            }`}
            onClick={() => handleItemClick("about", "/about-us/")}
          >
            About Us
          </Link>

          <Link
            to="/services/"
            className={`items text-line ${
              selectedItem === "services" ? "selected-item-header " : ""
            }`}
            onClick={() => handleItemClick("services", "/services/")}
          >
            Services
          </Link>
          <Link
            to="/projects/"
            className={`items text-line ${
              selectedItem === "projects" ? "selected-item-header " : ""
            }`}
            onClick={() => handleItemClick("projects", "/projects/")}
          >
            Projects
          </Link>
          <Link
            to="/blog/"
            className={`items text-line ${
              selectedItem === "blog" ? "selected-item-header " : ""
            }`}
            onClick={() => handleItemClick("blog", "/blog/")}
          >
            Blog
          </Link>
        </div>

        <Link
          to="/contact/"
          className={`items contact  ${
            selectedItem === "contactus" ? "selected-item-header " : ""
          }`}
          onClick={() => handleItemClick("contactus", "/contact/")}
        >
          <div style={{ marginTop: "3px" }}>
            <img src={phone} alt="phone" />
          </div>
          <div>Contact Us</div>
        </Link>
      </div>
    </>
  );
};

export default Header;
