// cette page récupère le composant Home qui cartographie les différentes activités
import Home from "./Home";
import { Pratiques } from "../utils/Pratiques";

export default function HomePage() {
  return (
    <div className="container">
      <div className="row row-cols-lg-2">
        {Pratiques.map((pratique) => (
          <div key={pratique.id} className="col mb-4">
            <Home
              id={pratique.id}
              name={pratique.name}
              resume={pratique.resume}
              image={pratique.image}
            />
          </div>
        ))}
      </div>
    </div>
  );
}
