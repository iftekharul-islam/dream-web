import http from "./http";

const getAllData = async () => {
  const res = await http.get("/dashboard");
  return res.data;
};

const DashboardService = {
  getAllData,
};

export default DashboardService;
