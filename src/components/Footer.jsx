import React from "react";
import "./Footer.css";
import github from "../assets/github.png";
import gmail from "../assets/gmail.png";
import linkedin from "../assets/linkedin.png";
function Footer() {
  const owner = "JagadeeswarJ";
  const repo = "TaskFlow";

  return (
    <div className="footer">
      <div className="footer-container">
        <div className="col-1">
          <h1 className="title">TaskFlow</h1>
          <p>
            TaskFlow is a versatile todo application designed to help you manage
            your tasks efficiently
          </p>
        </div>
        <div className="col-2">
          <h2>Get in touch</h2>
          <div>
            <a href="https://github.com/JagadeeswarJ" target="_blank">
              <img src={github}></img>
            </a>
            <a href="mailto:jagadeeswar079@gmail.com" target="_blank">
              <img src={gmail}></img>
            </a>
            <a
              href="https://www.linkedin.com/in/jagadeeswar-jonnadula-846546286/"
              target="_blank"
            >
              <img src={linkedin}></img>
            </a>
          </div>
        </div>
        <div className="col-3">
          <h2>This Project is on github</h2>
          <div className="git-links">
            <iframe
              src={`https://ghbtns.com/github-btn.html?user=${owner}&repo=${repo}&type=star&count=true`}
              frameBorder="0"
              width="150"
              height="70"
              title="GitHub-stars"
              className="git-link"
            ></iframe>
            <iframe
              src={`https://ghbtns.com/github-btn.html?user=${owner}&repo=${repo}&type=fork&count=true`}
              frameBorder="0"
              width="150"
              height="70"
              title="GitHub-forks"
              className="git-link"
            ></iframe>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
