import weddingContext from '../../../stores/wedding-context'

import classes from './header.module.css'
import background from '../../../assets/header-brune.jpg'
import openQuote from '../../../assets/comilla-apertura.svg'
import closeQuote from '../../../assets/comilla-cierre.svg'

const Header = () => {
    const data = weddingContext.header

    return (
        <div>
            <img
                src={background}
                alt="test"
                className={classes.photoPrincipal}
            />

            <br /><div className={classes.date}>
                21.11.2022
            </div>
            <div className={classes.name}>
                Brunella
            </div>
            <div className={classes.description}>
                Mis 15 años
            </div>
            <div className={classes.phrase}>
                <img src={openQuote} />
                <p>Los espero para compartir la felicidad de ese día que será, sin dudas, mágico, único e inolvidable.</p>
                <img src={closeQuote} />
            </div>
        </div>
    )
}

export default Header