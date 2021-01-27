import React from "react";
function About() {
  return (
    <div>
      <header>
        <h1 id="aboutTitle">About Us</h1>
      </header>
      <body id="aboutBody">
        <br />
        <p>
          We are an e-commerce website specializing in hard-to-get computer
          hardware. Our mission is to connect those who wish to purchase
          computer hardware parts that are difficult to find to either third
          party or first party sellers.
        </p>
      </body>
      <footer id="aboutFooter">
        <div>
          <h2>
            This website was created by CUNY-CSI Computer Science students:
          </h2>
          <ul>
            <li>Andris Murnieks</li>
            <li>Michael Venturi</li>
            <li>Justin Goodchild</li>
            <li>Daniel Targonski</li>
          </ul>
          <br />
        </div>
      </footer>
    </div>
  );
}
export default About;
