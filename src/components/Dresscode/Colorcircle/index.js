import classes from './colorcircle.module.css'



const Colorcircle = ({ color, border, text }) => {

    const style = {
        border: `3px solid ${border}`,
        backgroundColor: color
    }

    return (
        <div className={classes.container}>
            <span className={classes.dot} style={style}></span>
            <p className={classes.text}>{text}</p>
        </div>
    )
}

export default Colorcircle