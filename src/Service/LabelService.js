import http from "./http";

const getAllData = async(params)=>{
    const res = await http.get("/label", {params: params});
    return res.data;
}

const createLabel = async(data)=>{
    const res = await http.post("/label", data);
    return res.data;
}

const LabelService = {
    getAllData,
    createLabel
};

export default LabelService;