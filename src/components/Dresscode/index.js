import ColorCircle from './Colorcircle'

import dresscodeImg from '../../assets/dresscode.png'
import classes from './dresscode.module.css'
import Title from '../UI/Title'

const Dresscode = () => {

    const fontSize = '25px'
    const styleTitle = {
        color: 'var(--light-orange)',
        fontSize
    }

    return (
        <div className={classes.container}>
            <Title value={"Código de Vestimenta:"} style={styleTitle} />
            <Title value={"Elegante"} style={{ fontSize }} />
            <img className={classes.dressCodeImg} src={dresscodeImg} />
            <p className={classes.body}>Les pedimos, por favor, NO usar los siguientes colores:</p>
            <div className={classes.colors}>
                <ColorCircle border="var(--beige)" color="var(--light-beige)" text="Beige" />
                <ColorCircle border="var(--pink)" color="var(--light-pink)" text="Rosa" />
                <ColorCircle border="var(--light-grey)" color="white" text="Blanco" />
            </div>

        </div>
    )
}

export default Dresscode