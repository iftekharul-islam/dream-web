import http from "./http";

const login = async (email, password) => {
  const res = await http.post("/login", { email, password });
  if (res?.data?.token) {
    localStorage.setItem("user", JSON.stringify(res?.data));
    localStorage.setItem("accessToken", JSON.stringify(res?.data?.token));
  }
  return res.data;
};

const logout = () => {
  localStorage.removeItem("user");
  localStorage.removeItem("accessToken");
};

const updateProfile = async (data) => {
  const res = await http.post("/update-profile", data);
  if (res) {
    localStorage.setItem("user", JSON.stringify(res?.data));
  }
};

const uploadImage = async (data) => {
  const res = await http.post("/update-image", data);
  if (res) {
    localStorage.setItem("user", JSON.stringify(res?.data));
  }
};

const getNotification = async () => {
  const res = await http.get("/notification");
  return res?.data;
};

const AuthService = {
  login,
  logout,
  updateProfile,
  uploadImage,
  getNotification
};

export default AuthService;
