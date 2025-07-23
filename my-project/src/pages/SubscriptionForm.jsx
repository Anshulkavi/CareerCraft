// import React, { useState } from "react";

// const SupportMe = () => {
//   const [formData, setFormData] = useState({ name: "", message: "", txn_id: "" });

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     await fetch("/api/supporters/", {
//       method: "POST",
//       headers: { "Content-Type": "application/json" },
//       body: JSON.stringify(formData),
//     });
//     alert("Thanks for your support!");
//     setFormData({ name: "", message: "", txn_id: "" });
//   };

//   return (
//     <div className="p-4 bg-white rounded shadow max-w-md mx-auto">
//       <h2 className="text-xl font-bold mb-2">Support My Work 💖</h2>

//       <div className="space-y-2 mb-4">
//         <p>UPI ID: <strong>anshulkavishwar@ybl</strong></p>

//         <a
//           href="upi://pay?pa=anshul@upi&pn=Anshul%20Kavishwar&am=50&cu=INR"
//           className="bg-green-500 text-white px-4 py-2 rounded inline-block"
//         >
//           Pay ₹50
//         </a>
//         <a
//           href="upi://pay?pa=anshul@upi&pn=Anshul%20Kavishwar&am=100&cu=INR"
//           className="bg-blue-500 text-white px-4 py-2 rounded inline-block ml-2"
//         >
//           Pay ₹100
//         </a>
//       </div>

//       <form onSubmit={handleSubmit} className="space-y-3">
//         <input
//           className="w-full p-2 border rounded"
//           placeholder="Your name"
//           value={formData.name}
//           onChange={(e) => setFormData({ ...formData, name: e.target.value })}
//         />
//         <input
//           className="w-full p-2 border rounded"
//           placeholder="Transaction ID"
//           value={formData.txn_id}
//           onChange={(e) => setFormData({ ...formData, txn_id: e.target.value })}
//         />
//         <textarea
//           className="w-full p-2 border rounded"
//           placeholder="Your message"
//           value={formData.message}
//           onChange={(e) => setFormData({ ...formData, message: e.target.value })}
//         ></textarea>
//         <button className="bg-black text-white px-4 py-2 rounded" type="submit">
//           Submit
//         </button>
//       </form>
//     </div>
//   );
// };

// export default SupportMe;

// import React, { useEffect, useState } from "react";

// const SupportMe = () => {
//   const [isMobile, setIsMobile] = useState(false);
//   const [qrAmount, setQrAmount] = useState(null);

//   useEffect(() => {
//     const mobileCheck = /Android|iPhone|iPad|iPod/i.test(navigator.userAgent);
//     setIsMobile(mobileCheck);
//   }, []);

//   const upiId = "a******";
//   const name = "Anshul K";

//   const generateQR = (amount) => {
//     const upiLink = `upi://pay?pa=${upiId}&pn=${encodeURIComponent(name)}&am=${amount}&cu=INR`;
//     const qrAPI = `https://api.qrserver.com/v1/create-qr-code/?data=${encodeURIComponent(
//       upiLink
//     )}&size=200x200`;
//     return qrAPI;
//   };

//   const handleDesktopClick = (amount) => {
//     setQrAmount(amount);
//   };

//   const handleMobileClick = (amount) => {
//     const upiLink = `upi://pay?pa=${upiId}&pn=${encodeURIComponent(name)}&am=${amount}&cu=INR`;
//     window.location.href = upiLink;
//   };

//   return (
//     <div className="p-6 bg-white rounded shadow max-w-md mx-auto text-center">
//       <h2 className="text-xl font-bold mb-4">Support Me 💖</h2>

//       <div className="flex justify-center gap-4 mb-4">
//         {[50, 100, 200].map((amount) =>
//           isMobile ? (
//             <button
//               key={amount}
//               onClick={() => handleMobileClick(amount)}
//               className="bg-blue-500 text-white px-4 py-2 rounded"
//             >
//               Pay ₹{amount}
//             </button>
//           ) : (
//             <button
//               key={amount}
//               onClick={() => handleDesktopClick(amount)}
//               className="bg-green-600 text-white px-4 py-2 rounded"
//             >
//               ₹{amount}
//             </button>
//           )
//         )}
//       </div>

//       {!isMobile && qrAmount && (
//         <div className="mt-4">
//           <p className="text-sm text-gray-700 mb-2">
//             Scan QR to pay ₹{qrAmount} to <strong>{upiId}</strong>
//           </p>
//           <img
//             src={generateQR(qrAmount)}
//             alt={`Pay ₹${qrAmount} via UPI`}
//             className="w-48 h-48 mx-auto"
//           />
//         </div>
//       )}
//     </div>
//   );
// };

// export default SupportMe;

import React, { useEffect, useState } from "react";
import axios from "axios";

const SubcriptionForm = () => {
  const [isMobile, setIsMobile] = useState(false);
  const [qrAmount, setQrAmount] = useState(null);
  const [amount, setAmount] = useState(null);
  const [upiRef, setUpiRef] = useState("");
  const [screenshot, setScreenshot] = useState(null);
  const [message, setMessage] = useState("");

  const upiId = "anshulkavishwar@ybl"; // <-- Replace with your UPI ID
  const name = "Anshul K";

  useEffect(() => {
    const mobileCheck = /Android|iPhone|iPad|iPod/i.test(navigator.userAgent);
    setIsMobile(mobileCheck);
  }, []);

  const generateQR = (amt) => {
    const upiLink = `upi://pay?pa=${upiId}&pn=${encodeURIComponent(name)}&am=${amt}&cu=INR`;
    return `https://api.qrserver.com/v1/create-qr-code/?data=${encodeURIComponent(
      upiLink
    )}&size=200x200`;
  };

  const handleClick = (amt) => {
    setAmount(amt);
    if (isMobile) {
      const upiLink = `upi://pay?pa=${upiId}&pn=${encodeURIComponent(name)}&am=${amt}&cu=INR`;
      window.location.href = upiLink;
    } else {
      setQrAmount(amt);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!screenshot) {
      setMessage("⚠️ Please upload screenshot.");
      return;
    }

    const formData = new FormData();
    formData.append("amount", amount);
    formData.append("upiRef", upiRef);
    formData.append("screenshot", screenshot);

    try {
      await axios.post("/api/subscribe/", formData); // update with your backend endpoint
      setMessage("✅ Submitted successfully!");
      setUpiRef("");
      setScreenshot(null);
    } catch (err) {
      console.error(err);
      setMessage("❌ Something went wrong!");
    }
  };

  return (
    <div className="p-6 bg-white rounded shadow max-w-md mx-auto text-center">
      <h2 className="text-xl font-bold mb-4">Subscription</h2>

      <div className="flex justify-center gap-4 mb-4">
        {[50, 100, 200].map((amt) => (
          <button
            key={amt}
            onClick={() => handleClick(amt)}
            className="px-4 py-2 rounded text-white bg-indigo-600 hover:bg-indigo-700"
          >
            ₹{amt}
          </button>
        ))}
      </div>

      {!isMobile && qrAmount && (
        <div className="mt-4">
          <p className="text-sm text-gray-700 mb-2">
            Scan QR to pay ₹{qrAmount} to <strong>{upiId}</strong>
          </p>
          <img
            src={generateQR(qrAmount)}
            alt={`Pay ₹${qrAmount} via UPI`}
            className="w-48 h-48 mx-auto"
          />
        </div>
      )}

      {amount && (
        <form
          onSubmit={handleSubmit}
          className="mt-6 text-left space-y-4 border-t pt-4"
          encType="multipart/form-data"
        >
          <h3 className="text-lg font-semibold text-center">Submit Payment Proof</h3>

          <div>
            <label className="block text-sm font-medium mb-1">UPI Reference ID:</label>
            <input
              type="text"
              value={upiRef}
              onChange={(e) => setUpiRef(e.target.value)}
              required
              className="w-full px-3 py-2 border rounded"
              placeholder="Enter UPI Ref ID"
            />
          </div>

          {/* <div>
            <label className="block text-sm font-medium mb-1">Upload Screenshot:</label>
            <input
              type="file"
              accept="image/*"
              onChange={(e) => setScreenshot(e.target.files[0])}
              required
              className="w-full"
            />
          </div> */}
          <div>
  <label className="block text-sm font-medium mb-1">Upload Screenshot:</label>
  <div className="relative border-2 border-dashed rounded px-4 py-6 text-center cursor-pointer hover:bg-gray-50">
    <input
      type="file"
      accept="image/*"
      onChange={(e) => setScreenshot(e.target.files[0])}
      required
      className="absolute inset-0 w-full h-full opacity-0 cursor-pointer"
    />
    <p className="text-gray-600">
      {screenshot ? (
        <span className="font-medium text-black">
          {screenshot.name}
        </span>
      ) : (
        <>
          Click to upload or drag & drop <br />
          <span className="text-xs text-gray-400">(image only)</span>
        </>
      )}
    </p>
  </div>
</div>


          <button
            type="submit"
            className="w-full bg-black text-white px-4 py-2 rounded"
          >
            Submit
          </button>

          {message && <p className="text-sm text-center mt-2">{message}</p>}
        </form>
      )}
    </div>
  );
};

export default SubcriptionForm;
