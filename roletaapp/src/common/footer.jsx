import React, { Component } from "react";

class Footer extends Component {
  render() {
    return (
      <footer className="text-center bg-light text-white fixed-bottom">
        <div className="container">
          <div className="text-center text-black">
            Made By:
            <a
              className="text-black"
              href="https://www.linkedin.com/in/adonis-shala-ba5059185/"
            >
              {" "}
              Adonis Shala
            </a>
          </div>
        </div>
      </footer>
    );
  }
}

export default Footer;
