import http from "./http";

const getAllData = async(params)=>{
    const res = await http.get("/artist", {params: params});
    return res.data;
}

const createLabel = async(data)=>{
    const res = await http.post("/artist", data);
    return res.data;
}

const ArtistService = {
    getAllData,
    createLabel
};

export default ArtistService;