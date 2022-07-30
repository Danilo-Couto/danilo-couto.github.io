import React from 'react';
import { Redirect, Route, Switch } from 'react-router-dom';
import Admin from './pages/Adm';
import Checkout from './pages/Checkout';
import CustomerProducts from './pages/CustomerProducts';
import Login from './pages/Login';
import MyOrders from './pages/MyOrders';
import OrderDetails from './pages/OrderDetails';
import Register from './pages/Register';
import SellerOrderDetails from './pages/SellerOrderDetails';
import SellerOrders from './pages/SellerOrders';

function App() {
  return (
    <Switch>
      <Route
        path="/"
        exact
        component={ () => <Redirect to="/login" /> }
      />
      <Route
        path="/login"
        exact
        component={ Login }
      />
      <Route
        path="/register"
        exact
        component={ Register }
      />
      <Route
        path="/customer/products"
        exact
        component={ CustomerProducts }
      />
      <Route
        path="/customer/checkout"
        exact
        component={ Checkout }
      />
      <Route
        path="/customer/orders"
        exact
        component={ MyOrders }
      />
      <Route
        path="/customer/orders/:id"
        exact
        component={ OrderDetails }
      />
      <Route
        path="/seller/orders"
        exact
        component={ SellerOrders }
      />
      <Route
        path="/seller/orders/:id"
        exact
        component={ SellerOrderDetails }
      />
      <Route
        path="/admin/manage"
        exact
        component={ Admin }
      />
    </Switch>
  );
}

export default App;
