import WeddingContext from '../../stores/wedding-context'
import Popup from '../UI/Popup'

import classes from './giftCard.module.css'
import imgGift from '../../assets/icons/gift.gif'

const GiftCard = () => {

    const data = WeddingContext.giftCard

    let bankPopup = null
    if (data.showBank) {
        bankPopup = (
            <Popup text="Datos bancarios">
                <p><strong>Nombre del Titular:</strong> {data.name}</p>
                <p><strong>CBU:</strong> {data.cbu}</p>
                <p><strong>DNI:</strong> {data.dni}</p>
                <p><strong>ALIAS:</strong> {data.alias}</p>
                <p>{data.bank}</p>
            </Popup>
        )
    }

    return (
        <div className={classes.giftCardContainer}>
            
            <h3>Regalos</h3>
            <img src={imgGift} className={classes.giftImg} alt="gift" />
            <p className={classes.sub}>"Si deseas regalarme algo más que tu hermosa presencia..."</p>
            {bankPopup}
        </div>
    )
}

export default GiftCard