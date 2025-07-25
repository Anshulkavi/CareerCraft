import API from "../utils/axios";

export const saveResume = async (resumeData, token) => {
  try {
    const response = await API.post(
      `${import.meta.env.VITE_API_BASE_URL}/save-resume/`,
      { data: resumeData }, // ✅ wrapped correctly
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );
    return response.data;
  } catch (error) {
    throw error.response?.data || error.message;
  }
};
