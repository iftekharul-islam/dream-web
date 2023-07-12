import http from "./http";

const getAllData = async (params) => {
  const res = await http.get("/analytics", { params });
  return res.data;
};

const submitReq = async (data) => {
  const res = await http.post("/analytics", data);
  return res.data;
};

const AnalyticsService = {
  getAllData,
  submitReq
};

export default AnalyticsService;
