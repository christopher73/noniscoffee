import React from "react";
import { Link as SmoothLink, animateScroll as scroll } from "react-scroll";

import { Link } from "react-router-dom";
let lastScrollY = 0;

export default class Navbar extends React.Component {
  constructor(props) {
    super(props);
    this.state = { orderOnline: false };
  }
  componentDidMount() {
    window.addEventListener("scroll", this.handleScroll, true);
  }
  componentWillUnmount() {
    window.removeEventListener("scroll", this.handleScroll);
  }
  nav = React.createRef();

  handleScroll = () => {
    lastScrollY = window.scrollY;
    if (lastScrollY > 0) {
      this.nav.current.style.backgroundColor = "rgb(115, 31, 31,0.85)";
      this.setState({ orderOnline: true });
    } else {
      this.setState({ orderOnline: false });
    }
    // console.log(this.nav.current.style.backgroundColor);
  };
  render() {
    return (
      <header id="headerNav">
        <nav
          ref={this.nav}
          style={{ backgroundColor: "rgb(115, 31, 31,0.45)" }}
          className="navbar navbar-expand-md fixed-top  navbar-dark  border-bottom border-white "
        >
          <button
            className="navbar-toggler bg-transparent border-white ml-auto"
            type="button"
            data-toggle="collapse"
            data-target="#navbarCollapse"
            aria-controls="navbarCollapse"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarCollapse">
            <ul id="listNav" className="navbar-nav m-auto text-center p-3">
              <li className="nav-item ">
                <SmoothLink
                  activeClass="active"
                  to="mainDescription"
                  spy={true}
                  smooth={true}
                  offset={-80}
                  duration={1200}
                >
                  <p className="btn btn-lg btn-link text-white font-weight-bold text-uppercase py-0 my-0">
                    about
                  </p>
                </SmoothLink>
              </li>
              <li className="nav-item">
                <Link to="/">
                  <p className="btn btn-lg btn-link text-white font-weight-bold text-uppercase py-0 my-0">
                    menu
                  </p>
                </Link>
              </li>
              <li className="nav-item">
                <SmoothLink
                  activeClass="active"
                  to="photoGallery"
                  spy={true}
                  smooth={true}
                  offset={-80}
                  duration={1200}
                >
                  <p className="btn btn-lg btn-link text-white font-weight-bold text-uppercase py-0 my-0">
                    gallery
                  </p>
                </SmoothLink>
              </li>
              {!this.state.orderOnline ? null : (
                <li className="nav-item">
                  <Link to="/orderonline">
                    <p className="btn btn-outline-light border-white border rounded font-weight-bold text-uppercase py-0 my-0">
                      order online
                    </p>
                  </Link>
                </li>
              )}
            </ul>
          </div>
        </nav>
      </header>
    );
  }
}
