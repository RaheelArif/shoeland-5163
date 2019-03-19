import React, { Component } from 'react';
import Header from "./components/layout/Navbar"
import Footer from "./components/layout/Footer"
import OfferList from "./components/posts/OffersList"

import Dashboard from './components/dashboard/Dashboard';
import {BrowserRouter, Route, Switch} from 'react-router-dom' 
import SignIn from './components/auth/SignIn';
import OfferDetail from './components/posts/OfferDetail';
import CreatePost from './components/posts/CreatePost';








class App extends Component {
  render() {
    return (
      <BrowserRouter>

      <div>
        <Header />
        <Switch>
         <Route exact path="/" component={Dashboard} />
         <Route exact path="/offerList" component={OfferList} />
         <Route path="/offerList/:id" component={OfferDetail} />
         <Route path="/login" component={SignIn} />
         <Route path="/CreatePost" component={CreatePost} />

        </Switch>
        <Footer />
      </div>
      </BrowserRouter>
    );
  }
}

export default App;
