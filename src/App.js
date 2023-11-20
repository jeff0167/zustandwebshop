import { useEffect } from 'react';
import './App.css';
import "./loading.js";
import useStore from "./store/store.js";
import Loading from './loading.js';

function App() {
  const bears = useStore(state => state.bears);
  const data = useStore(state => state.data);
  const getData = useStore(state => state.getData);
  const increasePopulation = useStore(state => state.increasePopulation);

  useEffect(() => {
    getData();
  }, []);

  return (
    <div className="App">
      <header className="App-header">
          <h1>{bears} around here</h1>
        <button onClick={increasePopulation}>Increase</button>
        <Loading></Loading>
          <h1>{JSON.stringify(data)} around here</h1>
      </header>
    </div>
  );
}

export default App;
