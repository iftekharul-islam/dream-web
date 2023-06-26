import http from "./http";

const getAllData = async(params)=>{
    const res = await http.get("/support-center", {params: params});
    return res.data;
}
const createTicket = async(data)=>{
    const res = await http.post("/ticket", data);
    return res.data;
}

const SupportService = {
    getAllData,
    createTicket,
};

export default SupportService;