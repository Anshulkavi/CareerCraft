// src/pages/ResetPassword.jsx
import React, { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

function ResetPassword() {
  const navigate = useNavigate();
  const { uidb64, token } = useParams();

  const [newPassword, setNewPassword] = useState("");
  const [message, setMessage] = useState({ text: "", color: "" });

  const handleReset = async (e) => {
    e.preventDefault();

    if (!newPassword || newPassword.length < 6) {
      setMessage({ text: "Password must be at least 6 characters.", color: "red" });
      return;
    }

    try {
      const response = await fetch(
        `${import.meta.env.VITE_API_BASE_URL}/userauth/confirm-password-reset/`,
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ uidb64, token, new_password: newPassword }),
        }
      );

      const data = await response.json();

      if (response.ok) {
        setMessage({ text: "Password reset successful! Redirecting to login...", color: "green" });
        setTimeout(() => navigate("/login"), 2500);
      } else {
        setMessage({ text: data.error || "Invalid or expired token.", color: "red" });
      }
    } catch {
      setMessage({ text: "Something went wrong.", color: "red" });
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 font-[Poppins]">
      <div className="w-[350px] bg-white rounded-lg shadow-lg p-8 text-center">
        <h2 className="text-xl font-semibold text-gray-800 mb-4">Reset Your Password</h2>
        <form onSubmit={handleReset}>
          <input
            type="password"
            placeholder="New Password"
            value={newPassword}
            onChange={(e) => setNewPassword(e.target.value)}
            className="w-full px-3 py-2 border border-gray-300 rounded-md mb-4 outline-none focus:border-[#303f9f]"
          />
          <button
            type="submit"
            className="w-full bg-[#303f9f] hover:bg-[#283593] text-white py-2 px-4 rounded-md"
          >
            Reset Password
          </button>
        </form>
        {message.text && (
          <p className={`mt-4 text-sm ${message.color === "green" ? "text-green-600" : "text-red-600"}`}>
            {message.text}
          </p>
        )}
      </div>
    </div>
  );
}

export default ResetPassword;
