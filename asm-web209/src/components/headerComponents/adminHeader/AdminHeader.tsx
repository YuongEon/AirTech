import React from "react";
import { Link } from 'react-router-dom';
import { user_icon } from "../../../assets/images/icon";
import { logo } from "../../../assets/images/logo";
import styles from './adminHeader.module.scss';
import Navbar from "../../NavbarComponents/Navbar";
import { adminNavData } from "../../NavbarComponents/navData";

const AdminHeader = () => {
  return (
    <div className="header h-100px">
      <div
        className={
          styles.header_wrap +
          " header_wrap flex justify-between items-center h-100px"
        }
      >
        <div className="logo">
          <Link
            to={"/"}
            className={styles.logo + " logo-link flex gap items-center"}
          >
            <img src={logo} alt="" />
            <span className="ml-4 text-3xl uppercase">airtech</span>
          </Link>
        </div>

        <Navbar data={adminNavData}/>

        <div>
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

export default AdminHeader;
