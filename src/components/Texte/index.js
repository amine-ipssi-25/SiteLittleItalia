
import Titre from './Titre';
import paragraphe from "./paragraphe";

const Texte = ({children}) => {
    return <div>{children}</div>;
}

Texte.paragraphe = paragraphe;
Texte.Titre = Titre;

export default Texte;