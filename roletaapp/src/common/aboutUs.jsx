import React, { Component } from "react";

class AboutUs extends Component {
  render() {
    return (
      <body id="page-top">
        <header className="bg-primary bg-gradient text-white">
          <div className="container px-4 text-center">
            <h1 className="fw-bolder">Welcome to Roleta App!</h1>
            <a className="btn btn-lg btn-light mb-3" href="#about">
              Start scrolling!
            </a>
          </div>
        </header>
        <section id="about">
          <div className="container px-4 mt-5">
            <div className="row gx-4 justify-content-center">
              <div className="col-lg-8">
                <h2>About this page</h2>
                <p className="lead">
                  This webpage is only an experiment on trying new stuff on
                  react, it has been a very good experience for me, i have also
                  learn lots of different things while programing this webpage!
                </p>
                <ul>
                  <li>
                    Clickable nav links that smooth scroll to page sections
                  </li>
                  <li>
                    Responsive behavior when clicking nav links perfect for a
                    one page website
                  </li>
                  <li>
                    Bootstrap's scrollspy feature which highlights which section
                    of the page you're on in the navbar
                  </li>
                  <li>
                    Minimal custom CSS so you are free to explore your own
                    unique design options
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>
        <section className="bg-light" id="services">
          <div className="container px-4 mt-5">
            <div className="row gx-4 justify-content-center">
              <div className="col-lg-8">
                <h2>Services we offer</h2>
                <p className="lead">
                  In this webpage you can select a type of blind add as many of
                  the blinds as you want and you can also calculate the amount
                  of money you have to pay for your blinds
                </p>
              </div>
            </div>
          </div>
        </section>
        <section id="contact">
          <div class="container px-4 mt-5">
            <div class="row gx-4 justify-content-center">
              <div class="col-lg-8">
                <h2>Contact us</h2>
                <p class="lead">
                  Down below u have a link on my name in which you can contact
                  me. Please do so!.
                </p>
              </div>
            </div>
          </div>
        </section>
        <footer className="py-5 bg-dark mt-2">
          <div className="container px-4">
            <p className="m-0 text-center text-white">
              Copyright &copy; Your Website 2022
            </p>
          </div>
        </footer>
      </body>
    );
  }
}

export default AboutUs;
