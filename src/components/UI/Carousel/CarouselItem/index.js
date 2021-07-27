import classes from './carouselItem.module.css'


const CarouselItem = ({ children, width }) => (
    <div className={classes.carouselItem} style={{ width: width }}>
        {children}
    </div>
)

export default CarouselItem