import { Link } from "react-router-dom";
import "../styles/Home.css";

export default function Home({ name, image, resume, id }) {
  return (
    <div className="container">
      <div className="Card border rounded animation">
        <img
          src={image[0] || "default-image.jpg"}
          alt={name}
          className="img-fluid card-img-top w-100 object-fit-cover"
          style={{ height: "600px" }}
        />
        <div className="card-body m-2">
          <div className="d-flex justify-content-between">
            <div>
              <h2 className="card-title">{name}</h2>
              <p className="card-text">{resume}</p>
            </div>
            <Link to={`/activites/${id}`} className="btn bouton">
              Découvrir
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
