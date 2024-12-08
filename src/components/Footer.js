export default function Footer() {
  return (
    <div
      style={{ backgroundColor: "rgb(220, 244, 232)", marginTop: "100px" }}
      className="row row-cols-md-3 text-center py-3"
    >
      <div className="col">
        <h4>Horaires de consultations</h4>
        <table className="border border-collapse mx-auto">
          <thead>
            <tr>
              <th style={{border: "1px solid #fff"}}></th>
              <th style={{border: "1px solid #fff"}} className="p-2">Lundi - Mercredi</th>
              <th style={{border: "1px solid #fff"}} className="p-2">Jeudi - Vendredi</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td style={{border: "1px solid #fff"}} className="p-2">Matin</td>
              <td style={{border: "1px solid #fff"}} className="p-2">9h00 - 12h00</td>
              <td style={{border: "1px solid #fff"}} className="p-2">10h00 - 12h00</td>
            </tr>
            <tr>
              <td style={{border: "1px solid #fff"}} className="p-2">Après-midi</td>
              <td style={{border: "1px solid #fff"}} className="p-2">14h00 - 17h00</td>
              <td style={{border: "1px solid #fff"}} className="p-2">14h00 - 16h00</td>
            </tr>
          </tbody>
        </table>
      </div>

      <div className="col">
        <h4>Informations pratiques</h4>
        <ul className="list-unstyled">
          <li>Cabinet Les jolies sorcières</li>
          <li>Médecines alternatives</li>
          <li>Adresse : 123, rue de la République, 75001 Paris</li>
        </ul>
      </div>

      <div className="col">
        <h4>Nos conditions</h4>
        <p>Conditions générales d'utilisation</p>
        <p>Conditions générales de vente</p>
        <p>&copy; Tous droits réservés</p>
      </div>
    </div>
  );
}
