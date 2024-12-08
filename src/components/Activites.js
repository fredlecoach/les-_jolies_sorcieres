import { useParams } from "react-router-dom"; //sert à récupérer les paramètres de chaque fiche
import "../styles/Home.css";
import { Link } from "react-router-dom";

export default function Activites({ pratiques }) {
  const { id } = useParams();
  const pratique = pratiques.find((p) => p.id === Number(id) );

  if (!pratique) {
    return <div className="container">Aucune pratique trouvée.</div>;
  }

  return (
    <div className="d-flex justify-content-between row m-5">
      <div className="col">
        <img src={pratique.image[2]} alt="Illustration" style={{width: "700px", height:"500px"}} className="object-fit-cover" />
      </div>
      <div className="col">
        <h2 className="card-title display-5 pb-2" style={{color: "#dab779", fontFamily:"Pirata One"}}>{pratique.name}</h2>
        <ul className="card-text list-unstyled" style={{textAlign: "justify"}}>
          <li><h4>Leurs pouvoirs <i class="bi bi-magic fs-3 fw-bold" style={{color: "#5b268f"}}></i></h4><p>{pratique.description}</p></li>
          <li><h4>Les bienfaits <i class="bi bi-bag-heart fs-3 fw-bold text-danger"></i></h4><p>{pratique.bienfaits}</p> </li>
          <li><h4>Leur utilisation <i class="bi bi-brush fs-3 fw-bold text-success"></i></h4><p>{pratique.utilisation}</p> </li>
        </ul>
        <Link to="/contact" className="btn bouton">
          Réserver ma séance
        </Link>
      </div>
    </div>
  );
}
