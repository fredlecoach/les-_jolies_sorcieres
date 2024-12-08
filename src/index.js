import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './components/App';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
// Applique la classe bg-light au body pour toute l'application
document.body.classList.add('custom-bg');

// // Ajout de l'audio au body
// const audio = document.createElement("audio");
// audio.src = process.env.PUBLIC_URL + "/audios/zen.mp3"; // Chemin relatif vers le fichier audio
// audio.loop = true; // Répétition en boucle
// audio.autoplay = true; // Lecture automatique
// audio.volume = 0.05; // Réduction du volume
// document.body.appendChild(audio);

// const playAudio = () => {
//   audio.play().catch((error) => {
//     console.error("La lecture automatique a été bloquée :", error);
//   });
// };
// document.body.addEventListener("click", playAudio);

// let isPlaying = false; // Variable pour suivre l'état de lecture

// const toggleAudio = () => {
//   if (isPlaying) {
//     audio.pause(); // Mettre le son en pause
//   } else {
//     audio.play().catch((error) => {
//       console.error("Lecture bloquée : ", error);
//     });
//   }
//   isPlaying = !isPlaying; // Inverser l'état
// };

// // Ajout de l'écouteur d'événement
// document.body.addEventListener("click", toggleAudio);


root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
