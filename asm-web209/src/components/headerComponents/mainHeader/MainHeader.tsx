import React from "react";
import styles from "./mainHeader.module.scss";
import { Link } from "react-router-dom";
import logo from "../../../assets/images/logo/air-tech-logo.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import { bag_icon, user_icon } from "../../../assets/images/icon";
import Navbar from "../../NavbarComponents/Navbar";
import { mainNavData } from "../../NavbarComponents/navData";

const MainHeader = () => {
  return (
    <div className="header h-100px">
      <div className={styles.header_wrap + " header_wrap flex justify-between items-center h-100px"}>
        <Navbar data={mainNavData}/>

        <div className="logo">
          <Link to={"/"} className={styles.logo + " logo-link flex gap items-center"}>
            <img src={logo} alt="" />
            <span className="ml-4 text-3xl uppercase">airtech</span>
          </Link>
        </div>

        <div className="behavior flex items-center md:gap-x-6">
          <div className={styles.search_field + " relative"}>
            <input type="text"className="inner-shadow-cuz shadow"/>
            <FontAwesomeIcon icon={faMagnifyingGlass} className={styles.icon + " absolute pr-2 pl-1"}/>
          </div>
          <div className={styles.cart + " relative"}>
            <Link to={"/"}>
              <img className="w-9" src={bag_icon} alt="" />
              <span className="absolute block">6</span>
            </Link>
          </div>
          <div className="account">
            <Link to={"/"}>
              <img className="w-9" src={user_icon} alt="" />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MainHeader;
