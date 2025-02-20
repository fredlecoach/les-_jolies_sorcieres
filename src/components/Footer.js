export default function Footer() {
  return (
    <footer className="footer ">
      {/* Informations du footer */}
      <hr />
      <div className="container py-4">
        <div className="row text-center">
          {/* Horaires */}
          <div className="col-md-4 mb-4">
            <h4>Horaires de consultations</h4>
            <div className="table-responsive">
              <table className="table table-bordered">
                <thead className="table-success">
                  <tr>
                    <th></th>
                    <th>Lundi - Mercredi</th>
                    <th>Jeudi - Vendredi</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>Matin</td>
                    <td>9h00 - 12h00</td>
                    <td>10h00 - 12h00</td>
                  </tr>
                  <tr>
                    <td>Après-midi</td>
                    <td>14h00 - 17h00</td>
                    <td>14h00 - 16h00</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>

          {/* Informations pratiques */}
          <div className="col-md-4 mb-4">
            <h4>Informations pratiques</h4>
            <ul className="list-unstyled">
              <li><strong>Cabinet Les jolies sorcières</strong></li>
              <li>Médecines alternatives</li>
              <li>📍 123, rue de la République, 75001 Paris</li>
            </ul>
          </div>

          {/* Conditions */}
          <div className="col-md-4 mb-4">
            <h4>Nos conditions</h4>
            <p><a href="#" className="text-decoration-none" style={{color :"#d8c248"}}>Conditions générales d'utilisation</a></p>
            <p><a href="#" className="text-decoration-none" style={{color :"#d8c248"}}>Conditions générales de vente</a></p>
            <p>&copy; Tous droits réservés</p>
          </div>
        </div>
      </div>

      {/* Copyright */}
      <div className="text-center fw-bold text-light py-2" style={{ backgroundColor: "#4B4F40" }}>
        <small>FredRc - &copy; Copyright - Tous droits réservés</small>
      </div>
    </footer>
  );
}
