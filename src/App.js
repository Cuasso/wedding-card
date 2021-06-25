
import "./styles.css";
import Header from './components/Layout/Header'
import Card from './components/Card'
import WeddingData from './components/WeddingData'
import Footer from './components/Layout/Footer'

const App = () => {
  return (
    <div className="App">
      <Header />
      <Card />
      <WeddingData />
      <Footer />
    </div>
  );
}

export default App
