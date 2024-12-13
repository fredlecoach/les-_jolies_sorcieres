import { Link } from "react-router-dom";
import "../styles/TopBar.css";
import { useTheme } from "../utils/ThemeContext";
import { useEffect } from "react";
import 'animate.css'

export default function TopBar(){
  const { isDarkMode, toggleTheme } = useTheme();

  useEffect(
    ()=>{
      const boutons = document.querySelector("button");
      boutons.classList.add("animate__animated", "animate__fadeIn")
      
      const contact= document.querySelector(".btn-top");
      contact.classList.add("animate__animated", "animate__shakeX")
    }, []
  )

  return (
    <div>
      <section className="top-bar d-flex justify-content-between">
        <div className="d-flex align-items-center mx-3">
          <i className="bi bi-flower1 mx-2 fs-4" style={{color: "#dab779"}}></i> Découvrez des séjours retraites bien-être pour se recentrer sur vous-même <i className="bi bi-flower1 mx-2 fs-4" style={{color: "#dab779"}}></i>
        </div>

        
        <div>
         <Link to="/contact" className="btn btn-top my-2 mx-3">Contactez-moi</Link>
          {/* Bouton mode sombre ou clair */}          
        <button
          className="btn btn-top my-2 mx-3"
          onClick={toggleTheme}
          style={{
            backgroundColor: isDarkMode ? "#abdbe3" : "#e28743",
            color: isDarkMode ? "#000" : "#fff",
            transition: "all 0.3s",
          }}
        >
         {isDarkMode ? (
            <span>
              Basculer vers mode <i className="bi bi-brightness-high-fill"></i>
            </span>
          ) : (
            <span>
              Basculer vers mode <i className="bi bi-moon-stars-fill"></i>
            </span>
          )}

        </button>
        </div>

        
        
      </section>
    </div>
    
  )
}