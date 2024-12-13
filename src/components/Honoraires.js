import { Link } from "react-router-dom";
import { useEffect } from "react";
import "animate.css";
import styled from "styled-components";

export default function Honoraires() {

  const StyledTitre = styled.h1`
    text-transform: capitalize;
    background-color: rgb(220, 244, 232);
    color: rgba(105, 20, 100, 0.5);
    padding: 10px;
    text-align: center;
  
  `

  useEffect(() => {
    // Ajoute les classes Animate.css après le montage
    const button = document.querySelector(".bounce");
    button.classList.add("animate__animated", "animate__bounce");
  }, []); // Effet appliqué au montage du composant

  return (
    <div className="container">

      <StyledTitre>tableau tarifaire de prestations</StyledTitre>


      <table className="table table-bordered table-hover text-center">
        <thead>
          <tr>
            <th scope="col" style={{ backgroundColor: "#4b4f40", color: "#fff" }}></th>
            <th scope="col" style={{ backgroundColor: "#4b4f40", color: "#fff" }}>
              Constellations familiales
            </th>
            <th scope="col" style={{ backgroundColor: "#4b4f40", color: "#fff" }}>
              Thérapie Bols tibétains
            </th>
            <th scope="col" style={{ backgroundColor: "#4b4f40", color: "#fff" }}>Lithothérapie</th>
            <th scope="col" style={{ backgroundColor: "#4b4f40", color: "#fff" }}>
              Cours de méditation
            </th>
            <th scope="col" style={{ backgroundColor: "#4b4f40", color: "#fff" }}>
              Bilan énergétique
            </th>
            <th scope="col" style={{ backgroundColor: "#4b4f40", color: "#fff" }}>Reiki</th>
            <th scope="col" style={{ backgroundColor: "#4b4f40", color: "#fff" }}>
              Soins angéliques
            </th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <th>Tarifs en euros, hors frais de déplacement</th>
            <td>90€</td>
            <td>80€</td>
            <td>70€</td>
            <td>60€</td>
            <td>50€</td>
            <td>70€</td>
            <td>70€</td>
          </tr>
          <tr>
            <th>Pack 3 séances</th>
            <td>250€</td>
            <td>220€</td>
            <td>190€</td>
            <td>160€</td>
            <td>130€</td>
            <td>190€</td>
            <td>190€</td>
          </tr>
          <tr>
            <th>Pack 5 séances</th>
            <td>400€</td>
            <td>360€</td>
            <td>320€</td>
            <td>280€</td>
            <td>240€</td>
            <td>320€</td>
            <td>320€</td>
          </tr>
          <tr>
            <th>Pack 8 séances</th>
            <td>680€</td>
            <td>620€</td>
            <td>560€</td>
            <td>500€</td>
            <td>440€</td>
            <td>560€</td>
            <td>560€</td>
          </tr>
        </tbody>
        <tfoot>
          <tr>
            <td colSpan={8} style={{ backgroundColor: "#97A080" }} className="text-light">
              Durée des séances : 01H00
            </td>
          </tr>
          <tr>
            <td colSpan={8}>
              Toute séance réservée est due si elle n’est pas annulée au moins 24 heures à l’avance.
            </td>
          </tr>
        </tfoot>
      </table>

      <div className="d-flex justify-content-end">
        <Link to="/contact" className="btn bouton bounce">
          Réserver ma séance
        </Link>
      </div>
    </div>
  );
}
