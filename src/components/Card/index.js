import Title from '../UI/Title'
import classes from './card.module.css'
import ringsImg from '../../assets/card-rings.png'

const Card = () => {
    return (
        <div className={classes.card}>
            <img className={classes.ringImg} src={ringsImg} />
            <Title style={{ gridRow : " 2 / 3" }} value="nos casamos" />
            <span className={classes.body}>y estamos ansiosos por compartir este día con ustedes.</span>
        </div>
    )
}

export default Card