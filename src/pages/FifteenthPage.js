import Header from '../components/Layout/Header'
import Card from '../components/Card'
import WeddingData from '../components/WeddingData'
import Reservation from "../components/Reservation";
import MusicQuiz from '../components/MusicQuiz'
import GiftCard from '../components/GiftCard';
import Footer from '../components/Layout/Footer'
import { Fragment } from 'react';


const FifteenthPage = () => {
    return (
        <Fragment>
            <Header />
            <WeddingData />
            <Reservation />
            <MusicQuiz />
            <GiftCard />
            <Footer />
        </Fragment>
    )
}

export default FifteenthPage