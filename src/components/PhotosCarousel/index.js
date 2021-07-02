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

    return (
        <div className={classes.photosCarousel}>
            <span className={classes.message}>Sobre nosotros!!</span>
            <Carousel>
                {
                    images.map(image =>
                        <CarouselItem key={image}>
                            <img src={image}
                                key={image}
                                alt={image}
                                style={{ maxHeight: "100%", maxWidth: "100%" }} />
                        </CarouselItem>)
                }
            </Carousel>
        </div>
    )
}

export default PhotosCarousel