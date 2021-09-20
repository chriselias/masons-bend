import React from "react";
import { Link } from "react-router-dom";
import firebase from "../firebase";
import { useAuthState } from "react-firebase-hooks/auth";
import SignInButton from "./SignInButton";

const auth = firebase.auth();

function SignOut() {
  return (
    auth.currentUser && (
      <button
        className="inline-block text-sm px-4 py-2 leading-none border rounded text-white border-white hover:border-transparent hover:text-teal-500 hover:bg-purple-800 mt-4 mr-4"
        onClick={() => auth.signOut()}
      >
        Sign Out
      </button>
    )
  );
}

const Header = () => {
  const [user] = useAuthState(auth);

  return (
    <nav className="p-6 bg-white max-w-screen-lg mx-auto rounded-t-xl">
      <div className="flex max-w-screen-lg mx-auto flex-col md:flex-row">
        <div className="flex flex-shrink-0 flex-col text-gray-800 mr-6">
          <span className="font-semibold text-3xl tracking-tight logo">
            <Link to="/" href="#">
              Masons Bend Directory
            </Link>
          </span>
          <div className="text-sm">
            Businesses and Services Recommneded by the Community
          </div>
        </div>
        <div className="text-sm flex-1"></div>
        <div>
          {user ? <SignOut /> : <SignInButton />}
          <Link
            to="/add"
            className="inline-block text-sm px-4 py-2 leading-none rounded text-white hover:bg-yellow-500 bg-yellow-400 hover:text-teal-500 mt-4"
          >
            Add Business
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Header;
