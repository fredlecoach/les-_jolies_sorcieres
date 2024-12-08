import "../styles/Accepter.css";
import epanouie from "../assets/epanouie.jpg";
import guerriere from "../assets/guerriere2.jpeg"
import { Link } from "react-router-dom";

export default function Accepter(){
  return (
    <>
      <div className="container">
        <h4>Un accompagnement sur mesure dans l'exploration de vos blessures pour vous guider vers une guérison spirituelle</h4>
      </div>
      <div className="accepter-band">
      <p className="display-3" style={{ fontStyle:"italic"}}>Vivre, Aimer, Vibrer</p>
      </div>

      <div className="container">
        <div className="row row-cols-md-2" style={{margin: "150px 0px",lineHeight:"30px"}}>
          {/* 1ere colonne */}
          <div className="col">
            <h4>Reprenez les rênes de votre vie et affirmez vos choix avec confiance</h4>
                  <p>Oser faire vos propres choix, les assumer pleinement, et avancer en tant qu’adulte responsable, sans craindre le rejet des autres ou chercher leur validation… Voilà un véritable chemin vers la liberté intérieure.</p>
                  <p>Pour mener une vie épanouie et alignée avec vos valeurs, la confiance en soi est essentielle. Elle vous permettra de :</p>
                  <ul>
                    <li>Prendre des décisions justes, adaptées à vos besoins : des décisions qui vous ressemblent</li>
                    <li>Exprimer vos besoins et vos désirs sans hésitation</li>
                    <li>Accepter vos émotions et vos pensées sans les juger</li>
                    <li>Fixer des limites claires et respecter vos priorités.</li>
                    <li>Construire un avenir serein, même face aux imprévus de la vie.</li>
                  </ul>
          </div>
          {/* 2eme colonne */}
          <div className="col">
            <img src={epanouie} alt="fille à lunettes de soleil" className="w-100"/>
          </div>
        </div>
      
        <div className="row row-cols-md-2" style={{lineHeight:"35px"}} >
          {/* 1ere colonne */}
          <div className="col">
            <img src={guerriere} alt="femme guerrière" className="w-100"/>
          </div>
          {/* 2eme colonne */}
          <div className="col">
            <h4>En renforçant votre confiance, vous découvrirez une version transformée et épanouie de vous-même. Vous serez capable de :</h4>
            <ul>
              <li>Prendre des risques constructifs et vous lancer dans de nouvelles aventures</li>
              <li>Exprimer vos sentiments et vos besoins avec assurance</li>
              <li>Accepter les changements et les incertitudes de la vie avec sérénité</li>
              <li>Dire "NON" chaque fois que cela ne résonne pas avec vos aspirations.</li>
              <li>Affirmer vos opinions avec assurance, que ce soit en réunion ou dans des moments clés de votre vie personnelle.</li>
              <li>Croire en vos capacités et sortir de votre zone de confort pour atteindre de nouveaux objectifs</li>
              <li>Mettre fin à des relations néfastes ou toxiques, pour retrouver votre équilibre.</li>
              <li>Faire taire cette petite voix critique et développer une vraie bienveillance envers vous-même.</li>
              <li>Suivre vos rêves, qu’il s’agisse de vous reconvertir, d’ouvrir enfin cette pâtisserie qui vous fait vibrer, ou de quitter la ville pour une vie au bord de la mer.</li>
            </ul>
            <h5>Et si, dès aujourd’hui, vous décidiez de faire de votre bonheur une priorité ?</h5>

          </div>
        </div>

        {/* bouton */}
        <div className="d-flex justify-content-center my-5">
          <Link to="/contact" className="btn bouton">Réserver ma séance</Link>
        </div>


      </div>
      
    </>
  )
}