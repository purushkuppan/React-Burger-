import React, { Component } from 'react';
import Layout from './components/Layout/Layout'
import BurgerBuilder from "./containers/BurgerBuilder/BurgerBuilder";
import {BrowserRouter, Route, Switch} from 'react-router-dom'
import CheckOut from './containers/CheckOut/Checkout'
import Orders from "./components/Orders/Orders";

class App extends Component {
  render() {
    return (
        <BrowserRouter>
          <div className="App">
            <Layout>
                <Switch>
                    <Route path="/" exact component={BurgerBuilder}/>
                    <Route path="/orders" component={Orders}/>
                    <Route path="/checkOut" component={CheckOut}/>
                </Switch>
            </Layout>
          </div>
        </BrowserRouter>
    );
  }
}

export default App;
