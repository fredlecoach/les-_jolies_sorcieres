import logo from "../assets/logo3.jpg";
import "../styles/Header.css";
import { Link } from "react-router-dom";

export default function Header() {
  return (
    <header className="navbar navbar-expand-lg navbar-light">
      <div className="container-fluid">
        {/* Logo à gauche */}
        <Link to="/" className="navbar-brand">
          <img src={logo} alt="Logo" style={{ width: "150px" }} />
        </Link>

        {/* Bouton pour mobiles */}
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        {/* Titre centré */}
        <div className="mx-auto text-center">
          <h1
            className="text-uppercase"
            style={{
              fontFamily: "Pirata One",
              color: "#cca463",
              margin: "0",
            }}
          >
            Les jolies sorcières
          </h1>
        </div>

        {/* Menu de navigation */}
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ms-auto">

          <li className="nav-item">
              <Link to="/" className="nav-link">
                Accueil
              </Link>
            </li>

            {/* <li className="nav-item">
              <Link to="/" className="nav-link">
                Home
              </Link>
            </li> */}

            {/* Dropdown pour les pratiques */}
            <li className="nav-item dropdown">
              <span
                className="nav-link dropdown-toggle"
                id="pratiquesDropdown"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                Pratiques
              </span>
              <ul className="dropdown-menu" aria-labelledby="pratiquesDropdown">
                <li>
                  <Link to="/medecines/1" className="dropdown-item">
                    Bols tibétains
                  </Link>
                </li>
                <li>
                  <Link to="/medecines/2" className="dropdown-item">
                    Méditation
                  </Link>
                </li>
                <li>
                  <Link to="/medecines/3" className="dropdown-item">
                    Constellations familiales
                  </Link>
                </li>
                <li>
                  <Link to="/medecines/4" className="dropdown-item">
                    Lithothérapie
                  </Link>
                </li>
                <li>
                  <Link to="/medecines/5" className="dropdown-item">
                    Reiki
                  </Link>
                </li>
                <li>
                  <Link to="/medecines/6" className="dropdown-item">
                    Les soins angéliques
                  </Link>
                </li>
              </ul>
            </li>

            <li className="nav-item">
              <Link to="/presentation" className="nav-link text-capitalize">
                Mon histoire
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/rdv" className="nav-link">
              Prendre rendez-vous
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/honoraires" className="nav-link text-capitalize">
                Honoraires
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/contact" className="nav-link">
                Contact
              </Link>
            </li>
            
          </ul>
        </div>
      </div>
    </header>
  );
}
