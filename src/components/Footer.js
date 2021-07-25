import React from "react";

export default function Footer({ darkMode }) {
  return (
    <div className={darkMode ? "footer-dark" : "footer"}>
      <p>
        Made with React at{" "}
        <a href="https://www.lereacteur.io/" target="blank">
          Le Reacteur
        </a>{" "}
        by{" "}
        <a href="https://github.com/tommy211369" target="blank">
          {" "}
          Tommy Thongrasamy
        </a>
      </p>
    </div>
  );
}
