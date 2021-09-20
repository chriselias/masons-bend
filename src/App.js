import "./App.css";
import { BrowserRouter as Router, Route } from "react-router-dom";

import Directory from "./components/Directory";
import Addbusiness from "./components/AddBusiness";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Privacy from "./components/PrivacyPolicy";
import SignUp from "./components/SignUp";

import { IconContext } from "react-icons";
import BusinessDetails from "./components/BusinessDetails";

function App() {
  return (
    <div className="min-h-screen p-8 bg-background">
      <IconContext.Provider
        value={{
          color: "#FFFFFF",
          className: "global-class-name",
        }}
      >
        <Router>
          <Header />
          <Route exact path="/">
            <Directory />
          </Route>
          <Route path="/add">
            <Addbusiness />
          </Route>
          <Route path="/privacy">
            <Privacy />
          </Route>
          <Route path="/signup">
            <SignUp />
          </Route>
          <Route path="/business/:id">
            <BusinessDetails />
          </Route>
          <Footer />
        </Router>
      </IconContext.Provider>
    </div>
  );
}

export default App;
