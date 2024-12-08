import Header from "./Header";
import Carousel from "./Carousel";
// import HomePage from "./HomePage"; // Nouvelle page
import Activites from "./Activites";
import Contacter from "./Contact";
import { Pratiques } from "../utils/Pratiques";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Presenter from "./Presentation";
import Footer from "./Footer"
import Honoraires from "./Honoraires";
import TopBar from "./TopBar";
import Medecines from "./Medecines";
import RendezVous from "./Rdv";
import Accueil from "./Accueil";
import Accepter from "./Acceptation";

function App() {
  return (
    <Router>
      <div className="App">
        <TopBar />
        <Header />
        <Carousel />
        <Routes>
          {/* Route pour la page d'accueil */}
          {/* <Route path="/" element={<HomePage />} /> */}

          {/* Route pour afficher les détails d'une activité */}
          <Route
            path="/activites/:id"
            element={<Activites pratiques={Pratiques} />}
          />
          {/* Route pour afficher la page de contact */}
          <Route path="/contact" element={ <Contacter />} />

          {/* route pour afficher la page de présentation */}
          <Route path="/presentation" element={ <Presenter />} />

          {/* Route page rendez-vous */}
          <Route path="/rdv" element={ <RendezVous />} />

          {/* route page Honoraires */}
          <Route path="/honoraires" element={ <Honoraires />} />

          {/* route page medecines */}
          <Route path="/medecines/:id" element={ <Medecines medecines={Pratiques} />} />

          {/* Route page Accueil */}
          <Route path="/" element={ <Accueil />} />

          {/* route page acceptation */}
          <Route path="/acceptation" element={ <Accepter />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
