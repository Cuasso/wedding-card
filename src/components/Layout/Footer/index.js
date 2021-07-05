import classes from './footer.module.css'
import { Fragment } from 'react'

const Footer = () => {
    return (
        <Fragment>
            <span className={classes.footer}>¡Esperamos verlos en nuestra fiesta para disfrutar todos juntos!</span>
            <div style={{ background: "white", height: "70px" }} />
        </Fragment>

    )
}

export default Footer