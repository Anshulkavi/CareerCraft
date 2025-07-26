import { useEffect, useState } from "react";
import { getResumes} from "@/api/resumeApi";
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

  return (
    <div className="p-4">
      <h2 className="text-xl font-semibold mb-4">My Resumes</h2>
      <ul className="space-y-2">
        {resumes.map((resume) => (
          <li
            key={resume.id}
            onClick={() => openResume(resume.id)}
            className="cursor-pointer bg-white rounded shadow p-3 hover:bg-gray-100 transition"
          >
            <div className="font-medium">{resume.title}</div>
            <div className="text-sm text-gray-500">
              Last updated: {new Date(resume.updated_at).toLocaleString()}
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}
