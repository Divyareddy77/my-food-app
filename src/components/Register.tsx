import { useForm } from "react-hook-form";
import type { RegisterRequest } from "../interfaces/RegisterRequest";
import { useNavigate } from "react-router-dom";

function Register() {

  let {register,handleSubmit,reset}  = useForm<RegisterRequest>();

let navigate = useNavigate();

    let onSubmitLogics = (data: RegisterRequest) => {

        console.log(data);

        // registerSevice(data);

      // Read existing users
      const users: RegisterRequest[] = JSON.parse(
        localStorage.getItem("users") || "[]"
      );

    // Check duplicate email
  const userExists = users.some(
    (user) => user.email === data.email
  );

    if (userExists) {
    alert("Email already registered");
    return;
  }
    // Add id
  const newUser = { id: users.length + 1, ...data};

   // Add new user to array
  users.push(newUser);

  localStorage.setItem("users", JSON.stringify(users));
        alert("Registration successfulll");
        navigate("/login");
        reset();
    }
  return (
    <>
    <form onSubmit={handleSubmit(onSubmitLogics)}>

      <input
        type="text"
        {...register("name")}
        placeholder="Enter Username"
      />

      <br /><br />

      <input
        type="password"
        {...register("password")}
        placeholder="Enter Password"
      />

      <br /><br />

      <input
        type="email"
        {...register("email")}
        placeholder="Enter Email"
      />

      <br /><br />

      <input
        type="number"
        {...register("phone")}
        placeholder="Enter Phone Number"
      />

      <br /><br />

      <button type="submit">Register</button>

    </form>
    </>
  )
}

export default Register

























/* import React from "react";
import { useForm } from "react-hook-form";
import type { RegisterRequest } from "../interfaces/RegisterRequest";
import { registerUser } from "../apis/AuthApi";

function Register() {

  const { register, handleSubmit, reset } = useForm<RegisterRequest>();

  const onSubmit = async (data: RegisterRequest) => {
    const response = await registerUser(data);

    alert("Registered successfully")
    console.log(response);
    reset();
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>

      <input
        type="text"
        {...register("name")}
        placeholder="Username"
      />

      <br /><br />

      <input
        type="password"
        {...register("password")}
        placeholder="Password"
      />

      <br /><br />

      <input
        type="email"
        {...register("email")}
        placeholder="Email"
      />

      <br /><br />

      <input
        type="number"
        {...register("phone")}
        placeholder="Enter Phone Number"
      />

      <br /><br />

      <button type="submit">Register</button>

    </form>
  );
}

export default Register;
 */