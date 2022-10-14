import { Fragment } from 'react';

import Header from '../components/Layout/Header'
import Card from '../components/Card'
import WeddingData from '../components/WeddingData'
import Reservation from "../components/Reservation";
import PhotosCarousel from '../components/PhotosCarousel'
import MusicQuiz from '../components/MusicQuiz'
import GiftCard from '../components/GiftCard';
import Footer from '../components/Layout/Footer'


const FifteenPage = () => {
    return (
        <Fragment>
            <Header />
            <Card />
            <WeddingData />
            <Reservation />
            <PhotosCarousel />
            <MusicQuiz />
            <GiftCard />
            <Footer />
        </Fragment>
    )
}

export default FifteenPage