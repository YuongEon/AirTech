import React from "react";
import styles from "./footerService.module.scss";
import { Link } from "react-router-dom";
import { footerServiceData as data } from "./data";

const FooterService = () => {
  return (
    <>
      <div
        className={
          styles.footer_service + " grid grid-flow-col justify-stretch mb-28"
        }
      >
        {data.map((item) => {
          return (
            <div>
              <h3 className="md:text-xl uppercase tracking-light mb-4">
                {item.title}
              </h3>
              <ul>
                {item.data.map((el) => {
                  return (
                    <li className="md:mb-2.5">
                      <Link
                        to={el.navigateTo}
                        className={styles.service_link + " text-base"}
                      >
                        {el.name}
                      </Link>
                    </li>
                  );
                })}
              </ul>
            </div>
          );
        })}
      </div>
    </>
  );
};

export default FooterService;
