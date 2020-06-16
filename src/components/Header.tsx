import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

const Header = () => {
  return (
    <React.Fragment>
      <header>
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
          <img
            src="https://logodownload.org/wp-content/uploads/2017/08/pokemon-logo.png"
            alt=""
            style={{ width: '200px'}}
          />

         
              <span className="nav-item active">
                <a className="nav-link" target="blank" href="https://pokeapi.co/">
                  PokeApi <span className="sr-only">(current)</span>
                </a>
              </span>

              <span className="nav-item active">
                <a className="nav-link" target="blank" href="https://pokeapi.co/">
                  Created by: danielPantalena <span className="sr-only">(current)</span>
                </a>
              </span>
            
          
        </nav>
      </header>
    </React.Fragment>
  );
};

export default Header;
