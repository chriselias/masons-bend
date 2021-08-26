import "./App.css";

import React, { useState } from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

import firebase from "./firebase";

import { useAuthState } from "react-firebase-hooks/auth";
import Directory from "./components/Directory";
import Addbusiness from "./components/AddBusiness";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Privacy from "./components/PrivacyPolicy";

const auth = firebase.auth();

function App() {
  const [user] = useAuthState(auth);

  return (
    <Router className="App">
      <Header />
      <Route exact path="/">
        <section>{user ? <Directory /> : <SignIn />}</section>
      </Route>
      <Route path="/add">
        <Addbusiness />
      </Route>
      <Route path="/privacy">
        <Privacy />
      </Route>
      <Footer />
    </Router>
  );
}

function SignIn() {
  const signInWithGoogle = () => {
    const provider = new firebase.auth.GoogleAuthProvider();
    auth.signInWithPopup(provider);
  };
  const signInWithFacebook = () => {
    const provider = new firebase.auth.FacebookAuthProvider();
    auth.signInWithPopup(provider);
  };
  return <button onClick={signInWithFacebook}>Sign in Facebook</button>;
}

function SignOut() {
  return (
    auth.currentUser && <button onClick={() => auth.signOut()}>Sign Out</button>
  );
}

export default App;
