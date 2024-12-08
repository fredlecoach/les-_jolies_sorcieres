import "../styles/Accueil.css"
import lumiere from "../assets/soleil.jpg";
import aimer from "../assets/aimer.jpg";
import { Link } from "react-router-dom";
import { useEffect } from "react";
import 'animate.css'

export default function Accueil(){

  useEffect(
    () => {
      const boutons = document.querySelectorAll(".bing");
      boutons.forEach(
        (bouton) => {bouton.classList.add("animate__animated", "animate__bounce");}
      )
    },[]
  )

  return (
    <>
    <div className="container">
      <h2 className="text-center py-2" style={{backgroundColor:"rgb(220, 244, 232)"}}>Bienvenue dans votre espace bien-être</h2>
      <p>Prenez une pause, respirez profondément et laissez-vous guider vers un univers dédié à l’harmonie du corps, de l’esprit et de l’âme. Nous vous proposons une variété de pratiques bien-être conçues pour vous reconnecter à vous-même et cultiver un équilibre intérieur.</p>

      <p>Explorez des soins comme :</p>
      <ul>
        <li>le Reiki, une méthode énergétique douce pour apaiser les tensions et harmoniser vos énergies</li>
        <li>les Constellations Familiales, qui vous aident à libérer des schémas émotionnels en profondeur</li>
        <li>Découvrez également la puissance méditative des bols tibétains, avec leurs vibrations apaisantes</li>
        <i>initiez-vous à la méditation guidée pour retrouver calme et clarté dans votre quotidien</i>
      </ul>

      <p>Notre mission ? Vous offrir un moment hors du temps, où bienveillance et sérénité vous accompagnent à chaque étape. Prenez soin de vous, car vous le méritez pleinement.</p>
    </div>

    <div className="accueil-band">
      <p className="display-3" style={{ fontStyle:"italic"}}>Apaiser ses blessures</p>
    </div>

    <div className="container" style={{textAlign:"justify"}}>
      <h2 className="text-center py-2" style={{backgroundColor:"rgb(220, 244, 232)"}}>Apprenez à vous recentrer sur vous-même</h2>
      <p>Vous avez tendance à faire passer les besoins des autres avant les vôtres ? À dire "oui" alors que votre cœur vous souffle "non" ? Cette habitude, souvent motivée par un grand sens du devoir ou la peur de décevoir, peut vous amener à vous éloigner de vos propres envies, voire à vous épuiser émotionnellement et physiquement.</p>
      <p>Et si vous appreniez à vous écouter, à poser des limites et à vous accorder la place que vous méritez dans votre propre vie ? Prendre soin de vous, ce n’est pas de l’égoïsme, c’est une nécessité pour mieux avancer et être pleinement disponible pour ceux qui comptent pour vous.</p>
      <p>Nous vous invitons à explorer des pratiques qui vous aideront à vous recentrer et à retrouver un équilibre harmonieux entre vos besoins et ceux des autres. Parce que dire "oui" à soi-même, c’est aussi un acte d’amour envers les autres.</p>

      <div className="row row-cols-md-2 my-5 text-center">
        <div className="col  py-5">
          <div className="card bg-accueil">
            <img src={aimer} alt="bien-être" className="w-100  card-img-top img-fluid"  style={{height:"500px"}} />
            <div className="card-body">
              <h5 className="card-title">S'accepter, se libérer et s'aimer</h5>
              <p className="card-text">Découvrez comment libérez vos émotions, osez être vous, honnête et spontanée</p>
              <div className="d-flex justify-content-center">
                <Link to="/contact" className="btn bouton bing">Découvrir</Link>
              </div>
            </div>
          </div>
        </div>
        <div className="col  py-5">
          <div className="card bg-accueil">
            <img src={lumiere} alt="bien-être" className="w-100 card-img-top img-fluid" style={{height:"500px"}}/>
            <div className="card-body">
              <h5 className="card-title"> Libérez vous de vos peurs et révélez votre lumière intérieure</h5>
              <p className="card-text">Apprendre à s'ouvrir, c'est s'ouvrir sur un monde infini</p>
              <div className="d-flex justify-content-center">
                <Link to="/acceptation" className="btn bouton bing">Découvrir</Link>
              </div>
            </div>
          </div>
        </div>


      </div>




    </div>

    
    </>
  )
}