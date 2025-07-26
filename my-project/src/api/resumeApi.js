import API from "../utils/axios";

export const saveResume = async (resumeData,title, token) => {
  try {
    const response = await API.post(
      `${import.meta.env.VITE_API_BASE_URL}/save-resume/`,
      {
        title,
        data: resumeData,
      },
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

export const getResumes = async (token) => {
  try {
    const response = await API.get(
      `${import.meta.env.VITE_API_BASE_URL}/get-resume/`,
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

export const getSingleResume = (id, token) => {
  return API.get(`/get-resume/${id}/`, {
    headers: { Authorization: `Bearer ${token}` },
  });
};

export const deleteResume = async (id, token) => {
  try {
    const response = await API.delete(
      `${import.meta.env.VITE_API_BASE_URL}/delete-resume/${id}/`,
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
