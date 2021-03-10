import logo from './logo.svg';
import './App.css';
import { Route, Switch ,Redirect} from "react-router-dom";
import Home from "./components/Home";
import Attendence from "./components/Attendence";



function App() {
  return (
    <div >
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/attendence" component={Attendence} />
        {/* <Route component={Error} /> */}
        <Redirect to="/" />

      </Switch>
    </div>
  );
}

export default App;

