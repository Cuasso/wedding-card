import ColorCircle from './Colorcircle'

import dresscodeImg from '../../assets/dresscode.png'
import classes from './dresscode.module.css'

const Dresscode = () => {
    return (
        <div className={classes.container}>
            <h1>Código de Vestimenta</h1>
            <img className={classes.dressCodeImg} src={dresscodeImg} />
            <p className={classes.body}>Les pedimos, por favor, NO usar los siguientes colores:</p>
            <div className={classes.colors}>
            <ColorCircle border="var(--dark-beige-2)" color="var(--beige)" text="Beige"/>
            <ColorCircle border="var(--pink)" color="var(--light-pink)" text="Rosa"/>
            <ColorCircle border="var(--light-grey)" color="white" text="Blanco"/>
            </div>
            
        </div>
    )
}

export default Dresscode