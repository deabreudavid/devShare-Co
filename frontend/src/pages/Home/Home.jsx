import "./Home.css";
import imgHome1 from "../../assets/computer.jpg";
import imgHome2 from "../../assets/DevLogo.png";
import imgHome3 from "../../assets/presentation.webp";

export default function Home() {
  return (
    <div className="homepage">
      <div className="itemhomepage1">
        <img className="imgHome1" src={imgHome1} alt="computer" />
        <p className="homeparaph1">
          DevShare &Co est une plateforme de partage de projets web permettant
          aux développeurs et aux designers de publier et de partager leurs
          projets avec d'autres personnes dans la communauté. Les utilisateurs
          peuvent parcourir les projets publiés, les examiner et les télécharger
          s'ils le souhaitent. La plateforme peut également inclure des outils
          pour la collaboration en temps réel, tels que la messagerie, les
          commentaires et les révisions de code, ce qui permet aux utilisateurs
          de travailler ensemble sur des projets en ligne. Les projets peuvent
          être classés selon leur niveau de complexité, leur domaine
          d'application et d'autres critères, ce qui aide les utilisateurs à
          trouver facilement les projets qui les intéressent. En utilisant la
          plateforme, les développeurs peuvent accéder à un vaste réseau de
          ressources et de compétences, ce qui les aide à développer leurs
          projets plus rapidement et plus efficacement.
        </p>
      </div>
      <div className="itemhomepage2">
        <img className="imgHome2" src={imgHome2} alt="computer" />
        <p className="homeparaph2">
          DevShare & Co est une plateforme dédiée aux développeurs et aux
          designers. Elle leur permet de publier et de partager leurs projets
          web avec d'autres membres de la communauté. La plateforme inclut des
          outils pour la collaboration en temps réel, ce qui facilite la
          collaboration entre les développeurs sur des projets en ligne. En
          utilisant DevShare & Co, les développeurs peuvent accéder à un grand
          réseau de ressources et de compétences, ce qui les aide à développer
          leurs projets plus rapidement et plus efficacement.
        </p>
      </div>
      <div className="itemhomepage3">
        <img className="imgHome3" src={imgHome3} alt="computer" />
        <p className="homeparaph3">
          DevShare & Co est une plateforme de partage de projets web qui
          appartient à la communauté. Les utilisateurs peuvent parcourir les
          projets publiés, les examiner et les télécharger s'ils le souhaitent.
          La plateforme offre également des outils pour la collaboration en
          temps réel, tels que la messagerie, les commentaires et les révisions
          de code, ce qui permet aux membres de la communauté de travailler
          ensemble sur des projets en ligne. En utilisant DevShare & Co, les
          utilisateurs peuvent accéder à un grand nombre de projets développés
          par des membres de la communauté, ce qui leur permet de découvrir de
          nouvelles idées et de nouvelles façons de travailler sur des projets
          web.
        </p>
      </div>
    </div>
  );
}
