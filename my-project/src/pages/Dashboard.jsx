// // Dashboard.jsx
// import { useEffect, useState } from "react";
// import axios from "axios";

// const Dashboard = () => {
//   const [profile, setProfile] = useState(null);

//   useEffect(() => {
//     const fetchProfile = async () => {
//       const access = localStorage.getItem("access");
//       const res = await axios.get("http://127.0.0.1:8000/api/userauth/profile/", {
//         headers: { Authorization: `Bearer ${access}` },
//       });
//       setProfile(res.data);
//     };
//     fetchProfile();
//   }, []);

//   return (
//     <div className="p-4">
//       <h2 className="text-xl font-bold mb-4">Welcome to your Dashboard</h2>
//       {profile ? (
//         <div>
//           <p>
//             <strong>Username:</strong> {profile.username || "N/A"}
//           </p>
//           <p>
//             <strong>Email:</strong> {profile.email || "N/A"}
//           </p>
//         </div>
//       ) : (
//         <p>Loading profile...</p>
//       )}
//     </div>
//   );
// };

// export default Dashboard;

// import React, { useEffect, useState } from "react";
// import { useNavigate } from "react-router-dom";
// import axios from "axios";

// export default function Dashboard() {
// //   const navigate = useNavigate();
//     const [profile, setProfile] = useState(null);

//   useEffect(() => {
//     const fetchProfile = async () => {
//       const access = localStorage.getItem("access");
//       const res = await axios.get("http://127.0.0.1:8000/api/userauth/profile/", {
//         headers: { Authorization: `Bearer ${access}` },
//       });
//       setProfile(res.data);
//     };
//     fetchProfile();
//   }, []);

//   return (
//     <div className="min-h-screen bg-white">
//       {/* Top Navigation */}
//       {/* <header className="flex justify-between items-center px-8 py-4 border-b">
//         <div className="flex items-center space-x-8">
//           <img src="/logo.svg" alt="Logo" className="h-6" />
//           <nav className="space-x-6 text-sm text-gray-700">
//             <a href="#">Documents</a>
//             <a href="#">Job Applications</a>
//             <a href="#">Resume Examples</a>
//             <a href="#">Help</a>
//           </nav>
//         </div>
//         <div className="flex items-center space-x-4">
//           <button className="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600">Upgrade</button>
//           <div className="w-9 h-9 bg-gray-300 rounded-full flex items-center justify-center">AA</div>
//         </div>
//       </header> */}

//       {/* Profile Section */}
//       <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 px-10 py-10">
//         {/* Left: Profile Info */}
//         <div>
//           <h2 className="text-xl font-semibold mb-6">Your Information</h2>
//           <div className="space-y-4">
//             <div>
//               <p className="text-sm text-gray-500">Email</p>
//               <p className="text-md font-medium">{user.email}</p>
//             </div>
//             <div>
//               <p className="text-sm text-gray-500">Your full name</p>
//               <input
//                 type="text"
//                 value={user.fullName}
//                 readOnly
//                 className="border rounded px-4 py-2 w-full"
//               />
//             </div>
//             <label className="flex items-center mt-4 space-x-2 text-sm">
//               <input type="checkbox" className="accent-green-600" />
//               <span>Get inspiring resume examples and advice</span>
//             </label>
//           </div>
//         </div>

//         {/* Right: Subscription Info */}
//         <div>
//           <h2 className="text-xl font-semibold mb-6">Subscription</h2>
//           <div className="bg-red-50 border border-red-300 rounded p-4 mb-6">
//             <h3 className="font-medium text-red-600">Expired Free Trial</h3>
//             <p className="text-sm text-gray-600">
//               Your plan has expired and you can’t edit your resume.
//               <br />
//               <span className="text-red-500 font-medium">Expired on Nov 24th, 2024</span>
//             </p>
//             <a href="#" className="text-sm text-blue-600 underline mt-2 inline-block">Start Subscription</a>
//           </div>

//           <div className="border rounded p-4">
//             <p className="text-sm mb-2">Save more with Pro</p>
//             <ul className="text-sm text-gray-700 list-disc pl-5 space-y-1 mb-4">
//               <li>Add Pro Sections</li>
//               <li>Compact template</li>
//               <li>Unlimited entries</li>
//               <li>300 resumes and cover letters</li>
//               <li>Remove branding</li>
//             </ul>
//             <button className="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600">Upgrade</button>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }

import React, { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

export default function Dashboard() {
  const [profile, setProfile] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const access = localStorage.getItem("access");
    if (!access) {
      navigate("/login");
      return;
    }

    const fetchProfile = async () => {
      try {
        const res = await axios.get(
          "http://127.0.0.1:8000/api/userauth/profile/",
          {
            headers: { Authorization: `Bearer ${access}` },
          }
        );
        setProfile(res.data);
      } catch (err) {
        console.error("Failed to fetch profile:", err);
        navigate("/login");
      }
    };

    fetchProfile();
  }, [navigate]);

  if (!profile) {
    return (
      <div className="flex justify-center items-center h-screen bg-gray-100">
        <p className="text-gray-600 text-xl">Loading profile...</p>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-white">
      {/* Profile Section */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 px-10 py-10">
        {/* Left: Profile Info */}
        <div>
          <h2 className="text-xl font-semibold mb-6">Your Information</h2>
          <div className="space-y-4">
            <div>
              {" "}
              <p className="text-sm text-gray-500">Email</p>
              <p className="text-md font-medium">{profile.email}</p>
            </div>
            <div>
              <p className="text-sm text-gray-500">Username</p>
              <p className="text-md font-medium">{profile.username}</p>
            </div>
            <label className="flex items-center mt-4 space-x-2 text-sm">
              <input type="checkbox" className="accent-green-600" />
              <span>Get inspiring resume examples and advice</span>
            </label>
          </div>
        </div>

        {/* Right: Subscription Info */}
        <div>
          <h2 className="text-xl font-semibold mb-6">Subscription</h2>
          <div className="bg-red-50 border border-red-300 rounded p-4 mb-6">
            <h3 className="font-medium text-red-600">Expired Free Trial</h3>
            <p className="text-sm text-gray-600">
              Your plan has expired and you can’t edit your resume.
              <br />
              <span className="text-red-500 font-medium">
                Expired on Nov 24th, 2024
              </span>
            </p>
            <a
              href="#"
              className="text-sm text-blue-600 underline mt-2 inline-block"
            >
              Start Subscription
            </a>
          </div>

          <div className="border rounded p-4">
            <p className="text-sm mb-2">Save more with Pro</p>
            <ul className="text-sm text-gray-700 list-disc pl-5 space-y-1 mb-4">
              <li>Add Pro Sections</li>
              <li>Compact template</li>
              <li>Unlimited entries</li>
              <li>300 resumes and cover letters</li>
              <li>Remove branding</li>
            </ul>
            <button className="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600">
              Upgrade
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
