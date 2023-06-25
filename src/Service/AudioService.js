import http from "./http";

const getAllData = async(params)=>{
    const res = await http.get("/audio", {params: params});
    return res.data;
}

const logout = () => {
};

const AudioService = {
    getAllData,
  logout,
};

export default AudioService;