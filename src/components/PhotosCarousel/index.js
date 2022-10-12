import WeddingContext from '../../stores/wedding-context'
import cameraImg from '../../assets/icons/camera.gif'
import Carousel from '../UI/Carousel'
import CarouselItem from '../UI/Carousel/CarouselItem'

import classes from './photosCarousel.module.css'

const ImportImages = () => {
    let images = [];
    const context = require.context('../../assets/photos/', false, /\.(png|jpe?g|svg)$/)
    images = context.keys()
        .map(context)
        .map(x => x.default)
    return images
}

const PhotosCarousel = props => {

    const images = ImportImages()
    const data = WeddingContext.carousel

    return (
        <div className={classes.photosCarousel}>
            <h1 className={classes.hashtag}>Un recorrido de estos 15 años</h1>
            <div className={classes.message}>
                Junto a personas que son muy importantes en mi vida
            </div>
            <img src={cameraImg} className={classes.cameraImg}/>
            <Carousel>
                {
                    images.map(image =>
                        <CarouselItem key={image}>
                            <img src={image}
                                key={image}
                                alt={image}
                                className={classes.carouselImg}
                            />
                        </CarouselItem>)
                }
            </Carousel>
        </div>
    )
}

export default PhotosCarousel