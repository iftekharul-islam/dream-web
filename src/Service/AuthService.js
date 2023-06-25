import http from "./http";

const login = async(email,password) => {
  console.log("🚀 ~ file: AuthService.js:4 ~ login ~ email:", email)
    const res = await http.post("/login", {email,password});
    if (res?.data?.token){
      localStorage.setItem("user",JSON.stringify(res?.data));
      localStorage.setItem("accessToken",JSON.stringify(res?.data?.token));
    }
    return res.data;
}

const logout = () => {
  localStorage.removeItem("user");
  localStorage.removeItem("accessToken");
};

const AuthService = {
  login,
  logout,
};

export default AuthService;