import Home from './Home'
import Loader from './components/Loader'
// import { HashRouter, Route, } from "react-router-dom";

function App() {
  return (
    // <HashRouter basename={process.env.PUBLIC_URL}>
    //   <Route exact path = '/' component = { Home } />
    // </HashRouter>
    <>               
      <Loader />
      <Home />
    </>
  );
}

export default App;
