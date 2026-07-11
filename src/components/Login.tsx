import { useForm } from "react-hook-form";
import type { LoginRequest } from "../interfaces/LoginRequest";
import type { RegisterRequest } from "../interfaces/RegisterRequest";

function Login() {
  const {register,handleSubmit,
    reset,
  } = useForm<LoginRequest>();

  const onSubmitLogics = (data: LoginRequest) => {

    console.log(data);

    // Read all registered users from localStorage
    const users: RegisterRequest[] = JSON.parse(
      localStorage.getItem("users") || "[]"
    );

    // Check whether user exists
    const user = users.find(
      (u) =>
        u.email === data.email &&
        u.password === data.password
    );

    if (user) {

      alert("Login Successful");

      // Store logged-in user
      localStorage.setItem(
        "loggedInUser",
        JSON.stringify(user)
      );

      reset();
        window.location.href = "/";
    } else {

      alert("Invalid Email or Password");

    }
  };

  return (
    <>
      <h2>Login</h2>

      <form onSubmit={handleSubmit(onSubmitLogics)}>

        <input
          type="email"
          placeholder="Enter Email"
          {...register("email", {
            required: "Email is required",
          })}
        />

        <br />
        <br />

        <input
          type="password"
          placeholder="Enter Password"
          {...register("password", {
            required: "Password is required",
          })}
        />

        <br />
        <br />

        <button type="submit">
          Login
        </button>

      </form>
    </>
  );
}

export default Login;






















/* import { useForm } from "react-hook-form";
import type { LoginRequest } from "../interfaces/LoginRequest";
import { serviceLogin } from "../services/LoginService";

function Login() {

    const {
        register,
        handleSubmit,
        reset
    } = useForm<LoginRequest>();

    const onSubmit = async (data: LoginRequest) => {

        try {

            const response = await serviceLogin(data);
            localStorage.setItem("token", response.token);

            console.log(response);

            alert("Login Successful");

            reset();

        } catch (error) {

            alert("Invalid Email or Password");

            console.log(error);
        }

    };

    return (

        <form onSubmit={handleSubmit(onSubmit)}>

            <input
                type="email"
                placeholder="Email"
                {...register("email")}
            />

            <br /><br />

            <input
                type="password"
                placeholder="Password"
                {...register("password")}
            />

            <br /><br />

            <button type="submit">
                Login
            </button>

        </form>

    );
}

export default Login; */