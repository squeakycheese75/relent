import React from "react";
import { Jumbotron } from "react-bootstrap";
import LinkedInBadge from "./LinkedInBadge";
import styles from "./AboutPage.css";

const AboutPage = () => {
  return (
    <div className={styles}>
      <Jumbotron>
        <h1>About me:</h1>
        <p>
          I'm a freelance software engineer and digital nomad. Currently living
          and working from...<s>London</s>, <s>Berlin</s>, <s>Barcelona</s>,
          Chamonix
        </p>
        <p>
          Feel free to <a href="mailto:james_wooltorton@hotmail.com">email</a>{" "}
          me with feedback/comments/suggestions.
        </p>
        {/* <Map /> */}

        <LinkedInBadge />
        <p>
          <a href="https://github.com/squeakycheese75/relent">
            <img
              src="./images/github.png"
              width="30"
              height="30"
              className="d-inline-block align-top"
              alt="GitHub"
            />{" "}
            version: 1.0.0
          </a>
        </p>
      </Jumbotron>
    </div>
  );
};

export default AboutPage;
