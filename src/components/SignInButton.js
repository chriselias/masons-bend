import firebase from "../firebase";

const auth = firebase.auth();

const SignInButton = () => {
  const signInWithFacebook = () => {
    const provider = new firebase.auth.FacebookAuthProvider();
    auth.signInWithPopup(provider);
  };

  return (
    <button
      className="inline-block text-sm px-4 py-2 leading-none border rounded text-primary border-primary hover:border-transparent hover:text-teal-500 hover:bg-primary hover:text-white mt-4 mr-4"
      onClick={signInWithFacebook}
    >
      Sign into Facebook
    </button>
  );
};

export default SignInButton;
