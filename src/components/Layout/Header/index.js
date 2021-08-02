import ArrowDown from "../../UI/ArrowDown";

import classes from './header.module.css'
import background from '../../../assets/header-background-2.jpg'

const Header = () => {
    return (
        <div className={classes.header}>
            <img
                src={background}
                alt="test"
                className={classes.parallax}
            />
            <div className={classes.textWrapper}>
                <h1 className={classes.headline}>Lucho</h1>
                <h1 className={classes.subHeadline}>&</h1>                         
                <h1 className={classes.headline}>Joha</h1>
            </div>
            <h3 className={classes.date}>18/09/2021</h3>
            < ArrowDown />            
        </div>
    )
}

export default Header