import Popup from '../UI/Popup'

import classes from './giftCard.module.css'

import imgGift from '../../assets/images.png'

const GiftCard = () => (
    <div className={classes.giftCardContainer}>
        <img src={imgGift} className={classes.giftImg} alt="gift" />
        <p className={classes.sub} style={{ paddingTop: "0" }}>
            Si deseás realizarnos un regalo y no sabes que... podés colaborar con nuestra Luna de Miel...
        </p>
        <Popup text="Datos bancarios">
            <p><strong>Nombre del Titular:</strong> Johanna Giselle Vera</p>
            <p><strong>CBU:</strong> 0140052603518350783267</p>
            <p><strong>DNI:</strong> 31205738</p>
            <p><strong>ALIAS:</strong> johannavera</p>
            <p>Banco Provincia de Buenos Aires</p>
        </Popup>
    </div>
)

export default GiftCard