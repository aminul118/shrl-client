import { useContext, useState } from "react";
import { FaEye, FaEyeSlash, FaGoogle } from "react-icons/fa";
import {
  Link,
  ScrollRestoration,
  useLocation,
  useNavigate,
} from "react-router";

import { toast } from "react-toastify";
import { Helmet } from "react-helmet";
import { AuthContext } from "../../providers/AuthProvider";

const Login = () => {
  const [eye, setEye] = useState(false);
  const { signInUser, handleGoogleSignIn } = useContext(AuthContext);
  const location = useLocation();
  const navigate = useNavigate();
  // console.log(location);
  const handlePasswordToggle = () => {
    setEye(!eye);
  };
  const handleFormSubmit = (e) => {
    e.preventDefault();
    const form = new FormData(e.target);
    const email = form.get("email");
    const password = form.get("password");
    console.log(email, password);
    signInUser(email, password)
      .then((result) => {
        const user = result.user;
        toast.success("Login successfully", {
          position: "top-right",
        });
        navigate(location.state ? location.state : "/");

        console.log("Sign in user", user);
      })
      .catch((error) => {
        toast.error("Email or password is not correct");
      });
  };

  return (
    <div
      data-aos="fade-right"
      className="flex items-center justify-center min-h-[calc(100vh-286px)]"
    >
      <Helmet>
        <title>Login || Alpha Sports</title>
      </Helmet>
      <form
        onSubmit={handleFormSubmit}
        className="card-body max-w-lg shadow-lg rounded-lg p-10"
      >
        <h1 className="text-5xl font-bold">Login</h1>
        <div className="divider"></div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Email</span>
          </label>
          <input
            type="email"
            name="email"
            placeholder="email"
            className="input input-bordered"
            required
          />
        </div>
        <div className="form-control relative">
          <label className="label">
            <span className="label-text">Password</span>
          </label>

          <input
            type={!eye ? "password" : "text"}
            name="password"
            placeholder="password"
            className="input input-bordered"
            required
          />
          <label className="label">
            <a href="#" className="label-text-alt link link-hover">
              Forgot password?
            </a>
          </label>
          <button onClick={handlePasswordToggle}>
            {eye ? (
              <FaEye className="absolute right-3 top-12" />
            ) : (
              <FaEyeSlash className="absolute right-3 top-12" />
            )}
          </button>
        </div>
        <div className="form-control mt-6">
          <button className="btn btn-primary">Login</button>
        </div>
        <div className="divider">or</div>

        <button
          onClick={handleGoogleSignIn}
          className="flex items-center justify-center gap-3  btn "
        >
          <FaGoogle /> Login With Google
        </button>
        <p className="text-center py-2">
          You don't have an account? Please
          <Link to={"/register"} className="ml-2 text-blue-600 hover:underline">
            Register
          </Link>
        </p>
      </form>
      <ScrollRestoration />
    </div>
  );
};

export default Login;
