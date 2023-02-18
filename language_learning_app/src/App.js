import './App.css';
import Header from './components/Header/Header';
import MainImage from './components/MainImage/MainImage';
import WordsList from './components/Words_list/Words_list';
import Card from './components/Card/Card';
import Footer from './components/Footer/Footer';

function App() {
  return (
    <div className="App">
      <Header></Header>
      <MainImage></MainImage>
      <WordsList></WordsList>
      <Card></Card>
      <Footer></Footer>
    </div>
  );
}

export default App;
