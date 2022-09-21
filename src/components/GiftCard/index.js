import WeddingContext from '../../stores/wedding-context'
import Popup from '../UI/Popup'

import classes from './giftCard.module.css'
import imgGift from '../../assets/images.png'


const data = WeddingContext.giftCard

const GiftCard = () => (
    <div className={classes.giftCardContainer}>
        <img src={imgGift} className={classes.giftImg} alt="gift" />
        <p className={classes.sub} style={{ padding: "25px" }}>
            {data.message}
        </p>
        <Popup text="Datos bancarios">
            <p><strong>Nombre del Titular:</strong> {data.name}</p>
            <p><strong>CBU:</strong> {data.cbu}</p>
            <p><strong>ALIAS:</strong> {data.alias}</p>
            <p>{data.bank}</p>
        </Popup>
    </div>
)

export default GiftCard