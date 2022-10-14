import WeddingContext from '../../stores/wedding-context'
import Popup from '../UI/Popup'

import classes from './giftCard.module.css'
import imgGift from '../../assets/icons/gift.gif'

const GiftCard = () => {

    return (
        <div className={classes.giftCardContainer}>
            <h3>Regalos</h3>
            <img src={imgGift} className={classes.giftImg} alt="gift" />
            <p className={classes.sub}>"Si desean regalarme algo más que su hermosa presencia, en la recepción van a encontrar un buzón para los obsequios."</p>
        </div>
    )
}

export default GiftCard