import classes from './footer.module.css'

const Footer = () => {
    return (
        <div className={classes.background}>
            <span className={classes.footer}>¡Esperamos verlos en nuestra fiesta para disfrutar juntos!</span>
            <div style={{ background: "white", height: "70px" }} />
        </div>

    )
}

export default Footer