import { useEffect } from 'react';
import './App.css';
import "./loading.js";
import useStore from "./store/store.js";
import Loading from './loading.js';

function App() {
  const { bears, data, getData, increasePopulation } = useStore((state) => state); // get whole state
  // const increasePopulation = useStore(state => state.increasePopulation); // get single state
  // when state updates, any component that is subscribed to it, like here, that component will rerender, so be aware of that for performance

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
