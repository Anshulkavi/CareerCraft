import React, { useState } from "react";
import { useLocation, useNavigate, Link } from "react-router-dom";
import GoogleButton from "../components/ui/googleButton";

function AuthForm() {
  const location = useLocation();
  const navigate = useNavigate();
  const isLogin = location.pathname === "/login";

  const [formData, setFormData] = useState({
    username: "",
    email: "",
    password: "",
  });

  const [message, setMessage] = useState("");

  const handleChange = (e) => {
    const { id, value } = e.target;
    setFormData((prev) => ({ ...prev, [id]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const { username, email, password } = formData;

    if (!email || !password || (!isLogin && !username)) {
      setMessage({ text: "All fields are required!", color: "red" });
      return;
    }

    if (password.length < 6) {
      setMessage({
        text: "Password must be at least 6 characters!",
        color: "red",
      });
      return;
    }

    try {
      // const endpoint = isLogin
      //   ? "https://careercraft-5kzo.onrender.com/api/token/"
      //   : "https://careercraft-5kzo.onrender.com/api/userauth/register/";
      const endpoint = isLogin
        ? "http://localhost:8000/api/token/"
        : "http://localhost:8000/api/userauth/register/";

      const body = isLogin
        ? { username: email, password }
        : { username, email, password };

      const response = await fetch(endpoint, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(body),
      });

      const data = await response.json();

      if (response.ok) {
        if (isLogin) {
          localStorage.setItem("access", data.access);
          localStorage.setItem("refresh", data.refresh)
          window.dispatchEvent(new Event("loginStatusChanged"));
          navigate("/dashboard"); // or "/resume-builder"
        } else {
          setMessage({
            text: "Signup successful! Please login.",
            color: "green",
          });
          setTimeout(() => {
            navigate("/login");
          }, 2000);
        }
      } else {
        setMessage({
          text: data.detail || data.error || "Auth failed",
          color: "red",
        });
      }
    } catch (error) {
      setMessage({ text: "Something went wrong. Try again.", color: "red" });
    }
  };

  return (
    <div className="min-h-screen flex flex-col justify-center items-center bg-gradient-to-br from-[#06070d] to-[#0b06a0] font-[Poppins]">
      <div className="mt-22 w-[350px] bg-white rounded-lg shadow-lg p-8 flex flex-col items-center text-center">
        <h2 className="text-[#303f9f] text-2xl font-semibold mb-6">
          {isLogin ? "Log In" : "Sign Up"}
        </h2>

        <form id="authForm" onSubmit={handleSubmit} className="w-full">
          {!isLogin && (
            <div className="relative mb-6 w-full">
              <input
                type="text"
                id="username"
                value={formData.username}
                onChange={handleChange}
                required
                className="peer w-full px-3 py-2 border border-gray-300 rounded-md text-sm outline-none focus:border-[#303f9f]"
              />
              <label
                htmlFor="username"
                className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-500 text-sm transition-all peer-focus:top-[-0.4rem] peer-focus:text-xs peer-focus:text-[#303f9f] peer-valid:top-[-0.4rem] peer-valid:text-xs peer-valid:text-[#303f9f] bg-white px-1"
              >
                Username
              </label>
            </div>
          )}

          <div className="relative mb-6 w-full">
            <input
              type="email"
              id="email"
              value={formData.email}
              onChange={handleChange}
              required
              className="peer w-full px-3 py-2 border border-gray-300 rounded-md text-sm outline-none focus:border-[#303f9f]"
            />
            <label
              htmlFor="email"
              className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-500 text-sm transition-all peer-focus:top-[-0.4rem] peer-focus:text-xs peer-focus:text-[#303f9f] peer-valid:top-[-0.4rem] peer-valid:text-xs peer-valid:text-[#303f9f] bg-white px-1"
            >
              Email
            </label>
          </div>

          <div className="relative mb-6 w-full">
            <input
              type="password"
              id="password"
              value={formData.password}
              onChange={handleChange}
              required
              className="peer w-full px-3 py-2 border border-gray-300 rounded-md text-sm outline-none focus:border-[#303f9f]"
            />
            <label
              htmlFor="password"
              className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-500 text-sm transition-all peer-focus:top-[-0.4rem] peer-focus:text-xs peer-focus:text-[#303f9f] peer-valid:top-[-0.4rem] peer-valid:text-xs peer-valid:text-[#303f9f] bg-white px-1"
            >
              Password
            </label>
          </div>

          <button
            type="submit"
            className="w-full bg-[#303f9f] hover:bg-[#283593] text-white py-2 px-4 rounded-md transition duration-300"
          >
            {isLogin ? "Login" : "Sign Up"}
          </button>

          <div className="mt-4 ml-2.5">
            <GoogleButton />
          </div>

          <div className="flex items-center my-4 text-gray-500 text-sm">
            <hr className="flex-grow border-t border-gray-300" />
            <span className="mx-2">or</span>
            <hr className="flex-grow border-t border-gray-300" />
          </div>

          <Link to={isLogin ? "/signup" : "/login"}>
            <button
              type="button"
              className="w-full bg-[#303f9f] hover:bg-[#283593] text-white py-2 px-4 rounded-md transition duration-300"
            >
              {isLogin ? "Sign Up" : "Login"}
            </button>
          </Link>
        </form>

        {message && (
          <p
            className={`mt-4 text-sm text-center ${
              message.color === "green" ? "text-green-600" : "text-red-600"
            }`}
          >
            {message.text}
          </p>
        )}
      </div>
    </div>
  );
}

export default AuthForm;
