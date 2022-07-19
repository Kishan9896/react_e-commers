import './App.css';
import { Route, Switch } from 'react-router-dom';
import Home from "./container/Home";
import Header from './component/Header';
import Footer from './component/Footer';
import Login from './container/Login';


function App() {
  return (
    <>
    <Header/>
    <Switch>
      <Route path={"/"} exact component={Home} />
      <Route path={"/header"} exact component={Header}/>
      <Route path={"/login"} exact component={Login}/>
      <Route path={"/footer"} exact component={Footer}/>
    </Switch>
    </>
  );
}

export default App;
