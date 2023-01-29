import logo from './logo.svg';
import './App.css';
import Counter from './components/Counter/Counter';
import { useState } from 'react';

function App() {
  const [show, setShow] = useState(true)


  return (
    <div className="App">
      {show && <Counter initNum={0} />}
      <button onClick={() => setShow(prev => !prev)}>clear counting</button>
    </div>
  );
}

export default App;
