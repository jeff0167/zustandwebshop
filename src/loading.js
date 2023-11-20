import './App.css';
import useStore from "./store/store.js";

function Loading() {
  const hasError = useStore(state => state.hasError);
  const errorMessage = useStore(state => state.errorMessage);
  const isLoading = useStore(state => state.loading);

  let loading = <h1>no loading</h1>;
  let error;

  if(isLoading) {
    console.log("Was loading at some point");
    loading = <h1>WE ARE LOADING</h1>
  }

  if(hasError) {
    error = <h1>Error {errorMessage}</h1>
  }

  return (
    <div className="App">
        {error}
        {loading}
    </div>
  );
}

export default Loading;