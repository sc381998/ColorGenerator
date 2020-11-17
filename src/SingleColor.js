import React, { useState, useEffect } from "react";
import rgbToHex from "./utils";

const SingleColor = ({ rgb, weight, index }) => {
  const [alert, setAlert] = useState(false);
  const bcg = rgb.join(",");

  return (
    <>
      <article
        className={`color ${index > 10 && "color-light"}`}
        style={{ background: `rgb(${bcg})` }}
      >
        <p className="percent-value">{weight}</p>
        <p className="color-value">{rgbToHex(...rgb)}</p>
      </article>
    </>
  );
};

export default SingleColor;
