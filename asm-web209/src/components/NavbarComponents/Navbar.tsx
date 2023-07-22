import React, { useEffect, useState } from "react";
import { Link, useLocation, useParams } from "react-router-dom";
import { nanoid } from "nanoid";
import styles from "./navbar.module.scss";

interface NavbarItem {
  title: string;
  url: string;
}

interface NavbarProps {
  data: NavbarItem[];
}

const Navbar = (props: NavbarProps) => {
  const { data } = props;
  const { pathname } = useLocation();

  return (
    <nav className="navbar">
      <ul className="flex md:gap-x-6 md:text-xl">
        {data.map((item, index) => {
          const keyId: string = nanoid();
          const { title, url } = item;
          const formatTitle =
            title.slice(0, 1).toLocaleUpperCase() + title.slice(1);
          return (
            <li
              key={keyId}
              className={
                pathname.includes(item.url) ? styles.active : styles.notActive
              }
            >
              <Link className="w-full h-full " to={`${url}`}>
                {formatTitle}
              </Link>
            </li>
          );
        })}
      </ul>
    </nav>
  );
};

export default Navbar;
