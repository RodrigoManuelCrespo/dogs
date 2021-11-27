import './App.css';
import { BrowserRouter } from "react-router-dom";
import Landing from './components/Landing';
import Home from './components/Home';

function App() {
  return (
    <BrowserRouter>
    <div className="App">
      <Landing path='/' />
      <Home path='/home' />
    </div>
    </BrowserRouter>
  );
}

export default App;
