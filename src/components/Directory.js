import React, { useState, useEffect } from "react";

import firebase from "../firebase";

import { useCollectionData } from "react-firebase-hooks/firestore";
import Business from "./Business";
import SearchBar from "./SearchBar";

const firestore = firebase.firestore();

const Directory = () => {
  const businessesRef = firestore.collection("businesses");

  useEffect(() => {
    getBusinesses();
  }, []);

  const query = businessesRef.orderBy("name").limit(3);
  const [businessesData] = useCollectionData(query, { idField: "id" });

  const [businesses, setBusinesses] = useState([]);
  const [ogBusinesses, setOgBusinesses] = useState([]);

  const getBusinesses = async () => {
    await firebase
      .firestore()
      .collection("businesses")
      .orderBy("name")
      .onSnapshot((querySnapshot) => {
        const items = [];
        querySnapshot.forEach((item) => {
          items.push(item.data());
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
  console.log("bd", businessesData);

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
      <div className="max-w-screen-lg m-auto bg-blue-50 p-4 border border-gray-200 grid grid-cols-2 gap-4">
        <input
          className="appearance-none block w-full text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
          onChange={searchBusinesses}
          placeholder="Search Business Name"
        />
        <div className="relative">
          <select
            className="block appearance-none w-full border border-gray-200 text-gray-700 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
            onChange={filterBusinessByCategory}
          >
            <option value="">Select a Category</option>
            <option value="plumber">Plumber</option>
            <option value="electrician">Electrician</option>
          </select>
          <div class="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
            <svg
              class="fill-current h-4 w-4"
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
      </div>
      <div className="max-w-screen-lg m-auto">
        {businesses &&
          businesses.map((business) => (
            <Business key={business.id} info={business} />
          ))}
      </div>
    </>
  );
};

export default Directory;
