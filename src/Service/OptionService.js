import http from "./http";

const getArtist = async()=>{
  const res = await http.get("/option/artist");
  return res.data;
}

const getGenre = async()=>{
  const res = await http.get("/option/genre");
  return res.data;
}

const getLanguage = async()=>{
  const res = await http.get("/option/language");
  return res.data;
}

const getLabel = async()=>{
  const res = await http.get("/option/label");
  return res.data;
}

const getFormat = async()=>{
  const res = await http.get("/option/format");
  return res.data;
}

const getAdvisory = async()=>{
  const res = await http.get("/option/parental-advisory");
  return res.data;
}

const OptionService = {
  getArtist,
  getGenre,
  getLanguage,
  getLabel,
  getFormat,
  getAdvisory
};

export default OptionService;