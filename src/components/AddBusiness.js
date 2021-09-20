import React, { useState } from "react";
import firebase from "../firebase";
import { useAuthState } from "react-firebase-hooks/auth";

import Alert from "./Alert";
import SignInButton from "./SignInButton";
import AddBusinessForm from "./AddBusinessForm";

const auth = firebase.auth();

const Addbusiness = () => {
  const [alert, setAlert] = useState(false);
  const [user] = useAuthState(auth);

  return (
    <>
      {user ? (
        <>
          <div className="md:grid md:grid-cols-3 gap-8 max-w-screen-lg m-auto p-6 md:p-12 bg-white">
            {alert && (
              <Alert color="green" text="Success! Business has been added." />
            )}
            <div className="w-full bg-blue-50 p-8 mr-8 rounded-md shadow-md mb-8">
              <p>
                Hey Benders! <span>👋 </span>
              </p>
              <p></p>
            </div>
            <AddBusinessForm handleSetAlert={setAlert} />
          </div>
        </>
      ) : (
        <div className="max-w-screen-lg m-auto p-6 md:p-12 bg-white">
          <Alert color="blue" text="Sorry, you must login to post a listing" />
          <SignInButton />
        </div>
      )}
    </>
  );
};

export default Addbusiness;
