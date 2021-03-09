import React from 'react';
import Header from './components/Header/Header';
import Shop from './components/Shop/Shop';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

import Review from './components/Review/Review';
import Invantory from './components/Invantory/Invantory';
import NoFound from './components/NoFound/NoFound';
import ProductDetail from './components/ProductDetail/ProductDetail';


function App() {
  return (
    <div>
      <Header></Header>
      <Router>

        <Switch>
          <Route path="/shop">
            <Shop></Shop>
          </Route>
          <Route path="/review">
            <Review></Review>
          </Route>
          <Route path="/inventory">
            <Invantory></Invantory>
          </Route>
          <Route exact path="/">
            <Shop></Shop>
          </Route>
          <Route path="/Product/:key">
            <ProductDetail></ProductDetail>
          </Route>
          <Route path="*">
            <NoFound></NoFound>
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
