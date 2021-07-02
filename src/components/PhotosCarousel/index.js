import Carousel from '../UI/Carousel'
import CarouselItem from '../UI/Carousel/CarouselItem'

import classes from './photosCarousel.module.css'

const BASE_PATH = '../../assets/photos/'

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
            <span className={classes.message}>Nuestra fotos!!</span>            
            <Carousel>
                {
                    images.map(image =>
                        <CarouselItem >
                            <img src={image} 
                                key={image} 
                                style={{ maxHeight: "100%", maxWidth: "100%" }} />
                        </CarouselItem>)
                }
            </Carousel>
        </div>
    )
}

export default PhotosCarousel