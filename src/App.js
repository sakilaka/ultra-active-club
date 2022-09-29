import './App.css';
import Header from './components/Header/Header';
import Items from './components/Items/Items';
import Question from './components/Q and ans/Question';

function App() {
  return (
    <div className="App">
      <Header></Header>
      <Items></Items>
      <Question></Question>
    </div>
  );
}

export default App;
