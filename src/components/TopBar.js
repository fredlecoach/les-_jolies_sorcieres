import { Link } from "react-router-dom";
import "../styles/TopBar.css"

export default function TopBar(){
  return (
    <div>
      <section className="top-bar d-flex justify-content-between">
        <div className="d-flex align-items-center mx-3">
          <i className="bi bi-flower1 mx-2 fs-4" style={{color: "#dab779"}}></i> Découvrez des séjours retraites bien-être pour se recentrer sur vous-même <i className="bi bi-flower1 mx-2 fs-4" style={{color: "#dab779"}}></i>
        </div>

        
        <div>
         <Link to="/contact" className="btn btn-top my-2 mx-3">Contactez-moi</Link>
        </div>
        
      </section>
    </div>
    
  )
}