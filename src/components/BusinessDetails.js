import React from "react";
import { useParams } from "react-router-dom";
import firebase from "firebase/app";
import { useDocumentData } from "react-firebase-hooks/firestore";
const firestore = firebase.firestore();

const BusinessDetails = () => {
  let { id } = useParams();
  const businessesRef = firestore.collection("businesses");
  const query = firebase.firestore().doc(`businesses/${id}`);
  const [business] = useDocumentData(query, { idField: "id" });

  return (
    <div className="max-w-screen-lg m-auto bg-white p-4">
      <div className="text-sm">
        Home {">"} {business && business.name}
      </div>
      {business && (
        <div>
          <h2>{business.name}</h2>
          {business.address && (
            <h4>
              {business.address} {business.city}, {business.state}{" "}
              {business.zip}
            </h4>
          )}
          <span>{business.phone}</span>
        </div>
      )}
    </div>
  );
};

export default BusinessDetails;
