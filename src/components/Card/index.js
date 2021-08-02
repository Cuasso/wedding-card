import Title from '../UI/Title'
import classes from './card.module.css'
import ringsImg from '../../assets/card-rings.png'

const Card = () => {
    return (
        <div className={classes.card}>
            <img className={classes.ringImg} src={ringsImg} alt="rings"/>
            <Title style={{ gridRow : " 2 / 3" }} value="nos casamos" />
            <span className={classes.body}>
                Bienvenidos... estamos felices de poder compartir este día tan especial con ustedes.
            </span>
        </div>
    )
}

export default Card