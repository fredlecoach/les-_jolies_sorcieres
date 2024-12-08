import { Link, useParams } from "react-router-dom";
import "../styles/Medecines.css";
import 'animate.css';
import { useEffect } from "react";

export default function Medecines({ medecines }) { // Ajout des accolades pour destructurer la prop
  useEffect(
    () => {
      const buttonShakeY = document.querySelector(".bouton");
      buttonShakeY.classList.add("animate__animated", "animate__shakeY")


      // const italic= document.querySelector(".divide-band");
      // italic.innerHTML= "<em>Leurs pouvoirs</em>"

    }, []
  )

  const { id } = useParams(); // Récupération de l'id depuis l'URL
  const medecine = medecines.find((p) => p.id === Number(id)); // Recherche de la médecine correspondante
  
  if (!medecine) {
    return <div className="container">Aucune pratique trouvée</div>;
  }


  
  return (
    <>
      <div className="container">
        <h2>{medecine.name}</h2>
        <img src={medecine.image[2]} alt={medecine.name} className="object-fit-cover img-fluid" style={{height: "400px", width: "100%"}} />
      </div>
      <div className="divide-band">
        <h2>Leurs pouvoirs <i class="bi bi-magic fs-3 fw-bold text-light"></i></h2>
      </div>
      <div className="container">
        <p style={{textAlign:"justify"}} className="col-8 mx-auto">{medecine.description}</p>
      </div>
      <div className="divide-band">
        <h2>Les bienfaits <i class="bi bi-bag-heart fs-3 fw-bold text-light"></i></h2>
      </div>
      <div className="container">
        <p style={{textAlign:"justify"}} className="col-8 mx-auto">{medecine.bienfaits}</p>
      </div>
      <div className="divide-band">
        <h2>Leurs utilisations <i class="bi bi-brush fs-3 fw-bold text-light"></i></h2>
      </div>
      <div className="container">
        <p style={{textAlign:"justify"}} className="col-8 mx-auto">{medecine.utilisation}</p>
        <div className="my-5">
          <Link to="/contact" className="btn bouton mx-auto">Réserver ma séance</Link>
        </div>
        
      </div>
      
    </>
  );
}
