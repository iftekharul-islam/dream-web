import http from "./http";

const getAllData = async () => {
  const res = await http.get("/bank-account");
  return res.data;
};

const addBankDetails = async (data) => {
  const res = await http.post("/bank-account", data);
  return res.data;
};

const activateCard = async (id) => {
  const res = await http.get(`/active-bank-account/${id}`);
  return res.data;
};

const withdrawBalance = async (balance) => {
  const res = await http.post(`/withdraw-balance`, { amount: balance });
  return res.data;
};

const getOverViewData = async (params) => {
  const res = await http.get(`/overview`, {params});
  return res.data;
};

const AccountService = {
  getAllData,
  addBankDetails,
  activateCard,
  withdrawBalance,
  getOverViewData,
};

export default AccountService;
