import React from "react";
import styles from "./Information.module.css";

export default function Information() {
  return (
    <div className={styles.containerInfo}>
      <h3 className={styles.titleInfo}>Sobre nosotros</h3>
      <p className={styles.info}>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit
        sint ut vero, beatae a nemo possimus debitis ullam delectus,
        necessitatibus commodi atque incidunt neque dolorem impedit. Nemo
        perspiciatis sapiente odit? Reprehenderit sint ut vero, beatae a nemo
        possimus debitis ullam delectus, necessitatibus commodi atque incidunt
        neque dolorem impedit. Nemo perspiciatis sapiente odit? Reprehenderit
        sint ut vero, beatae a nemo possimus debitis ullam delectus,
        necessitatibus commodi atque incidunt neque dolorem impedit. Nemo
        perspiciatis sapiente odit?
      </p>
    </div>
  );
}
