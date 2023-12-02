import './index.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faXmark } from '@fortawesome/free-solid-svg-icons';
import { faBars } from '@fortawesome/free-solid-svg-icons';



function Header(){
 
    const handleToggle = () => {
        const header = document.querySelector(".myheader");
        header.classList.toggle("active");
    }

    return(
        <header className='myheader'>
            <div className='nomsite'>
                <h1>Little Italia</h1>
            </div>
            <div class="toggle-btn" onClick={handleToggle}><FontAwesomeIcon icon={faXmark} size="2xl" div className="cross" style={{color: "#ffffff",}} /><FontAwesomeIcon icon={faBars} size="2xl"  div className="bar" style={{color: "#ffffff",}} /></div>

            <nav>
                <ul>
                    <li><a href="#titremenu">Menu</a></li>
                    <li><a href='#evenement'>Event</a></li>
                    <li><a href='https://www.ubereats.com/fr'target='_blanck'>Livraison</a></li>
                    <li><a href='https://www.thefork.fr/' id='reservation'target='_blanck'>Reservation</a></li>
                </ul>

            </nav>
        </header>

    )

}


export default Header;