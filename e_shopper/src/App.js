import "./App.css";
import { Route, Switch } from "react-router-dom";
import Home from "./container/Home";
import Header from "./component/Header";
import Checkout from "./container/Department/Checkout";
import Cart from "./container/Department/Cart";
import Footer from "./component/Footer";
import Login from "./container/Login";
import PublicRoute from "./publicRoute/PublicRoute";
import PrivateRoute from "./privateRoute/PrivateRoute";
import Product from "./component/Product";
import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";
import { persistor, store } from "./Redux/Store";
import { SnackbarProvider } from "notistack";
import Admin from "./container/Department/Admin";


function App() {
  return (
    <>
      <SnackbarProvider maxSnack={3}>
        <Provider store={store}>
          <PersistGate loading={null} persistor={persistor}>
            <Header />
            <Switch>
              <PublicRoute path={"/"} exact component={Home} />
              <PublicRoute path={"/header"} exact component={Header} />
              <PublicRoute path={"/product"} exact component={Product} />
              <PrivateRoute path={"/checkout"} exact component={Checkout} />
              <PrivateRoute path={"/cart"} exact component={Cart} />
              <PrivateRoute path={"/admin"} expect component={Admin}/>
              <PublicRoute
                path={"/login"}
                restricted={true}
                exact
                component={Login}
              />
              <PublicRoute path={"/footer"} exact component={Footer} />
            </Switch>
          </PersistGate>
        </Provider>
      </SnackbarProvider>
    </>
  );
}

export default App;
