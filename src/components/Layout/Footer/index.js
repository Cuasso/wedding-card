import classes from './footer.module.css'

const Footer = () => {
    return (
        <div className={classes.background}>
            <span className={classes.footer}>¡Espero verlos en mi fiesta de 15 para disfrutar todos juntos!</span>
            <div style={{ background: "white", height: "70px" }} />
        </div>

    )
}

export default Footer