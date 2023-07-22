import React from "react";
import styles from "./mainFooter.module.scss";
import { Link } from "react-router-dom";
import MainNavbar from "../../NavbarComponents/mainNavbar/MainNavbar";
import FooterService from "../../footerService/FooterService";
import { fb_icon, twitter_icon, yt_icon } from "../../../assets/images/icon";

const MainFooter = () => {
  return (
    <div className={styles.footer}>
      <div className={styles.footer_wrap}>
        <FooterService />

        <div
          className={
            styles.footer_bottom + " flex justify-between md:py-5 items-center"
          }
        >
          <div>
              <h3 className="md:text-xl">Power by AirTech</h3>
            </div>
          <div className={styles.social + " flex md:items-center md:gap-x-6"}>
            
            <div>
              <ul className="flex md:gap-x-4">
                <li>
                  <Link to={"/"}>
                    <img
                      src={twitter_icon}
                      alt="twitter"
                    />
                  </Link>
                </li>
                <li>
                  <Link to={"/"}>
                    <img src={fb_icon} alt="facebook" />
                  </Link>
                </li>
                <li>
                  <Link to={"/"}>
                    <img
                      src={yt_icon}
                      alt="youtube"
                    />
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MainFooter;
