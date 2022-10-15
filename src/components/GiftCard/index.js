import WeddingContext from '../../stores/wedding-context'
import Title from '../UI/Title'

import classes from './giftCard.module.css'
import imgGift from '../../assets/icons/gift_pink.gif'


const data = WeddingContext.giftCard
const styleTitle = {
    color: '#d08e7c'
}

const GiftCard = () => (
    <div className={classes.giftCardContainer}>
        <Title style={styleTitle} value="Regalos" />
        <img src={imgGift} className={classes.giftImg} alt="gift" />
        <p className={classes.sub} style={{ padding: "25px" }}>
            {data.message}
        </p>
    </div>
)

export default GiftCard