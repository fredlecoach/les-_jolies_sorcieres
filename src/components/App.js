import React, { useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { ThemeProvider, useTheme } from "../utils/ThemeContext"; // Import ThemeProvider et useTheme
import Header from "./Header";
import Carousel from "./Carousel";
import Activites from "./Activites";
import Contacter from "./Contact";
import { Pratiques } from "../utils/Pratiques";
import Presenter from "./Presentation";
import Footer from "./Footer";
import Honoraires from "./Honoraires";
import TopBar from "./TopBar";
import Medecines from "./Medecines";
import RendezVous from "./Rdv";
import Accueil from "./Accueil";
import Accepter from "./Acceptation";

function AppContent() {
  const { isDarkMode } = useTheme(); // Accéder au mode actuel (clair/sombre)

  // Appliquer la classe `dark` ou `light` au body selon le mode
  useEffect(() => {
    if (isDarkMode) {
      document.body.classList.add("dark");
      document.body.classList.remove("light");
    } else {
      document.body.classList.add("light");
      document.body.classList.remove("dark");
    }
  }, [isDarkMode]);

  return (
    <div className="App">
      <TopBar />
      <Header />
      <Carousel />
      <Routes>
        {/* Route pour la page d'accueil */}
        <Route path="/" element={<Accueil />} />

        {/* Route pour afficher les détails d'une activité */}
        <Route path="/activites/:id" element={<Activites pratiques={Pratiques} />} />

        {/* Route pour afficher la page de contact */}
        <Route path="/contact" element={<Contacter />} />

        {/* Route pour afficher la page de présentation */}
        <Route path="/presentation" element={<Presenter />} />

        {/* Route page rendez-vous */}
        <Route path="/rdv" element={<RendezVous />} />

        {/* Route page honoraires */}
        <Route path="/honoraires" element={<Honoraires />} />

        {/* Route page médecines */}
        <Route path="/medecines/:id" element={<Medecines medecines={Pratiques} />} />

        {/* Route page acceptation */}
        <Route path="/acceptation" element={<Accepter />} />
      </Routes>
      <Footer />
    </div>
  );
}

function App() {
  return (
    <ThemeProvider>
      <Router>
        <AppContent />
      </Router>
    </ThemeProvider>
  );
}

export default App;
