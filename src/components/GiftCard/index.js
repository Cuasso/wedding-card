import WeddingContext from '../../stores/wedding-context'
import Title from '../UI/Title'
import Popup from '../UI/Popup'

import classes from './giftCard.module.css'
import imgGift from '../../assets/gifs.png'



const data = WeddingContext.giftCard
const styleTitle = {
    color: 'var(--light-orange)'
}

const GiftCard = () => (
    <div className={classes.giftCardContainer}>
        <Title style={styleTitle} value="Regalos" />
        <img src={imgGift} className={classes.giftImg} alt="gift" />
        <p className={classes.sub} style={{ padding: "25px" }}>
            {data.message}
        </p>
        <Popup text="Datos bancarios">
            <strong>Banco: </strong><span>Banco BBVA</span><br />
            <strong>CBU: </strong><span>758934758093475</span><br />
            <strong>Alias: </strong><span>alias</span><br />
            <strong>Juan Carlos</strong><br />
        </Popup>
        <p className={classes.sub} style={{ padding: "25px" }}>
            ...O dejando un sobre en el buzón que encontrarás en el salón.
        </p>

    </div>
)

export default GiftCard