import Header from './components/Layout/Header'
import Card from './components/Card'
import WeddingData from './components/WeddingData'
import Reservation from "./components/Reservation";
import Footer from './components/Layout/Footer'

import "./styles.css";

const App = () => {
  return (
    <div className="App">
      <Header />
      <Card />
      <WeddingData />
      < Reservation />
      <Footer />
    </div>
  );
}

export default App