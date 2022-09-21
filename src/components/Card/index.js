import Title from '../UI/Title'
import classes from './card.module.css'
import ringsImg from '../../assets/card-rings.png'
import weddingContext from '../../stores/wedding-context'

const Card = () => {
    const card = weddingContext.card

    return (
        <div className={classes.card}>
            <img className={classes.ringImg} src={ringsImg} alt="rings" />
            <Title style={{ gridRow: " 2 / 3" }} value={card.header} />
            <span className={classes.body}>
                {card.body}
            </span>
        </div>
    )
}

export default Card