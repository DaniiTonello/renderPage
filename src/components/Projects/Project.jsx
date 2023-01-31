import React from "react";

import styles from "./Project.module.css";

export default function Projects() {
  return (
    <div className={styles.projects}>
      <h2 className={styles.title}>
        <a href="<../Projects/Projects.jsx>">Proyectos</a>
      </h2>
      <div className={styles.containerProjects}>
        <img
          className={styles.imagen}
          src="/images/Electiva/DT/Imagen6_003.png"
          alt=""
        />

        <img
          className={styles.imagen}
          src="/images/Electiva/DT/RenderDiurno4.png"
          alt=""
        />

        <img
          className={styles.imagen}
          src="/images/Electiva/DT/RenderDiurno.png"
          alt=""
        />

        <img
          className={styles.imagen}
          src="/images/Taller/NR/aerea 3.jpg"
          alt=""
        />
      </div>
      <p className={styles.link}>
        <a href="#">Ver más proyectos</a>
      </p>
    </div>
  );
}
