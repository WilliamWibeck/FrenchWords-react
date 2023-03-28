import React from "react";
import { useState } from "react";
import {
  createAuthUserWithEmailAndPassword,
  createUserDocumentFromAuth,
} from "../../utilities/firebase/firebase";

import FormInput from "../form-input/formInput";

const defaultFormFields = {
  displayName: "",
  email: "",
  password: "",
  confirmPassword: "",
};

const SignUp = () => {
  const [formFields, setFormFields] = useState(defaultFormFields);
  const { displayName, email, password, confirmPassword } = formFields;

  const resetFields = () => {
    setFormFields(defaultFormFields);
  };
  const handleSubmit = async (event) => {
    event.preventDefault();

    if (password !== confirmPassword) {
      alert("passwords do not match");
      return;
    }

    try {
      const { user } = await createAuthUserWithEmailAndPassword(
        email,
        password
      );
      console.log(user);

      await createUserDocumentFromAuth(user, { displayName });

      resetFields();
    } catch (error) {
      if (error.code === "auth/email-already-in-use") {
        alert("Email is already in use!");
      }
      console.error(error);
    }
  };
  <formInput />;

  const handleChange = (event) => {
    const { name, value } = event.target;

    setFormFields({ ...formFields, [name]: value });
  };

  return (
    <div className="text-black flex items-center ">
      <div className="bg-transparent border-solid border-2  max-w-[700px] border-black shadow-md h-[700px¨] items-center flex flex-col p-10 gap-20">
        <h1 className="text-[64px] 2">Sign up!</h1>
        <form
          className="flex gap-3 flex-col text-xl bg-transparent"
          onSubmit={handleSubmit}
        >
          <FormInput
            type="text"
            required
            onChange={handleChange}
            name="displayName"
            value={displayName}
            placeHolder="Name"
            className="bg-transparent border-b-2 border-black placeholder-black text-center"
          />
          <FormInput
            type="email"
            required
            onChange={handleChange}
            name="email"
            value={email}
            placeHolder="Email"
            className="bg-transparent border-b-2 border-black placeholder-black text-center"
          />
          <FormInput
            type="password"
            required
            onChange={handleChange}
            name="password"
            value={password}
            placeHolder="Password"
            className="bg-transparent border-b-2 border-black placeholder-black text-center"
          />
          <FormInput
            type="password"
            required
            onChange={handleChange}
            name="confirmPassword"
            value={confirmPassword}
            placeHolder="Confirm Password"
            className="bg-transparent border-b-2 border-black placeholder-black text-center"
          />

          <div className="flex items-center justify-center">
            <button
              className="bg-[#151837] w-[100%] my-1 text-white rounded-sm"
              type="submit"
            >
              Create Account
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default SignUp;
