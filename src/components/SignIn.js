import React from "react";
import { Button, Form } from "react-bootstrap";
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";
import SocialSignIn from "./SocialSignIn";

const SignIn = () => {
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm();
  const onSubmit = (data) => {
    const email =data.email;
    const password =data.email;
    console.log(email, password);
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
          Sing Up
        </Button>
      </Form>
      <p className="text-center">
        New simple react app create an account ?
        <span className="text-primary">
          <Link to="/sing-up">please sing up</Link>
        </span>
      </p>
      <SocialSignIn/>
    </div>
  );
};

export default SignIn;
