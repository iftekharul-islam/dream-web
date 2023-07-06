import http from "./http";

const getAllData = async(params)=>{
    const res = await http.get("/audio", {params: params});
    return res.data;
}

const addAudio = async(data) => {
  const res = await http.post("/audio", data);
    return res.data;
};

const AudioService = {
    getAllData,
    addAudio,
};

export default AudioService;