import { useEffect, useState } from "react";
import { getResumes, deleteResume } from "@/api/resumeApi";
import { useNavigate } from "react-router-dom";

export default function SavedResumes() {
  const [resumes, setResumes] = useState([]);
  const [loading, setLoading] = useState(true);
  const token = localStorage.getItem("access");
  const navigate = useNavigate();

  useEffect(() => {
    async function fetchResumes() {
      try {
        const data = await getResumes(); // no token needed if API uses axios interceptors
        setResumes(data);
      } catch (err) {
        console.error("Failed to fetch resumes:", err);
      } finally {
        setLoading(false);
      }
    }

    fetchResumes();
  }, []);

  const openResume = (resumeId) => {
    navigate(`/resume/${resumeId}`);
  };

  if (loading) return <div>Loading resumes...</div>;

  // Inside the component:
  const handleDelete = async (resumeId) => {
    const confirmDelete = window.confirm(
      "Are you sure you want to delete this resume?"
    );
    if (!confirmDelete) return;

    try {
      await deleteResume(resumeId, token);
      setResumes((prev) => prev.filter((resume) => resume.id !== resumeId));
    } catch (err) {
      console.error("Failed to delete resume ❌", err);
      alert("Failed to delete resume.");
    }
  };

  return (
    <div className="p-4">
      <h2 className="text-xl font-semibold mb-4">My Resumes</h2>
      <ul className="space-y-2">
        {resumes.map((resume) => (
          <li
            key={resume.id}
            className="flex justify-between items-center bg-white rounded shadow p-3 hover:bg-gray-100 transition"
          >
            <div
              onClick={() => openResume(resume.id)}
              className="cursor-pointer"
            >
              <div className="font-medium">{resume.title}</div>
              <div className="text-sm text-gray-500">
                Last updated: {new Date(resume.updated_at).toLocaleString()}
              </div>
            </div>
            <button
              onClick={() => handleDelete(resume.id)}
              className="ml-4 text-red-500 hover:text-red-700"
            >
              Delete
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}
