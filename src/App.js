import React, { Component } from "react";
import { Switch, Route } from "react-router-dom";
import "./App.css";
import Header from "./components/header/header-component";
import { HomePage } from "./homepage/homepage.component";
import ShopPage from "./shop/shop.component";
import SignInAndSignUpPage from "./sign-in-and-sign-up/sign-in-and-sign-up-component";
import { auth } from "../src/firebase/firebase.utils";

class App extends Component {
  constructor() {
    super();

    this.state = {
      currentUser: null,
    };
  }

  unsubscribeFromAuth = null;

  componentDidMount() {
    this.unsubscribeFromAuth = auth.onAuthStateChanged((user) => {
      this.setState({ currentUser: user });
      console.log(user);
    });
  }

  componentWillUnmount() {
    this.unsubscribeFromAuth();
  }

  render() {
    return (
      <div>
        <Header currentUser={this.state.currentUser} />
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route path="/shop" component={ShopPage} />
          <Route path="/signin" component={SignInAndSignUpPage} />
        </Switch>
      </div>
    );
  }
}

export default App;
