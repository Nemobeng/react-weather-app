import React from "react";
import "./Footer.css";

export default function Footer() {
  return (
    <div className="Footer">
      <footer>
        This project was coded by{" "}
        <a
          href="https://www.linkedin.com/in/nermine-obeng-62047a171/"
          target="_blank"
          rel="noopener noreferrer"
        >
          Nermine Obeng
        </a>{" "}
        and is open-sourced on{" "}
        <a
          href="https://github.com/Nemobeng/react-weather-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          {" "}
          GitHub.
        </a>{" "}
        Hosted on{" "}
        <a
          href="https://eager-fermat-c8375d.netlify.app/"
          target="_blank"
          rel="noopener noreferrer"
        >
          Netlify.
        </a>
      </footer>
    </div>
  );
}
