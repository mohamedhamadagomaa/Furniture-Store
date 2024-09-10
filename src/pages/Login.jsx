import React from "react";
import { FormInput, SubmitBtn } from "../components";
import { Form, Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { redirect } from "react-router-dom";
import { toast } from "react-toastify";
import { customFetch } from "../utils";
import { loginUser } from "../features/user/userSlice";

export const action =
  (store) =>
  async ({ request }) => {
    const formData = await request.formData();
    const data = Object.fromEntries(formData);
    try {
      const response = await customFetch.post("/auth/local", data);
      store.dispatch(loginUser(response.data));
      toast.success("login successfully");
      return redirect("/");
    } catch (error) {
      error?.response?.data?.message || "please double check your credentials";
      return null;
    }
  };

const Login = () => {
  return (
    <section className="h-screen grid place-items-center">
      <Form
        method="post"
        className="card w-96 p-8 bg-base-100 shadow-lg flex flex-col gap-y-4"
      >
        <h4 className="text-center text-3xl font-bold">Login</h4>
        <FormInput
          type={"email"}
          label={"email"}
          name={"identifier"}
          defaultValue={"test@test.com"}
        />
        <FormInput
          type={"password"}
          label={"password"}
          name={"password"}
          defaultValue={"secret"}
        />
        <div className="mt-4">
          <SubmitBtn text={"login"} />
        </div>
        <button className="btn btn-secondary btn-block uppercase" type="button">
          guest user
        </button>
        <p className="text-center">
          not a member yet?{" "}
          <Link
            to={"/register"}
            className="capitalize ml-2 link link-hover link-primary"
          >
            register
          </Link>
        </p>
      </Form>
    </section>
  );
};

export default Login;
