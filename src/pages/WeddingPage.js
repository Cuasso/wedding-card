import Header from '../components/Layout/Header'
import Card from '../components/Card'
import WeddingData from '../components/WeddingData'
import Reservation from "../components/Reservation";
import PhotosCarousel from '../components/PhotosCarousel'
import MusicQuiz from '../components/MusicQuiz'
import GiftCard from '../components/GiftCard';
import CovidRecomendation from '../components/CovidRecomendation'
import Footer from '../components/Layout/Footer'
import { Fragment } from 'react';

import classes from './wedding.module.css'

const WeddingPage = () => {
    return (
        <Fragment>
            <Header />
            <div className={classes.background}>
                <Card />
                <WeddingData />
                <Reservation />
                <MusicQuiz />
                <GiftCard />
                <Footer />
            </div>
        </Fragment>
    )
}


export default WeddingPage