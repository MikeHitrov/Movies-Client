import Navbar from "./components/Navbar";
import Home from "./components/Home";
import Movies from "./components/MovieList";
import { Switch, Route } from "react-router-dom";
import AddMovie from "./components/AddMovie";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Switch>
        <Route exact path="/" component={Home}></Route>
        <Route path="/movies" component={Movies}></Route>
        <Route path="/addMovie" component={AddMovie}></Route>
      </Switch>
    </div>
  );
}

export default App;
