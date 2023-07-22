import React, { useState } from "react";
import styles from "./filterBar.module.scss";

const FilterBar : React.FC = () => {

  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const handleToggleOpen = (index: number) => {
    setActiveIndex((prevIndex) => (prevIndex === index ? null : index));
  };

  const filterItems = [
    {
      title: "earphones",
      subItems: ["Wireless", "Headphone", "In Ear"],
    },
    {
      title: "accessories",
      subItems: ["Case", "Charge"],
    },
  ];

  
  const renderFilterItems = () =>
    filterItems.map((item, index) => {
      const isOpen = activeIndex === index;

      return (
        <div
          key={index}
          className={`${styles.filter_item} ${
            isOpen ? styles.open : styles.closed
          } mb-5`}
        >
          <div
            className={`${styles.babel} flex justify-between items-center`}
            onClick={() => handleToggleOpen(index)}
          >
            <h3 className="uppercase md:text-base font-medium">{item.title}</h3>
            <div className={styles.arrow}>
              {isOpen ? (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="10"
                  height="2"
                  viewBox="0 0 10 2"
                  fill="none"
                >
                  <path d="M0 1H10" stroke="black" />
                </svg>
              ) : (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="11"
                  height="10"
                  viewBox="0 0 11 10"
                  fill="none"
                >
                  <path d="M0.00350952 5H10.0035" stroke="black" />
                  <rect x="5.00351" width="1" height="10" fill="black" />
                </svg>
              )}
            </div>
          </div>
          <div className={styles.subItems}>
            {isOpen && (
              <ul>
                {item.subItems.map((subItem, subIndex) => (
                  <li
                    key={subIndex}
                    className={isOpen ? styles.activeSubItem : styles.notActiveSubItem}
                  >
                    {subItem}
                  </li>
                ))}
              </ul>
            )}
          </div>
        </div>
      );
    });

  return (
    <div className={styles.filter_bar}>
      <div className="">
        <h2 className="uppercase md:text-xl font-semibold tracking-2">
          categories
        </h2>
        <div className={styles.stroke + " my-4.5"}></div>
        {renderFilterItems()}
      </div>
    </div>
  );
};

export default FilterBar;
