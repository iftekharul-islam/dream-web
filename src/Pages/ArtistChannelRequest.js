import React, { useEffect, useState } from 'react';
import InputField from '../Component/InputField/InputField';
import SearchBar from '../Component/SearchBar/SearchBar';
import ArtistChannelRequestTable from '../Component/Table/ArtistChannelRequestTable';
import YoutubeService from '../Service/YoutubeService';

function ArtistchannelRequest() {
  const [uploadData, setUploadData] = useState({type: 3});
  
  const handleChange = (event) => {
    setUploadData({...uploadData, [event.target.name] : event.target.value});
  };

  const handleSubmit = async() => {
    const res = await YoutubeService.createClaimRelease(uploadData);
    if (res?.status == 201) {
      setUploadData({type: 3});
      getData();
    }
  }
  
  const [data, setData] = useState([]); 
  const [params, setParams] = useState({type: 3});

  const getData = async() => {
    const res = await YoutubeService.getAllData(params);
    setData(res?.data);
  }

  useEffect(() => {
    getData();
  }, [params]);

  const onSearch = (term) => {
    setParams({ ...params, q: term });
  };
  return (
    <div>
      <div className="section_title">
        <div className="text_area">
          <h2>Artist Channel Request</h2>
          <p>Promote and share your artistry</p>
        </div>
      </div>
      <div className='row'>
        <div className="col-lg-6 col-md-12">
        <InputField label="Channel Link" value={uploadData?.artist_channel_link} name="artist_channel_link" onChange={handleChange} />
        <InputField label="Topic Link" value={uploadData?.artist_topic_link} name="artist_topic_link" onChange={handleChange} />
        <InputField label="UPC1" value={uploadData?.artist_upc1} name="artist_upc1" onChange={handleChange} />
        <InputField label="UPC2" value={uploadData?.artist_upc2} name="artist_upc2" onChange={handleChange} />
        <InputField label="UPC3" value={uploadData?.artist_upc3} name="artist_upc3" onChange={handleChange} />
        <button className='btn mt-4' onClick={handleSubmit}>Submit</button>
        </div>
      </div>
      <div className="table_content">
        <div className="table_title">
          <p>Show 5 entries</p>
          <SearchBar onSearch={onSearch} placeHolder = "Search by UPC/EAN1"/>
        </div>
        <ArtistChannelRequestTable data={data}/>
      </div>
    </div>
  )
}

export default ArtistchannelRequest
