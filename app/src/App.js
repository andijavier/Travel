import {
  BrowserRouter as Router,
  Switch,
  Link,
  Route
} from "react-router-dom";
import Home from "./views/Home"
import Detail from "./views/Detail"
import HotelList from "./views/HotelList"

function App() {
  return (
    <Router>
      <div className="container p-3">
        <div className="row justify-center mt-4">
          <nav>
            <h3><Link className="m-3 nav col-md-5"
              style={{ color: "#1B1A17", cursor: "pointer" }}
              to="/">TraHotel</Link></h3>
          </nav>
        </div>
        <Switch>
          <Route path="/detail/:location_id">
            <Detail/>
          </Route>
          <Route path="/search">
            <HotelList/>
          </Route>
          <Route exact path="/">
            <Home/>
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
