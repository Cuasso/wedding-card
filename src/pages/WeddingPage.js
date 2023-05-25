import Header from '../components/Layout/Header'
import Card from '../components/Card'
import WeddingData from '../components/WeddingData'
import Reservation from "../components/Reservation";
import PhotosCarousel from '../components/PhotosCarousel'
import MusicQuiz from '../components/MusicQuiz'
import GiftCard from '../components/GiftCard';
import Dresscode from '../components/Dresscode';

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
                <Dresscode />
                <GiftCard />
                <PhotosCarousel />
                <MusicQuiz />
                <Footer />
            </div>
        </Fragment>
    )
}


export default WeddingPage