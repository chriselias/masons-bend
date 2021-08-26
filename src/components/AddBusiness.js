import React, { useState } from "react";
import { useForm } from "react-hook-form";
import firebase from "../firebase";
import { useHistory } from "react-router-dom";

import Input from "./Input";
const firestore = firebase.firestore();
const auth = firebase.auth();

const Addbusiness = () => {
  let history = useHistory();
  const [alert, setAlert] = useState(false);

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();

  const addBusiness = async (data) => {
    const { uid, photoURL } = auth.currentUser;
    console.log("val", data);
    const {
      name,
      email,
      address,
      city,
      state,
      zip,
      website,
      facebook,
      instagram,
      phone,
      category,
      description,
    } = data;
    const businessesRef = firestore.collection("businesses");
    await businessesRef.add({
      name,
      email,
      phone,
      website,
      address,
      city,
      state,
      zip,
      category,
      createdAt: firebase.firestore.FieldValue.serverTimestamp(),
      uid,
      photoURL,
    });
    history.push("/");
  };

  const businessValidation = {
    required: "Enter a Business Name",
    maxLength: 50,
  };

  return (
    <div className="md:grid md:grid-cols-3 gap-8 max-w-screen-lg m-auto p-6 md:p-12">
      {alert && (
        <div
          className="py-3 px-5 mb-4 bg-green-100 text-green-900 text-sm rounded-md border border-green-200 flex items-center col-span-3"
          role="alert"
        >
          <div className="w-4 mr-2">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M14 10h4.764a2 2 0 011.789 2.894l-3.5 7A2 2 0 0115.263 21h-4.017c-.163 0-.326-.02-.485-.06L7 20m7-10V5a2 2 0 00-2-2h-.095c-.5 0-.905.405-.905.905 0 .714-.211 1.412-.608 2.006L7 11v9m7-10h-2M7 20H5a2 2 0 01-2-2v-6a2 2 0 012-2h2.5"
              />
            </svg>
          </div>
          <span>
            <strong>Success!</strong> Business has been added
          </span>
        </div>
      )}
      <div className="w-full bg-blue-50 p-8 mr-8 rounded-md shadow-md mb-8">
        <p>
          Hey Benders! <span>👋 </span>
        </p>
        <p></p>
      </div>

      <form className="w-full col-span-2" onSubmit={handleSubmit(addBusiness)}>
        <h1 className="mb-4 text-lg font-bold">Add a Business</h1>
        {/* <Input name="name" label="Business Name" /> */}
        <div class="flex flex-wrap -mx-3 mb-6">
          <div class="w-full px-3">
            <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold">
              Business Name*
            </label>
            <input
              name="name"
              className="appearance-none block w-full bg-gray-50 text-gray-700 border rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-purple-500"
              {...register("name", {
                required: "Enter a Business Name",
                maxLength: 50,
              })}
            />
            {errors.name && (
              <p className="text-sm text-red-600">{errors.name.message}</p>
            )}
          </div>
        </div>
        <div class="flex flex-wrap -mx-3 mb-6">
          <div class="w-full px-3">
            <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2">
              Description*
            </label>
            <textarea
              className="appearance-none block w-full bg-gray-50 text-gray-700 border rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-purple-500"
              {...register("description", {
                required: "Enter a Description",
                maxLength: 50,
              })}
            />

            {errors.description && (
              <p className="text-sm text-red-600">
                {errors.description.message}
              </p>
            )}
          </div>
        </div>

        <div class="flex flex-wrap -mx-3 mb-6">
          <div class="w-full md:w-1/2 px-3 mb-6 md:mb-0">
            <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2">
              Category*
            </label>
            <div className="relative">
              <select
                className="block appearance-none w-full bg-gray-50 border border-gray-200 text-gray-700 py-3 px-4 pr-8 mb-3 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                {...register("category", {
                  required: "Select a Category",
                })}
              >
                <option value="">Select...</option>
                <option value="plumber">plumber</option>
                <option value="electrician">electrician</option>
                <option value="painter">painter</option>
                <option value="food_beverage">food / beverage</option>
                <option value="child care">child care</option>
                <option value="pet care">pet care</option>
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
            {errors.category && (
              <p className="text-sm text-red-600">{errors.category.message}</p>
            )}
          </div>
          <div className="w-full md:w-1/2 px-3">
            <label
              className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
              for="grid-last-name"
            >
              Owned By a Masons Bend Resisdent?
            </label>
            <div className="mt-2  mb-3">
              <label className="inline-flex items-center">
                <input
                  type="radio"
                  className="form-radio"
                  value="true"
                  {...register("resident", {
                    required: "Please select Yes or No",
                  })}
                />
                <span className="ml-2">Yes</span>
              </label>
              <label className="inline-flex items-center ml-6">
                <input
                  type="radio"
                  className="form-radio"
                  value="false"
                  {...register("resident", {
                    required: "Please select Yes or No",
                  })}
                />
                <span className="ml-2">No</span>
              </label>
            </div>
            {errors.resident && (
              <p className="text-sm text-red-600">{errors.resident.message}</p>
            )}
          </div>
        </div>

        <div class="flex flex-wrap -mx-3 mb-6">
          <div class="w-full md:w-1/2 px-3 mb-6 md:mb-0">
            <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold">
              Phone
            </label>
            <input
              className="appearance-none block w-full bg-gray-50 text-gray-700 border rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-purple-500"
              {...register("phone")}
            />
          </div>
          <div class="w-full md:w-1/2 px-3">
            <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold">
              Email
            </label>
            <input
              className="appearance-none block w-full bg-gray-50 text-gray-700 border rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-purple-500"
              {...register("email")}
            />
          </div>
        </div>

        <div class="flex flex-wrap -mx-3 mb-6">
          <div class="w-full px-3">
            <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold">
              Address
            </label>
            <input
              className="appearance-none block w-full bg-gray-50 text-gray-700 border rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-purple-500"
              {...register("address")}
            />
          </div>
        </div>

        <div className="flex flex-wrap -mx-3 mb-2">
          <div className="w-full md:w-1/3 px-3 mb-6 md:mb-0">
            <label
              className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
              for="grid-city"
            >
              City
            </label>
            <input
              className="appearance-none block w-full bg-gray-50 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
              type="text"
              placeholder="Fort Mill"
              {...register("city")}
            />
          </div>
          <div className="w-full md:w-1/3 px-3 mb-6 md:mb-0">
            <label
              className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
              for="grid-state"
            >
              State
            </label>
            <div className="relative">
              <select
                className="block appearance-none w-full bg-gray-50 border border-gray-200 text-gray-700 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                {...register("state")}
              >
                <option value="SC">South Carolina</option>
                <option value="NC">North Carolina</option>
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
          </div>
          <div class="w-full md:w-1/3 px-3 mb-6 md:mb-0">
            <label
              class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
              for="grid-zip"
            >
              Zip
            </label>
            <input
              class="appearance-none block w-full bg-gray-50 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
              id="grid-zip"
              type="text"
              placeholder="29708"
              {...register("zip")}
            />
          </div>
        </div>

        <div class="flex flex-wrap -mx-3 mb-2">
          <div class="w-full px-3 mb-6 md:mb-0">
            <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold">
              Website
            </label>
            <input
              className="appearance-none block w-full bg-gray-50 text-gray-700 border rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-purple-500"
              {...register("website")}
            />
          </div>
        </div>

        <div class="flex flex-wrap -mx-3 mb-2">
          <div class="w-full md:w-1/2 px-3 mb-6 md:mb-0">
            <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold">
              Facebook
            </label>
            <input
              className="appearance-none block w-full bg-gray-50 text-gray-700 border rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-purple-500"
              {...register("website")}
            />
          </div>
          <div class="w-full md:w-1/2 px-3">
            <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold">
              Instagram
            </label>
            <input
              className="appearance-none block w-full bg-gray-50 text-gray-700 border rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-purple-500"
              {...register("email")}
            />
          </div>
        </div>

        <button
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
          type="submit"
        >
          Submit
        </button>
        <p className="py-8 text-gray-600">* Required Fields</p>
      </form>
    </div>
  );
};

export default Addbusiness;
