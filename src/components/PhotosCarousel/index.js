import WeddingContext from '../../stores/wedding-context'

import Carousel from '../UI/Carousel'
import CarouselItem from '../UI/Carousel/CarouselItem'

import classes from './photosCarousel.module.css'
import heartImg from '../../assets/heart.png'
import instagramImg from '../../assets/instagram.png'

import Title from '../UI/Title'

import Img1 from '../../assets/photos/1.png'
import Img2 from '../../assets/photos/2.png'
import Img3 from '../../assets/photos/3.png'
import Img4 from '../../assets/photos/4.png'

const ImportImages = () => {
    let images = [];
    const context = require.context('../../assets/photos/', false, /\.(png|jpe?g|svg)$/)
    images = context.keys()
        .map(context)
        .map(x => x.default)
    return images
}

const IgUrl = 'https://www.instagram.com/explore/tags/FioreyMarian'

const PhotosCarousel = props => {

    const images = ImportImages()
    const data = WeddingContext.carousel

    return (
        <div className={classes.photosCarousel}>
            <Title value="nosotros" />
            <img src={heartImg} className={classes.heartImg} />            
            <Carousel>
                <CarouselItem key={"photo-1"}>
                    <img src={Img1}
                        key={"photo-1"}
                        alt={"photo-1"}
                        className={classes.photos} />
                </CarouselItem>
                <CarouselItem key={"photo-2"}>
                    <img src={Img2}
                        key={"photo-2"}
                        alt={"photo-2"}
                        className={classes.photos} />
                </CarouselItem>
                <CarouselItem key={"photo-3"}>
                    <img src={Img3}
                        key={"photo-3"}
                        alt={"photo-3"}
                        className={classes.photos} />
                </CarouselItem>
                <CarouselItem key={"photo-4"}>
                    <img src={Img4}
                        key={"photo-4"}
                        alt={"photo-4"}
                        className={classes.photos} />
                </CarouselItem>
            </Carousel>
            <img src={instagramImg} className={classes.carouselImg} />
            <h1 className={classes.hashtag}>#FioreyMarian</h1>
            <div className={classes.message}>
                <span>    
                ¡Preparate para nuestro gran día!<br/>
                Etiquetanos en instagram con nuestro hashtag <a href={IgUrl} target='_blank' className={classes.igHashtag}>#FioreyMarian</a> en tus fotos o videos.</span> <br />
                <span>Ya podes etiquetarnos!!</span>
            </div>
        </div>
    )
}

export default PhotosCarousel