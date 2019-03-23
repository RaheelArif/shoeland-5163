import React, { Component } from 'react';
import Header from "./components/layout/Navbar"
import Footer from "./components/layout/Footer"

import Dashboard from './components/dashboard/Dashboard';
import {BrowserRouter, Route, Switch} from 'react-router-dom' 
import SignIn from './components/auth/SignIn';
import OfferDetail from './components/posts/OfferDetail';
import CreatePost from './components/posts/CreatePost';
import SignUp from './components/auth/SignUp';
import MenList from './components/posts/MenList';
import WomenList from './components/posts/WomenList';
import KidsList from './components/posts/KidsList';






class App extends Component {
  render() {
    return (
      <BrowserRouter>

      <div>
        <Header />
        <Switch>
         <Route exact path="/" component={Dashboard} />
         <Route exact path="/MenList" component={MenList} />
         <Route exact path="/WomenList" component={WomenList} />
         <Route exact path="/KidsList" component={KidsList} />

         <Route path="/OfferList/:id" component={OfferDetail} />
         <Route path="/login" component={SignIn} />
         <Route path="/CreatePost" component={CreatePost} />
         <Route path="/signup" component={SignUp} />

        </Switch>
        <Footer />
      </div>
      </BrowserRouter>
    );
  }
}

export default App;
