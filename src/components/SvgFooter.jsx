import React from "react";

import "../styles/SvgFooter.scss";

export default function SvgFooter() {
  return (
    <div className="wave">
      <svg
        className="wave__svg"
        viewBox="0 0 500 150"
        preserveAspectRatio="none"
      >
        <path
          className="wave__path"
          d="M-1.41,82.39 C171.27,149.50 328.72,-2.45 502.54,89.30 L500.00,150.00 L0.00,150.00 Z"
        ></path>
      </svg>
    </div>
  );
}
