import weddingContext from '../../../stores/wedding-context'

import ArrowDown from "../../UI/ArrowDown";

import classes from './header.module.css'
import background from '../../../assets/background/1.png'

const Header = () => {
    const data = weddingContext.header

    return (
        <div className={classes.header}>
            <img
                src={background}
                alt="test"
                className={classes.parallax}
            />
            <div className={classes.textWrapper}>
               <h1 className={classes.name}>Fiore & Marian</h1>
            </div>
            <h3 className={classes.date}>¡NOS CASAMOS!</h3>
            < ArrowDown />
        </div>
    )
}

export default Header