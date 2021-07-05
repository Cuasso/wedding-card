import Header from './components/Layout/Header'
import Card from './components/Card'
import WeddingData from './components/WeddingData'
import Reservation from "./components/Reservation";
import PhotosCarousel from './components/PhotosCarousel'
import MusicQuiz from './components/MusicQuiz'
import CovidRecomendation from './components/CovidRecomendation'
import Footer from './components/Layout/Footer'

import "./styles.css";

const App = () => {
  return (
    <div className="App">
      <Header />
      <Card />
      <WeddingData />
      <Reservation />
      <PhotosCarousel />
      <MusicQuiz />
      <CovidRecomendation />
      <Footer />
    </div>
  );
}

export default App