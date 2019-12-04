import React from "react";

export default class Navbar extends React.Component {
  render() {
    return (
      <header>
        <nav className="navbar navbar-expand-md my-2 my-sm-5 my-md-5 my-2 navbar-dark bg-transparent text-white border-bottom border-white ">
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
            <ul className="navbar-nav m-auto text-center">
              <li className="nav-item active">
                <a
                  className="h5 m-3 text-white font-weight-bold text-uppercase "
                  href="#"
                >
                  about
                </a>
              </li>
              <li className="nav-item">
                <a
                  className="h5 m-3 text-white font-weight-bold text-uppercase"
                  href="#"
                >
                  menu
                </a>
              </li>
              <li className="nav-item">
                <a
                  className="h5 m-3 text-white font-weight-bold text-uppercase"
                  href="#"
                >
                  order
                </a>{" "}
              </li>{" "}
              <li className="nav-item">
                <a
                  className="h5 m-3 text-white font-weight-bold text-uppercase"
                  href="#"
                >
                  gallery
                </a>
              </li>
            </ul>
          </div>
        </nav>
      </header>
    );
  }
}
