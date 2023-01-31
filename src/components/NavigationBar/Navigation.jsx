import React from "react";
import styles from "./Navigation.module.css";
import { Menu } from "react-feather";
import { useState } from "react";

export default function Navigation() {
  // const [stateSidebar, setStateSidebar] = useState(false);

  // const openCloseSidebar = () => {
  //   setStateSidebar(!stateSidebar);
  // };

  return (
    <div className={styles.navigationBar}>
      <h2>Logo</h2>
      <Menu className={styles.Menu} />
      {/* <span
        className={styles.sidebar}
        // onClick={(openCloseSidebar) => {
        //   true ? "isActive" : "";
        // }}
      >
        <ul className={styles.itemList}>
          <li className={styles.item}>
            <a href="#">Home</a>
          </li>
          <li className={styles.item}>
            <a href="#">Proyectos</a>
          </li>
          <li className={styles.item}>
            <a href="#">Contacto</a>
          </li>
        </ul>
      </span> */}
    </div>
  );
}
