import React from "react";
import { FormInput, SubmitBtn } from "../components";
import { Form, Link, useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { redirect } from "react-router-dom";
import { toast } from "react-toastify";
import { customFetch } from "../utils";
import { loginUser } from "../features/user/userSlice";
import { FaToiletPaperSlash } from "react-icons/fa6";

export const action =
  (store) =>
  async ({ request }) => {
    const formData = await request.formData();
    const data = Object.fromEntries(formData);
    try {
      const response = await customFetch.post("/auth/local", data);
      store.dispatch(loginUser(response.data));
      toast.success("login successfully");
      console.log(response);
      return redirect("/");
    } catch (error) {
      error?.response?.data?.message || "please double check your credentials";
      return null;
    }
  };

const Login = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const loginAsGuestUser = async () => {
    try {
      const response = await customFetch.post("/auth/local", {
        identifier: "test@test.com",
        password: "secret",
      });
      dispatch(loginUser(response.data));
      toast.success("Welcome Guest User");
      navigate("/");
    } catch (error) {
      console.log(error);
      toast.error("guest user login error.please try later.");
    }
  };
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
          // defaultValue={"test@test.com"}
        />
        <FormInput
          type={"password"}
          label={"password"}
          name={"password"}
          // defaultValue={"secret"}
        />
        <div className="mt-4">
          <SubmitBtn text={"login"} />
        </div>
        <button
          className="btn btn-secondary btn-block uppercase"
          type="button"
          onClick={loginAsGuestUser}
        >
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
