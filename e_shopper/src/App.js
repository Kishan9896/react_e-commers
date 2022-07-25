import './App.css';
import { Route, Switch } from 'react-router-dom';
import Home from "./container/Home";
import Header from './component/Header';
import Checkout from './container/Department/Checkout';
import Cart from './container/Department/Cart';
import Footer from './component/Footer';
import Login from './container/Login';
import PublicRoute from './publicRoute/publicRoute';
import PrivateRoute from './privateRoute/privateRoute';


function App() {
  return (
    <>
    <Header/>
    <Switch>
      <PublicRoute path={"/"} exact component={Home} />
      <PublicRoute path={"/header"} exact component={Header}/>
      <PrivateRoute path={"/checkout"} exact component={Checkout}/>
      <PrivateRoute path={"/cart"} exact component={Cart} />
      <PublicRoute path={"/login"} exact component={Login}/>
      <PublicRoute path={"/footer"} exact component={Footer}/>
    </Switch>
    </>
  );
}

export default App;
