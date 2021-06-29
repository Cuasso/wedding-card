import classes from './arrowDown.module.css'
import { Fragment } from 'react'

const ArrowDown = () => (
    <Fragment>
        <div className={`${classes.arrow} ${classes.arrowFirst}`}></div>
        <div className={`${classes.arrow} ${classes.arrowSecond}`}></div>
    </Fragment>

)


export default ArrowDown