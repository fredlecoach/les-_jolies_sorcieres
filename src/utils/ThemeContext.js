import React, { createContext, useState, useContext } from 'react';

// Créer le contexte
const ThemeContext = createContext();

// Créer un Provider pour encapsuler l'application
export const ThemeProvider = ({ children }) => {
  // L'état du thème (par défaut le mode clair)
  const [isDarkMode, setIsDarkMode] = useState(false);

  // Fonction pour basculer entre les modes
  const toggleTheme = () => {
    setIsDarkMode(prevMode => !prevMode);
  };

  return (
    <ThemeContext.Provider value={{ isDarkMode, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

// Hook pour accéder au contexte dans les composants
export const useTheme = () => useContext(ThemeContext);
