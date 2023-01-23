import React from "react";
import Figure from "react-bootstrap/Figure";

export default function CarouselProjects() {
  return (
    <div>
      <Figure>
        <Figure.Image
          width={171}
          height={180}
          alt="171x180"
          src="https://stillframerender.com/wp-content/uploads/2020/03/01Privada-Parque-Natura-DIse%C3%B1o-Arquitectonico-Fachada-Principal-Contemporanea.jpg"
        />
        <Figure.Caption>
          Nulla vitae elit libero, a pharetra augue mollis interdum.
        </Figure.Caption>
      </Figure>
      <Figure>
        <Figure.Image
          width={171}
          height={180}
          alt="171x180"
          src="https://stillframerender.com/wp-content/uploads/2020/03/01Privada-Parque-Natura-DIse%C3%B1o-Arquitectonico-Fachada-Principal-Contemporanea.jpg"
        />
        <Figure.Caption>
          Nulla vitae elit libero, a pharetra augue mollis interdum.
        </Figure.Caption>
      </Figure>
      <Figure>
        <Figure.Image
          width={171}
          height={180}
          alt="171x180"
          src="https://stillframerender.com/wp-content/uploads/2020/03/01Privada-Parque-Natura-DIse%C3%B1o-Arquitectonico-Fachada-Principal-Contemporanea.jpg"
        />
        <Figure.Caption>
          Nulla vitae elit libero, a pharetra augue mollis interdum.
        </Figure.Caption>
      </Figure>
    </div>
  );
}
