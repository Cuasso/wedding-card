import Title from '../UI/Title'
import classes from './card.module.css'
import weddingContext from '../../stores/wedding-context'
import cardRing from '../../assets/card-rings.png'

const Card = () => {
    const card = weddingContext.card

    return (        
        <div className={classes.card}>
            <img src={cardRing} alt='rings' className={classes.ringImg}/>
            <span className={classes.body}>
                {card.body}
            </span>
        </div>
    )
}

export default Card