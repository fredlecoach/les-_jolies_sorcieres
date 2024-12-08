import bolVideo from "../assets/videos/bolVideo.mp4";
import videoMeditation from "../assets/videos/meditation.mp4";
import litho from "../assets/videos/amethyste.mp4";
import univers from "../assets/videos/univers.mp4"

export default function Carousel(){
  return (
    <div className="mb-5">
      {/* carousel */}

      <div id="carouselExampleCaptions" class="carousel slide" data-bs-ride="carousel" data-bs-interval="10000">
        <div class="carousel-indicators">
          <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
          <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1" aria-label="Slide 2"></button>
          <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2" aria-label="Slide 3"></button>
          <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="3" aria-label="Slide 4"></button>
        </div>
        <div class="carousel-inner">
          {/* Vidéo 1 */}
          <div className="carousel-item active">
            <video
              className="d-block w-100 object-fit-cover"
              style={{ height: "400px" }}
              autoPlay
              loop
              muted
            >
              <source src={bolVideo} type="video/mp4" />
              Votre navigateur ne supporte pas la lecture de vidéo.
            </video>
            <div className="carousel-caption d-none d-md-block">
              <h5>Les bols tibétains</h5>
              <p>La guérison au son des vibrations</p>
            </div>
          </div>
        
        {/*2ème video  */}
          <div className="carousel-item">
            <video
             className="d-block w-100 object-fit-cover" 
             style={{height: "400px"}}
             autoPlay
             loop
             muted
             >
              <source src={videoMeditation} type="video/mp4"/>
            </video>
            <div className="carousel-caption d-none d-md-block">
              <h5>La méditation</h5>
              <p>Se recentrer sur soi-même</p>
            </div>
          </div>

          {/* 3ème video */}
          <div className="carousel-item">
            <video
             className="d-block w-100 object-fit-cover" 
             style={{height: "400px"}}
             autoPlay 
             loop
             muted
             >
              <source src={litho} type="video/mp4"/>
            </video>
            <div className="carousel-caption d-none d-md-block">
              <h5 className="col-2 mx-auto">La lithothérapie</h5>
              <p className=" col-3 mx-auto">Les bienfaits de la puissances des pierres </p>
            </div>
          </div>
          {/* 4eme video */}
          <div className="carousel-item">
            <video
              className="d-block w-100 object-fit-cover" 
              style={{height: "400px"}}
              autoPlay
              loop
              muted
              >
                <source src={univers} type="video/mp4"/>
              </video>
              
            <div className="carousel-caption d-none d-md-block">
              <h5>Les constellations</h5>
              <p>Guérir à travers l'univers</p>
            </div>
          </div>
        </div>
        <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
          <span className="carousel-control-prev-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
          <span className="carousel-control-next-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>



    </div>
  )
}