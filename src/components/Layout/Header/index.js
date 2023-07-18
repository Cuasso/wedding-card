import weddingContext from '../../../stores/wedding-context'

import ArrowDown from "../../UI/ArrowDown";

import classes from './header.module.css'
import headerPhoto from '../../../assets/header.jpg'

const Header = () => {

    return (
        <div className={classes.header}>
            <svg className={classes.curve} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
                <path fill="#f9faf5" fill-opacity="1" d="M0,128L80,138.7C160,149,320,171,480,165.3C640,160,800,128,960,112C1120,96,1280,96,1360,96L1440,96L1440,320L1360,320C1280,320,1120,320,960,320C800,320,640,320,480,320C320,320,160,320,80,320L0,320Z"></path>
            </svg>
            <div className={classes.textWrapper}>
                <h1 className={classes.date}>24.02.2024</h1>
                <h1 className={classes.name}>Noe</h1>
                <div className={classes.separatorWrapper}>
                    <hr className={classes.line} />
                    <div className={classes.separator}>&</div>
                    <hr className={classes.line} />
                </div>
                <h1 className={classes.name}>Seba</h1>
            </div>
        </div>
    )
}

export default Header