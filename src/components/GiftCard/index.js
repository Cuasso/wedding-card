import WeddingContext from '../../stores/wedding-context'
import Popup from '../UI/Popup'

import classes from './giftCard.module.css'
import imgGift from '../../assets/images.png'

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
            <img src={imgGift} className={classes.giftImg} alt="gift" />
            <p className={classes.sub} style={{ paddingTop: "2rem", whiteSpace: "pre-line" }}>
                {data.message}
            </p>
            {bankPopup}
        </div>
    )
}

export default GiftCard