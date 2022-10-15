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
                <h1 className={classes.name}>Vica</h1>
                <br className={classes.space}/>
                <h1 className={classes.headline}>{data.husband} <span className={classes.subHeadline}>15</span> {data.wife}</h1>
            </div>
            <h3 className={classes.date}>{data.date}</h3>
            < ArrowDown />
        </div>
    )
}

export default Header