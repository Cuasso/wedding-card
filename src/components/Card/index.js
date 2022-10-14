import Title from '../UI/Title'
import classes from './card.module.css'
import weddingContext from '../../stores/wedding-context'

const Card = () => {
    const card = weddingContext.card

    return (
        <div className={classes.card}>
            <Title style={{ gridRow: " 2 / 3" }} value={card.header} />
            <span className={classes.body}>
                {card.body}
            </span>
        </div>
    )
}

export default Card