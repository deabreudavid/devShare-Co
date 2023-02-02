import "./Home.css";

export default function Home() {
  return (
    <div className="homePresentation">
      <div className="titleIntro">
        <h1>DevShare &Co</h1>
      </div>
      <div className="imgPresentation">
        <img
          className="presentationLogo"
          src="../src/assets/presentation.webp"
          alt="presentationLogo"
        />
      </div>
      <div className="textPresentation">
        <h1>Bienvenue sur notre plateforme en ligne de partage de projets. Un concept de mise en ligne et de participation à des projets</h1>
      </div>
    </div>
  );
}
