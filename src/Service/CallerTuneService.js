import http from "./http";

const getAllData = async (params) => {
  const res = await http.get("/caller-tune", { params: params });
  return res.data;
};

const getCRBT = async (params) => {
  const res = await http.get("/option/crbt", { params: params });
  return res.data;
};

const applyCallerTune = async (data) => {
  const res = await http.post("/caller-tune", data);
  return res.data;
};

const CallerTuneService = {
  getAllData,
  getCRBT,
  applyCallerTune,
};

export default CallerTuneService;
