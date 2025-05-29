// import React, { useState } from "react";
// import { Link } from "react-router-dom";
// // import Logo from "../assets/Logo.jpg";
// import styles from "./Signup.module.css"; // Ensure correct import

// function Signup() {
//   const [formData, setFormData] = useState({
//     username: "",
//     email: "",
//     password: "",
//   });

//   const [message, setMessage] = useState("");

//   const handleChange = (e) => {
//     const { id, value } = e.target;
//     setFormData((prev) => ({ ...prev, [id]: value }));
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     const { username, email, password } = formData;

//     if (!username || !email || !password) {
//       setMessage({ text: "All fields are required!", color: "red" });
//       return;
//     }

//     if (password.length < 6) {
//       setMessage({ text: "Password must be at least 6 characters!", color: "red" });
//       return;
//     }

//     setMessage({ text: "Signup successful!", color: "green" });

//     setTimeout(() => {
//       setFormData({ username: "", email: "", password: "" });
//       setMessage("");
//     }, 2000);
//   };

//   return (
//     <div className={styles.signupPage}>
//       <header>
//       </header>

//       <div className={styles.signupContainer}>
//         <h2>Sign Up</h2>
//         <form id="signupForm" onSubmit={handleSubmit}>
//           <div className={styles.signupInputBox}>
//             <input
//               type="text"
//               id="username"
//               value={formData.username}
//               onChange={handleChange}
//               required
//             />
//             <label>Username</label>
//           </div>
//           <div className={styles.signupInputBox}>
//             <input
//               type="email"
//               id="email"
//               value={formData.email}
//               onChange={handleChange}
//               required
//             />
//             <label>Email</label>
//           </div>
//           <div className={styles.signupInputBox}>
//             <input
//               type="password"
//               id="password"
//               value={formData.password}
//               onChange={handleChange}
//               required
//             />
//             <label>Password</label>
//           </div>
//           <button type="submit" className={styles.signupBtn}>
//             Sign Up
//           </button>

//           <div className={styles.signupOrSeparator}>
//             <hr className={styles.signupFlexGrow} />
//             <span className={styles.signupMx2}>or</span>
//             <hr className={styles.signupFlexGrow} />
//           </div>

//           <Link to="/signup">
//             <button type="button" className={styles.signupBtn}>
//               Login
//             </button>
//           </Link>
//         </form>

//         {message && (
//           <p className={styles.signupMessage} style={{ color: message.color }}>
//             {message.text}
//           </p>
//         )}
//       </div>
//     </div>
//   );
// }

// export default Signup;

import React, { useState } from "react";
import { Link } from "react-router-dom";

function Signup() {
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

  const handleSubmit = (e) => {
    e.preventDefault();
    const { username, email, password } = formData;

    if (!username || !email || !password) {
      setMessage({ text: "All fields are required!", color: "red" });
      return;
    }

    if (password.length < 6) {
      setMessage({ text: "Password must be at least 6 characters!", color: "red" });
      return;
    }

    setMessage({ text: "Signup successful!", color: "green" });

    setTimeout(() => {
      setFormData({ username: "", email: "", password: "" });
      setMessage("");
    }, 2000);
  };

  return (
    <div className="min-h-screen flex flex-col justify-center items-center bg-gradient-to-br from-[#06070d] to-[#0b06a0] font-[Poppins]">
      <div className="mt-32 w-[350px] bg-white rounded-lg shadow-lg p-8 flex flex-col items-center text-center">
        <h2 className="text-[#303f9f] text-2xl font-semibold mb-6">Sign Up</h2>
        <form id="signupForm" onSubmit={handleSubmit} className="w-full">
          {["username", "email", "password"].map((field, idx) => (
            <div className="relative mb-6 w-full" key={idx}>
              <input
                type={field === "password" ? "password" : field}
                id={field}
                value={formData[field]}
                onChange={handleChange}
                required
                className="peer w-full px-3 py-2 border border-gray-300 rounded-md text-sm outline-none focus:border-[#303f9f]"
              />
              <label
                htmlFor={field}
                className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-500 text-sm transition-all peer-focus:top-[-0.4rem] peer-focus:text-xs peer-focus:text-[#303f9f] peer-valid:top-[-0.4rem] peer-valid:text-xs peer-valid:text-[#303f9f] bg-white px-1"
              >
                {field.charAt(0).toUpperCase() + field.slice(1)}
              </label>
            </div>
          ))}

          <button
            type="submit"
            className="w-full bg-[#303f9f] hover:bg-[#283593] text-white py-2 px-4 rounded-md transition duration-300"
          >
            Sign Up
          </button>

          <div className="flex items-center my-4 text-gray-500 text-sm">
            <hr className="flex-grow border-t border-gray-300" />
            <span className="mx-2">or</span>
            <hr className="flex-grow border-t border-gray-300" />
          </div>

          <Link to="/signup">
            <button
              type="button"
              className="w-full bg-[#303f9f] hover:bg-[#283593] text-white py-2 px-4 rounded-md transition duration-300"
            >
              Login
            </button>
          </Link>
        </form>

        {message && (
          <p className={`mt-4 text-sm text-center ${message.color === "green" ? "text-green-600" : "text-red-600"}`}>
            {message.text}
          </p>
        )}
      </div>
    </div>
  );
}

export default Signup;
