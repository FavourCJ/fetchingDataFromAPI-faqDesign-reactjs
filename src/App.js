import Faq from "./pages/faq/Faq";
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import FetchData from "./pages/fetchData/FetchData";
function App() {
  return (
    <div className="App">
       <Router>
      <Switch>
        <Route exact path= "/">
        <Faq/>
      </Route>

      <Route exact path= "/reviews">
        <FetchData/>
      </Route>
      </Switch>
      </Router>
    </div>
  );
}

export default App;
