import './index.css'
import fondevent from "./Asset/fondevent.jpeg"

function Event(){
    return(
        <div id='evenement'>
            <h1>EVENT</h1>
            <div class="contentevent">
                <img src ={fondevent}></img>
                <h3>On organise des réservations d'évenements comme des anniversaires, halloween ou encore Noël. Contactez nous pour reservez votre table et la mise en place pour nos serveurs pour éventuels cadeaux et gâteau.</h3>
            </div>
            
        </div>
    )
}
export default Event