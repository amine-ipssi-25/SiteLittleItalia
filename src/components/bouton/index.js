import Primaire from "./primaire";
import Secondaire from "./secondaire";

const Bouton = ({children}) => {
    return <div>{children}</div>;
}

Bouton.Primaire = Primaire;
Bouton.Secondaire = Secondaire;

export default Bouton;