import classes from './indicators.module.css'

const Indicators = props => (
    <div className={classes.indicators}>
        <a onClick={props.left} className={`${classes.arrow} ${classes.arrowLeft}`}></a>
        <a onClick={props.right} className={`${classes.arrow} ${classes.arrowRight}`} ></a>
    </div>
)

export default Indicators