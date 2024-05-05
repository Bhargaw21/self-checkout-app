import logo from './logo.svg';
import './App.css';
import Landing from './components/Landing';
import Works from './components/Works';
import About from './components/About';

function App() {
  return (
    <>
      <div className='scroll-container'>
        <div className="scroll-class"><Landing></Landing></div>
        <div className='scroll-class'><Works></Works></div>
        <div className='scroll-class'><About></About></div>
      </div>
    </>
  );
}

export default App;
