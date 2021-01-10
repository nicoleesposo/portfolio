import Home from '../src/Home'
import { HashRouter, Route, } from "react-router-dom";

function App() {
  return (
    <HashRouter basename={process.env.PUBLIC_URL}>
      <Route exact path = '/' component = { Home } />
    </HashRouter>
  );
}

export default App;
