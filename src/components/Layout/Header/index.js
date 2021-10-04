import weddingContext from '../../../stores/wedding-context'

import ArrowDown from "../../UI/ArrowDown";

import classes from './header.module.css'
import background from '../../../assets/header-background.svg'

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
                <h1 className={classes.headline}>{data.husband}</h1>
                <h1 className={classes.subHeadline}>&</h1>
                <h1 className={classes.headline}>{data.wife}</h1>
            </div>
            <h3 className={classes.date}>{data.date}</h3>
            < ArrowDown />
        </div>
    )
}

export default Header