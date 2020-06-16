import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'jquery/dist/jquery.slim';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import './Header.css';

const Header = () => {
  return (
    <React.Fragment>
      <header>
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
          <img
            className="logo"
            src="https://logodownload.org/wp-content/uploads/2017/08/pokemon-logo.png"
            alt=""
            style={{ width: '200px' }}
          />
          <button
            className="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>

          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav mr-auto">
              <li className="nav-item active">
                <a className="nav-link" target="blank" href="https://pokeapi.co/">
                  <i className="fas fa-database fa-2x"></i>
                  <span>PokeApi</span>
                </a>
              </li>
              <li className="nav-item active">
                <a className="nav-link" target="blank" href="https://reactjs.org/">
                  <i className="fab fa-react fa-2x"></i>
                  <span>React</span>
                </a>
              </li>
              <li className="nav-item active">
                <a className="nav-link" target="blank" href="https://getbootstrap.com/">
                  <i className="fab fa-bootstrap fa-2x"></i>
                  <span>Bootstrap</span>
                </a>
              </li>
              <li className="nav-item dropdown">
                <span
                  className="nav-link dropdown-toggle active float-right"
                  id="navbarDropdown"
                  role="button"
                  data-toggle="dropdown"
                  aria-haspopup="true"
                  aria-expanded="false"
                >
                  <span>danielPantalena</span>
                </span>
                <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                  <a
                    className="dropdown-item"
                    target="blank"
                    href="https://danielpantalena.github.io"
                  >
                    Page
                  </a>
                  <a
                    className="dropdown-item"
                    target="blank"
                    href="https://www.linkedin.com/in/danielpantalena/"
                  >
                    LinkedIn
                  </a>
                  <div className="dropdown-divider"></div>
                  <a
                    className="dropdown-item"
                    target="blank"
                    href="https://github.com/danielPantalena"
                  >
                    GitHub
                  </a>
                </div>
              </li>
            </ul>
          </div>
        </nav>
      </header>
    </React.Fragment>
  );
};

export default Header;
