import Header from '../components/Layout/Header'
import WeddingData from '../components/WeddingData'
import PhotosCarousel from '../components/PhotosCarousel'
import GiftCard from '../components/GiftCard';
import Footer from '../components/Layout/Footer'
import Information from '../components/Information'
import { Fragment } from 'react';


const WeddingPage = () => {
    return (
        <Fragment>
            <Header />
            <WeddingData />
            <PhotosCarousel />
            <Information />
            <GiftCard />
            <Footer />
        </Fragment>
    )
}


export default WeddingPage