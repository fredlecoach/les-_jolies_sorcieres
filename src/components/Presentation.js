import { useEffect } from "react";
import rebecca from "../assets/rebecca.jpg";
import { Link } from "react-router-dom";
import "animate.css"

export default function Presenter() {

  useEffect(
    ()=>{
      const buttonShakeX = document.querySelector(".shake");
      buttonShakeX.classList.add("animate__animated", "animate__shakeX");
    }, []
  )


  return (
    <div className="card mb-3 mx-auto w-100" >
      <div className="row g-0 d-flex align-items-center">
        {/* Image côté gauche */}
        <div className="col-md-4">
          <img
            src={rebecca}
            className="img-fluid rounded-start"
            alt="Rebecca Cremonini"
          />
        </div>
        
        {/* Contenu côté droit */}
        <div className="col-md-8">
          <div className="card-body" style={{textAlign: "justify"}}>
            <h5 className="card-title">
              Rebecca Cremonini : Energéticienne & thérapeute en constellations familiales
            </h5>
            <p className="card-text">
              L’énergéticien-thérapeute est un praticien qui utilise des techniques énergétiques pour rééquilibrer les troubles liés aux déséquilibres énergétiques du corps. Il accueille les patients en cabinet pour soigner les troubles psycho-somatiques.
            </p>
            
            <h6>Compétences :</h6>
            <ul>
              <li>Connaissance des principes de l’énergétisme et de la médecine traditionnelle chinoise</li>
              <li>Maîtrise de techniques énergétiques telles que le magnétisme, le reiki, l’acupression, la digitopuncture, etc.</li>
              <li>Capacité à évaluer l’état énergétique général d’un patient</li>
              <li>Capacité à identifier les points de blocage et les déséquilibres énergétiques</li>
              <li>Capacité à utiliser des techniques thérapeutiques pour rééquilibrer les énergies</li>
              <li>Connaissance de la psychologie et de la psychothérapie</li>
              <li>Capacité à établir une relation de confiance avec les patients</li>
            </ul>

            <h6>Responsabilités :</h6>
            <ul>
              <li>Évaluer l’état énergétique des patients et identifier les troubles énergétiques</li>
              <li>Utiliser des techniques énergétiques pour rééquilibrer les énergies et soigner les troubles psycho-somatiques</li>
              <li>Accomplir des séances de thérapie énergétique en cabinet ou en entreprise</li>
              <li>Maintenir des dossiers patients et des registres de traitements administrés</li>
              <li>S’assurer de la confidentialité et de l’intégrité des patients</li>
            </ul>
            
            {/* Bouton de contact */}
            <div className="d-flex justify-content-center">
              <Link to="/contact" className="btn bouton shake mt-3">
                Réserver ma séance
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
