// // src/pages/ForgotPassword.jsx
// import React, { useState } from "react";
// import { useNavigate } from "react-router-dom"; // ✅ Import this!

// function ForgotPassword() {
//   const [email, setEmail] = useState("");
//   const [message, setMessage] = useState({ text: "", color: "" });
//   const navigate = useNavigate(); // ✅ Initialize navigate

//   const handleSubmit = async (e) => {
//     e.preventDefault();

//     try {
//       const response = await fetch(
//         `${import.meta.env.VITE_API_BASE_URL}/userauth/request-password-reset/`,
//         {
//           method: "POST",
//           headers: { "Content-Type": "application/json" },
//           body: JSON.stringify({ email }),
//         }
//       );

//       const data = await response.json();

//       if (response.ok) {
//         setMessage({
//           text: data.message || "Reset link sent!",
//           color: "green",
//         });
//         // Wait a moment then navigate
//         setTimeout(() => {
//           navigate("/login");
//         }, 2000); // 2 second delay (optional for user to see success message)
//       } else {
//         setMessage({
//           text: data.error || "Something went wrong.",
//           color: "red",
//         });
//       }
//     } catch {
//       setMessage({ text: "Server error.", color: "red" });
//     }
//   };

//   return (
//     <div className="min-h-screen flex items-center justify-center bg-gray-100 font-[Poppins]">
//       <div className="w-[350px] bg-white rounded-lg shadow-lg p-8 text-center">
//         <h2 className="text-xl font-semibold text-gray-800 mb-4">
//           Forgot Password
//         </h2>
//         <form onSubmit={handleSubmit}>
//           <input
//             type="email"
//             placeholder="Enter your email"
//             value={email}
//             onChange={(e) => setEmail(e.target.value)}
//             className="w-full px-3 py-2 border border-gray-300 rounded-md mb-4 outline-none focus:border-[#303f9f]"
//             required
//           />
//           <button
//             type="submit"
//             className="w-full bg-[#303f9f] hover:bg-[#283593] text-white py-2 px-4 rounded-md"
//           >
//             Send Reset Link
//           </button>
//         </form>
//         {message.text && (
//           <p
//             className={`mt-4 text-sm ${
//               message.color === "green" ? "text-green-600" : "text-red-600"
//             }`}
//           >
//             {message.text}
//           </p>
//         )}
//       </div>
//     </div>
//   );
// }

// export default ForgotPassword;

// src/pages/ForgotPassword.jsx
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

function ForgotPassword() {
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState({ text: "", color: "" });
  const [resetSent, setResetSent] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch(
        `${import.meta.env.VITE_API_BASE_URL}/userauth/request-password-reset/`,
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ email }),
        }
      );

      const data = await response.json();

      if (response.ok) {
        setMessage({
          text:
            data.message ||
            "Reset link sent! Please check your email and spam folder.",
          color: "green",
        });
        setResetSent(true); // disable form & show manual login button
      } else {
        setMessage({
          text: data.error || "Something went wrong.",
          color: "red",
        });
      }
    } catch {
      setMessage({ text: "Server error.", color: "red" });
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 font-[Poppins]">
      <div className="w-[350px] bg-white rounded-lg shadow-lg p-8 text-center">
        <h2 className="text-xl font-semibold text-gray-800 mb-4">
          Forgot Password
        </h2>

        {!resetSent ? (
          <form onSubmit={handleSubmit}>
            <input
              type="email"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full px-3 py-2 border border-gray-300 rounded-md mb-4 outline-none focus:border-[#303f9f]"
              required
            />
            <button
              type="submit"
              className="w-full bg-[#303f9f] hover:bg-[#283593] text-white py-2 px-4 rounded-md"
            >
              Send Reset Link
            </button>
          </form>
        ) : (
          <button
            onClick={() => navigate("/login")}
            className="mt-4 w-full bg-[#303f9f] hover:bg-[#283593] text-white py-2 px-4 rounded-md"
          >
            Back to Login
          </button>
        )}

        {message.text && (
          <p
            className={`mt-4 text-sm ${
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

export default ForgotPassword;
