import rebecca from "../assets/rebecca.jpg";
import chakra from "../assets/chakra.gif";

export default function Contacter() {
  return (
    <>
    <div className="d-flex justify-content-center mb-5">
      <img src={chakra} alt="gif chakra" />
    </div>
    <div className="row row-cols-md-2 d-flex justify-content-around container mx-auto">
      
      {/* Informations de contact */}
      <div className="col">
        <div className="card" style={{ maxWidth: "75%", height: "auto" }}>
          <img src={rebecca} className="card-img-top" alt="Portrait de Rebecca Cremonini" />
          <div className="card-body">
            <h5 className="card-title">Rebecca Cremonini</h5>
            <ul className="list-unstyled">
              <li>
                <i className="bi bi-phone-vibrate fs-3"></i> Mobile: 123-456-7890
              </li>
              <li>
                <i className="bi bi-envelope fs-3"></i> Email: <a href="mailto:rebecca.cremonini@gmail.com">Me contacter</a>
              </li>
              <li>
              <i class="bi bi-house-gear fs-3"></i> Domicile : 9 rue de montmartre, 75012 Paris
              </li>
              <li>
              <i class="bi bi-buildings fs-3"></i> Bureau : 45 rue des lombards, 75003 Paris
              </li>
            </ul>
            <p className="card-text">Je vous accompagne sur le chemin de la guérison et du bien-être</p>
          </div>
        </div>
      </div>

      {/* Formulaire de contact */}
      <div className="col">
        <fieldset>
          <legend>Formulaire de contact</legend>
          <form>
          <div className="form-floating mb-3">
            <input type="text" className="form-control" id="floatingFirstName" placeholder="Prénom" />
            <label htmlFor="floatingFirstName">Prénom</label>
          </div>
          <div className="form-floating mb-3">
            <input type="text" className="form-control" id="floatingName" placeholder="Nom" />
            <label htmlFor="floatingName">Nom</label>
          </div>
          <div className="form-floating mb-3">
            <input type="email" className="form-control" id="floatingMail" placeholder="name@example.com" />
            <label htmlFor="floatingMail">Adresse Mail</label>
          </div>
          <div className="form-floating mb-3">
            <input type="tel" className="form-control" id="floatingNumber" placeholder="0697690...." />
            <label htmlFor="floatingNumber">N° mobile / fixe</label>
          </div>
          <div>
            <textarea className="form-control mb-3" placeholder="Posez-nous toutes vos questions" rows={14} ></textarea>
          </div>
          <div className="form-floating mb-3 d-flex justify-content-end">
            <button className="btn bouton">Envoyer</button>
          </div>
    
          </form>
        </fieldset>
      </div>
    </div>
    
    </>
  );
}
