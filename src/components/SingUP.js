import React, { useEffect } from "react";
import { Button, Form } from "react-bootstrap";
import {
  useCreateUserWithEmailAndPassword,
  useUpdateProfile,
} from "react-firebase-hooks/auth";
import { useForm } from "react-hook-form";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { auth } from "../firebas.init";
import SocialSignIn from "./SocialSignIn";

const SingUP = () => {
  const [
    createUserWithEmailAndPassword,
    emailUser,
    emailUserLoading,
    emailUserError,
  ] = useCreateUserWithEmailAndPassword(auth);
  const [updateProfile, updating, updatingError] = useUpdateProfile(auth);
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm();
  let errorElement;
  const navigate = useNavigate();
  const location=useLocation();
  const from = location.state?.from?.pathname || "/";
  useEffect(()=>{
    if (emailUser) {
    navigate(from, { replace: true });
  }
  },[emailUser,navigate,from])
  
  if (emailUserLoading || updating) {
    return <h1>Loading ...</h1>;
  }
  if (emailUserError || updatingError) {
    errorElement = <h1 className="text-danger">{emailUserError?.message}</h1>;
  }
  const onSubmit = async (data) => {
    const name = data.fullName;
    const email = data.email;
    const password = data.email;
    await createUserWithEmailAndPassword(email, password);
    await updateProfile({ displayName: name });
  };
  return (
    <div className="mx-auto w-50 m-5">
      <Form onSubmit={handleSubmit(onSubmit)}>
        {/* full name */}
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Full Name</Form.Label>
          <Form.Control
            {...register("fullName", {
              required: {
                value: true,
                message: "Full name is required",
              },
            })}
            autoComplete="off"
            type="text"
            placeholder="Full Name"
          />
          <Form.Text>
            {errors?.fullName?.type === "required" && (
              <p className="text-danger fs-4">
                <small>{errors?.fullName?.message}</small>
              </p>
            )}
          </Form.Text>
        </Form.Group>
        {/* email address */}
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control
            {...register("email", {
              required: {
                value: true,
                message: "Email is required",
              },
            })}
            autoComplete="off"
            type="email"
            placeholder="Enter email"
          />
          <Form.Text className="text-muted">
            {errors?.email?.type === "required" && (
              <p className="text-danger fs-4">
                <small>{errors?.email?.message}</small>
              </p>
            )}
          </Form.Text>
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control
            {...register("password", {
              required: {
                value: true,
                message: "Password is required",
              },
            })}
            type="password"
            placeholder="Password"
          />
          <Form.Text className="text-muted">
            {errors?.password?.type === "required" && (
              <p className="text-danger fs-4">
                <small>{errors?.password?.message}</small>
              </p>
            )}
          </Form.Text>
        </Form.Group>
        <Button variant="dark" type="submit">
          Sing Up
        </Button>
      </Form>
      {errorElement}
      <p className="text-center">
        Already have account ?
        <span className="text-primary">
          <Link to="/sign-in">please sign in</Link>
        </span>
      </p>
      <SocialSignIn />
    </div>
  );
};

export default SingUP;
