import { useContext, useState } from "react";
import { FaEye, FaEyeSlash, FaGoogle } from "react-icons/fa";
import { Link, ScrollRestoration, useNavigate } from "react-router";

import { toast } from "react-toastify";
import { AuthContext } from "../../providers/AuthProvider";

const Register = () => {
  const [eye, setEye] = useState(false);
  const { createUser } = useContext(AuthContext);
  const [passwordError, setPasswordError] = useState("");
  const navigate = useNavigate();

  const handlePasswordToggle = () => {
    setEye(!eye);
  };

  const validatePassword = (password) => {
    const regex = /^(?=.*[a-z])(?=.*[A-Z]).{6,}$/;
    if (!regex.test(password)) {
      if (password.length < 6) {
        setPasswordError("Password must be at least 6 characters.");
      } else if (!/[A-Z]/.test(password)) {
        setPasswordError(
          "Password must contain at least one uppercase letter."
        );
      } else if (!/[a-z]/.test(password)) {
        setPasswordError(
          "Password must contain at least one lowercase letter."
        );
      } else {
        setPasswordError("");
      }
    } else {
      setPasswordError("");
    }
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    const form = new FormData(e.target);
    const name = form.get("name");
    const email = form.get("email");
    const password = form.get("password");
    const photo = form.get("photo");

    // Validate password before submitting the form
    validatePassword(password);

    // If password is invalid, prevent form submission
    if (passwordError) return;

    createUser(email, password)
      .then((result) => {
        const user = result.user;
        toast.success("Create user account successfully");
        const newUser = { name, email, photo };

        fetch("https://alpha-sports-server.vercel.app/users", {
          method: "POST",
          headers: {
            "content-type": "application/json",
          },
          body: JSON.stringify(newUser),
        })
          .then((res) => res.json())
          .then((data) => {
            navigate("/login");
          });
      })
      .catch((error) => {
        console.error("Error creating user:", error);
      });
  };

  return (
    <div
      className="flex items-center justify-center min-h-[calc(100vh-286px)]"
      data-aos="fade-left"
    >
      <form
        onSubmit={handleFormSubmit}
        className="card-body max-w-lg shadow-lg rounded-lg p-10"
      >
        <h1 className="text-5xl font-bold">Register</h1>
        <div className="divider"></div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Name</span>
          </label>
          {/* Name */}
          <input
            type="name"
            name="name"
            placeholder="name"
            className="input input-bordered"
            required
          />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Email</span>
          </label>
          {/* Email */}
          <input
            type="email"
            name="email"
            placeholder="email"
            className="input input-bordered"
            required
          />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Photo Url</span>
          </label>
          {/* Photo */}
          <input
            type="text"
            name="photo"
            placeholder="photo url"
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
            onChange={(e) => validatePassword(e.target.value)} // On password change, validate
            required
          />
          {/* Password error message */}
          {passwordError && (
            <p className="text-red-500 text-sm">{passwordError}</p>
          )}
          
          <button type="button" onClick={handlePasswordToggle}>
            {eye ? (
              <FaEye className="absolute right-3 top-12" />
            ) : (
              <FaEyeSlash className="absolute right-3 top-12" />
            )}
          </button>
        </div>
        <div className="form-control mt-6">
          <button className="btn btn-primary" disabled={passwordError}>
            {/* Disable if there's a password error */}
            Register
          </button>
        </div>

        <p className="text-center py-2">
          Already have an account? Please
          <Link to={"/login"} className="ml-2 text-blue-600 hover:underline">
            Login
          </Link>
        </p>
      </form>
      <ScrollRestoration />
    </div>
  );
};

export default Register;
