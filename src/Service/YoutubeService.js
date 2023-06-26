import http from "./http";

const getAllData = async(params)=>{
    const res = await http.get("/youtube-request", {params: params});
    return res.data;
}

const createClaimRelease = async(data)=>{
    const res = await http.post("/youtube-request", data);
    return res.data;
}

const YoutubeService = {
    getAllData,
    createClaimRelease
};

export default YoutubeService;