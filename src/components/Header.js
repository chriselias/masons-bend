import React from "react";
import { Link } from "react-router-dom";
import firebase from "../firebase";
import { useAuthState } from "react-firebase-hooks/auth";

const auth = firebase.auth();

function SignOut() {
  return (
    auth.currentUser && (
      <button
        className="inline-block text-sm px-4 py-2 leading-none border rounded text-white border-white hover:border-transparent hover:text-teal-500 hover:bg-white mt-4 mr-4"
        onClick={() => auth.signOut()}
      >
        Sign Out
      </button>
    )
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

const Header = () => {
  const [user] = useAuthState(auth);

  return (
    <nav className="flex bg-green-900 p-6">
      <div className="flex items-center flex-shrink-0 text-white mr-6">
        <span className="font-semibold text-xl tracking-tight">
          <Link to="/" href="#">
            Masons Bend Directory
          </Link>
        </span>
      </div>
      <div className="text-sm flex-1"></div>
      {user ? <SignOut /> : <SignIn />}
      <Link
        to="/add"
        href="#"
        className="inline-block text-sm px-4 py-2 leading-none border rounded text-blue-500 border-white hover:border-transparent bg-blue-50 hover:text-teal-500 hover:bg-white mt-4 "
      >
        Add Business
      </Link>
    </nav>
  );
};

export default Header;
