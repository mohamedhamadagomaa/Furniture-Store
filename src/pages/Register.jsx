import React from "react";
import { FormInput, SubmitBtn } from "../components";
import { Form, Link } from "react-router-dom";
const Register = () => {
  return <section className="h-screen grid place-items-center">
  <Form method="post" className="card w-96 p-8 bg-base-100 shadow-lg flex flex-col gap-y-4">
<h4 className="capitalize text-center font-bold text-3xl ">register</h4>
<FormInput type={'text'} label={'username'} name={'username'} defaultValue={'mohamed'} />
<FormInput type={'email'} label={'email'} name={'email'} defaultValue={'test@test.com'} />
<FormInput type={'password'} label={'password'} name={'password'} defaultValue={''} />
  <div className="mt-4">
    <SubmitBtn text={'register'} />
  </div>
  <p className="text-center">
          Already a member? {' '}
          <Link
            to={"/login"}
            className="capitalize ml-2 link link-hover link-primary"
          >
            login
          </Link>
        </p>
  </Form>
  </section>;
};

export default Register;
