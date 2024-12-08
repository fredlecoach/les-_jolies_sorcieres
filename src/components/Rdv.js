import { Link } from "react-router-dom";
import cadeau from "../assets/cadeau.jpg"

export default function RendezVous(){
  return (
    <>
    <div className="row row-cols-md-2 container mx-auto" style={{marginTop:"150px"}}>

      {/* 1ere colonne */}
      <div className="col" >
        <h2 style={{backgroundColor: "#F3E2C4"}} className="p-2 text-center"> <span className="text-light">Rendez-vous </span>EN LIGNE</h2>
          <div className="border rounded p-2">
          <ul className="list-unstyled" >
            <li style={{lineHeight:"50px"}}><i className="bi bi-house-heart fs-3" style={{color:"#97A080"}}></i> Restez confortablement chez vous, sans avoir besoin de vous déplacer.</li> 
            <li style={{lineHeight:"50px"}}><i class="bi bi-calendar-date fs-4" style={{color:"#97A080"}}></i> Choisissez un rendez-vous du lundi au vendredi de 09h00 à 20h00</li>
            <li><i class="bi bi-gear fs-4" style={{color:"#97A080"}}></i> Comment fonctionne un soin à distance ? <br/> Un soin fait à distance est un soin énergétique reliant la personne qui envoie l’énergie à celle qui reçoit le soin, comme une station de radio qui émet vers un poste de radio. La séance en distanciel a les mêmes résultats que la séance en présentiel.</li>
          </ul>
        </div>
      </div>

      <div className="col">
        <h2 style={{backgroundColor: "#F3E2C4"}} className="p-2 text-center"><span className="text-light">Rendez-vous</span> EN PRESENTIEL</h2>
        <div className="border rounded p-2">
          <ul className="list-unstyled" >
            <li style={{lineHeight:"50px"}}><i className="bi bi-buildings fs-4" style={{color:"#97A080"}}></i> À mon cabinet à Nanterre le vendredi uniquement</li>
            <li style={{lineHeight:"50px"}}><i className="bi bi-house-up-fill fs-4" style={{color:"#97A080"}}></i> À mon domicile à Rueil-Malmaison (j'ai un petit minou, si vous êtes allergiques)</li>
            <li><i className="bi bi-house-door fs-4" style={{color:"#97A080"}}></i> Chez vous pour toute séance de suivi incluses dans les packs de la rubrique <Link to ="/honoraires">honoraires</Link></li>
          </ul>
        </div>
      </div>

    </div>

    <div className="row row-cols-md-2 d-flex align-items-center p-3" style={{marginTop:"150px", backgroundColor: "#e8d2a8"}}>
      <div className="col" style={{paddingLeft:"150px"}}>
        <p className="fs-4">Vous avez besoin d'une séance découverte</p>
        <p className="fs-5">Je vous propose une séance découverte pour :</p>
        <ul className="list-unstyled fs-5">
          <li>Faire connaissance</li>
          <li>Comprendre vos envies, vos besoins, vos blocages éventuels</li>
          <li>Tester des croyances limitantes</li>
          <li>Réaliser un mini-soin énergétique / une guidance</li>
        </ul>

        <p className="fs-5 fw-bold">Cette séance gratuite de 30 minutes  est réservée aux nouveaux clients.</p>
        <Link to="/contact" className="btn bouton">Réserver ma séance</Link> 
      </div>

      <div className="col"  style={{paddingRight:"150px"}}>
        <img src={cadeau} alt="cadeau" className="w-100" />
      </div>

    </div>

    </>
  )
}