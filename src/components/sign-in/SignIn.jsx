import React from "react";
import { useState } from "react";
import {
  signInWithGooglePopup,
  createUserDocumentFromAuth,
  signInAuthUserWithEmailAndPassword,
} from "../../utilities/firebase/firebase";

import FormInput from "../form-input/formInput";

const defaultFormFields = {
  email: "",
  password: "",
};

const SignIn = () => {
  const [formFields, setFormFields] = useState(defaultFormFields);
  const { email, password } = formFields;

  const resetFields = () => {
    setFormFields(defaultFormFields);
  };

  const handleChange = (event) => {
    const { name, value } = event.target;

    setFormFields({ ...formFields, [name]: value });
  };

  const signInWithGoogle = async () => {
    const { user } = await signInWithGooglePopup();
    await createUserDocumentFromAuth(user);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      const response = await signInAuthUserWithEmailAndPassword(
        email,
        password
      );
      console.log(response);
      resetFields();
    } catch (error) {
      if (error === "auth/wrong-password") {
        alert("Wrong password");
      } else if ((error = "auth/user-not-found")) {
        alert("User not found");
      }
      console.log(error);
    }
  };

  return (
    <div className="text-black flex justify-center items-center ">
      <div className="bg-transparent border-solid border-2 rounded-md max-w-[300px] p-10 border-black shadow-md items-center flex flex-col gap-20">
        <div>
          <h2>Already signed up?</h2>
        </div>
        <form className="flex gap-3 flex-col" onSubmit={handleSubmit}>
          <FormInput
            type="email"
            required
            onChange={handleChange}
            name="email"
            value={email}
            placeHolder="Email"
          />
          <FormInput
            type="password"
            required
            onChange={handleChange}
            name="password"
            value={password}
            placeHolder="Password"
          />

          <div className="flex flex-col items-center justify-center">
            <button
              className="bg-[#151837] w-[100%] my-1 text-white rounded-sm"
              type="submit"
            >
              Sign in!
            </button>
            <button
              type="button"
              className="bg-[#151837] w-[100%] my-1 text-white rounded-sm"
              onClick={signInWithGoogle}
            >
              Google sign in
            </button>
          </div>
        </form>
        <h1>Need an account?</h1>
      </div>
    </div>
  );
};

export default SignIn;
