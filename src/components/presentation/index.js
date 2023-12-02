import './index.css'
import Bouton from '../bouton'
function Presentation(){
    return(
        <div className="pres">
            <h1>Little Italia</h1> 
            <h3>Little Italia à ouvert ses portes en 2023 pour apporter une expérience gastronomique authentique de l'Italie au cœur de New York. Situé dans un quartier dynamique, notre restaurant a immédiatement captivé les papilles des amateurs de cuisine italienne avec sa fusion unique de traditions culinaires, d'innovation et d'hospitalité chaleureuse</h3>
            <div className='variantebouton'>
                <Bouton.Primaire></Bouton.Primaire>
                <Bouton.Secondaire></Bouton.Secondaire>
            </div>
            
        </div>
    )
}
export default Presentation