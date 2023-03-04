import './App.css';
import Header from './components/Header/Header';
import MainImage from './components/MainImage/MainImage';
import WordsList from './components/Words_list/Words_list';
import CardSlider from './components/CardSlider/CardSlider';
import Footer from './components/Footer/Footer';

function App() {
  return (
    <div className="App">
      <Header />
      <MainImage />
      <WordsList />
      <CardSlider />
      <Footer />
    </div>
  );
}

export default App;
