import Carousel from '../UI/Carousel'
import CarouselItem from '../UI/Carousel/CarouselItem'

import classes from './photosCarousel.module.css'
import image from '../../assets/carousel-image.png'

const ImportImages = () => {
    let images = [];
    const context = require.context('../../assets/photos/', false, /\.(png|jpe?g|svg)$/)
    images = context.keys()
        .map(context)
        .map(x => x.default)
    return images
}

const IgUrl = 'https://www.instagram.com/explore/tags/luchojoha/'

const PhotosCarousel = props => {

    const images = ImportImages()

    return (
        <div className={classes.photosCarousel}>
            <img src={image} className={classes.carouselImg} />
            <h1 className={classes.hashtag}>#LuchoJoha</h1>
            <div className={classes.message}>
                <span>
                    Sumate al hashtag <a href={IgUrl} target='_blank' className={classes.igHashtag}>#LuchoJoha</a> para compartir tus fotos o videos con nosotros.</span> <br />
                <span>Ya podes etiquetarnos!!</span>
            </div>
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