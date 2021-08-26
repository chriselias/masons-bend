import React from "react";
import { useForm } from "react-hook-form";

const Input = (props) => {
  const { name, label, validation } = props;
  const { register } = useForm();
  return (
    <div>
      <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold">
        {label}
      </label>
      <input
        className="appearance-none block w-full bg-gray-100 text-gray-700 border rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-purple-500"
        {...register("name")}
      />
    </div>
  );
};

export default Input;
