import './App.css';
import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';
import Items from './components/Items/Items';
import Question from './components/Q and ans/Question';

function App() {
  return (
    <div className="App">
      <Header></Header>
      <Items></Items>
      <Question></Question>
      <Footer></Footer>
    </div>
  );
}

export default App;
