import "./App.css";
import { BrowserRouter as Router, Route } from "react-router-dom";

import Directory from "./components/Directory";
import Addbusiness from "./components/AddBusiness";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Privacy from "./components/PrivacyPolicy";
import SignUp from "./components/SignUp";

function App() {
  return (
    <div className="bg-gray-900 min-h-screen">
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
        <Footer />
      </Router>
    </div>
  );
}

export default App;
