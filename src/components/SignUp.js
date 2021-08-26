import React from "react";

const Signup = () => {
  return (
    <>
      <div className="max-w-screen-lg m-auto p-6 md:p-12 shadow-xl rounded-md">
        sign up form
        <p>
          In order to post a business in the Masons Bend Directory you must
          signup.
        </p>
        <p>
          Your information is safe and secure and not sold to 3rd parties. It is
          simply to prevent spam and malicious users.
        </p>
        <div className="flex">
          <button className="bg-blue-800 hover:bg-blue-900 text-blue-50 font-bold py-2 px-4 rounded inline-flex items-center mr-4 shadow-md">
            <span>Facebook</span>
          </button>
          <button className="bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded inline-flex items-center">
            <span>Email</span>
          </button>
        </div>
      </div>
    </>
  );
};

export default Signup;
