import classes from './carouselItem.module.css'


const CarouselItem = ({ children }) => (
    <div className={classes.carouselItem} >
        {children}
    </div>
)

export default CarouselItem