import React, { useEffect } from "react";
import { Button, Form } from "react-bootstrap";
import { useSignInWithEmailAndPassword } from "react-firebase-hooks/auth";
import { useForm } from "react-hook-form";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { auth } from "../firebas.init";
import SocialSignIn from "./SocialSignIn";

const SignIn = () => {
  const [signInWithEmailAndPassword, emailUser, emailUserLoading, emailUserError] =
    useSignInWithEmailAndPassword(auth);
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm();
   let errorElement;
   const navigate = useNavigate();
   const location =useLocation();
   const from = location.state?.from?.pathname || "/";
   useEffect(() => {
     if (emailUser) {
       navigate(from, { replace: true });
     }
   }, [emailUser, navigate, from]);
   if (emailUserLoading) {
     return <h1>Loading ...</h1>;
   }
   if (emailUserError) {
     errorElement = <h1 className="text-danger">{emailUserError?.message}</h1>;
   }
  const onSubmit = (data) => {
    const email =data.email;
    const password =data.email;
    signInWithEmailAndPassword(email, password);
  };
  return (
    <div className="mx-auto w-50 m-5">
      <Form onSubmit={handleSubmit(onSubmit)}>
        {/* email address */}
        <Form.Group className="mb-3 " controlId="formBasicEmail">
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
          Sing In
        </Button>
      </Form>
      {errorElement}
      <p className="text-center">
        New simple react app create an account ?
        <span className="text-primary">
          <Link to="/sing-up">please sing up</Link>
        </span>
      </p>
      <SocialSignIn />
    </div>
  );
};

export default SignIn;
