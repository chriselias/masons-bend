import React, { useState, useEffect } from "react";

import firebase from "../firebase";
import { Link } from "react-router-dom";

import { useCollectionData } from "react-firebase-hooks/firestore";
import Business from "./Business";
import SearchBar from "./SearchBar";
import Alert from "./Alert";

const firestore = firebase.firestore();

const Directory = () => {
  const [checkBoxValue, setCheckBoxValue] = useState(false);
  const businessesRef = firestore.collection("businesses");

  useEffect(() => {
    getBusinesses();
  }, []);

  const query = businessesRef.orderBy("createdAt").limit(3);
  const [businessesData] = useCollectionData(query, { idField: "id" });

  const [businesses, setBusinesses] = useState([]);
  const [ogBusinesses, setOgBusinesses] = useState([]);

  const getBusinesses = async () => {
    await firebase
      .firestore()
      .collection("businesses")
      .orderBy("createdAt")
      .onSnapshot((querySnapshot) => {
        const items = [];
        querySnapshot.forEach((doc) => {
          const business = doc.data();
          business.id = doc.id;
          items.push(business);
        });
        setBusinesses(items);
        setOgBusinesses(items);
      });
    // await businessesRef.onSnapshot((querySnapshot) => {
    //   const items = [];
    //   querySnapshot.forEach((item) => {
    //     items.push(item.data());
    //   });
    //   setBusinesses(items);
    //   setOgBusinesses(items);
    // });
  };

  const filterBusinessByCategory = (e) => {
    const category = e.target.value;
    if (e.target.value === "") {
      setBusinesses(ogBusinesses);
    } else {
      const filtered = ogBusinesses.filter((biz) => {
        return Object.values(biz).includes(category);
      });
      setBusinesses(filtered);
    }
  };

  const toggleMBOwners = () => {
    if (checkBoxValue === true) {
      console.log("filtering..", checkBoxValue);
    }
    setCheckBoxValue(!checkBoxValue);
  };

  const searchBusinesses = (e) => {
    const searchTerm = e.target.value;
    const filtered = ogBusinesses.filter((biz) => {
      return biz.name.toLowerCase().includes(searchTerm.toLowerCase());
    });
    setBusinesses(filtered);
    console.log(e.target.value);
  };
  return (
    <>
      <div className=" bg-primary max-w-screen-lg m-auto p-8 grid grid-cols-4 gap-4 sticky top-0">
        <input
          className="appearance-none block w-full text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500 col-span-2"
          onChange={searchBusinesses}
          placeholder="Search Business Name"
        />
        <div className="relative">
          <select
            className="block appearance-none w-full border border-gray-200 text-gray-700 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
            onChange={filterBusinessByCategory}
          >
            <option value="">Select a Category</option>
            <option value="plumber">plumber</option>
            <option value="electrician">electrician</option>
            <option value="painter">painter</option>
            <option value="food">food / beverage</option>
            <option value="childcare">child care</option>
            <option value="dentist">dentist</option>
            <option value="doctor">doctor</option>
            <option value="photographer">photographer</option>
            <option value="petcare">pet care</option>
            <option value="realtor">realtor</option>
            <option value="handyman">handyman</option>
            <option value="other">other</option>
          </select>
          <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
            <svg
              className="fill-current h-4 w-4"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
            >
              <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
            </svg>
          </div>
        </div>

        {/* <button
          type="buttom"
          value="plumber"
          onClick={filterBusinessByCategory}
        >
          Plumber
        </button> */}
        {/* <SearchBar /> */}
        <div className="flex content-center">
          <label className="inline-flex items-center">
            <input
              checked={checkBoxValue}
              type="checkbox"
              className="form-checkbox text-indigo-600 h-4 w-4"
              onChange={toggleMBOwners}
            />
            <span className="ml-2">Owned by MB Resident</span>
          </label>
        </div>
      </div>
      <div className="max-w-screen-lg m-auto bg-white p-4 shadow-lg">
        <div>
          {businesses.length > 0 ? (
            businesses.map((business) => (
              <Link to={`/business/${business.id}`} key={business.id}>
                <Business info={business} />
              </Link>
            ))
          ) : (
            <div className="p-4">
              <Alert
                text="Sorry no busienss matches that category. Try selecting another one."
                color="yellow"
              />
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default Directory;
