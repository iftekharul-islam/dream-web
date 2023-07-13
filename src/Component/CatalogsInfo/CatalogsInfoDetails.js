import moment from "moment";
import React from "react";

const CatalogsInfoDetails = ({ data }) => {
  return (
    <div className="submission_page-info">
      <div className="row s_info">
        <h2 className="mb-4">Release Information</h2>
        <div className="col-lg-12">
          <div className="row items m-0">
            <div className="col-lg-4 col-md-12 item">
              <div className="input_value">
                <p className="input_name">Release Title</p>
                <span>
                  :
                  {data?.title ? (
                    <span className="px-1">{data?.title}</span>
                  ) : (
                    <span className="px-1">
                      N/A 
                    </span>
                  )}
                </span>
              </div>
              <div className="input_value">
                <p className="input_name">Version/Subtitle</p>{" "}
                <span>: {data?.subtitle ?? "N/A"}</span>
              </div>
              {data?.artists ? (
                data?.artists?.map((item, index) => (
                  <div className="input_value">
                    <p className="input_name">
                      {index ? "Secondary Artist" : "Primary Artist"}
                    </p>{" "}
                    <span>
                      : {item?.artist?.title}
                    </span>
                  </div>
                ))
              ) : (
                <div className="input_value">
                  <p className="input_name">Primary Artist</p>{" "}:{" "}
                  <span className="px-1">
                    N/A 
                  </span>
                </div>
              )}              
              {data?.featurings ? (
                data?.featurings?.map((item, index) => (
                  <div className="input_value">
                    <p className="input_name">
                      {index ? "Secondary Featuring" : "Primary Featuring"}
                    </p>{" "}
                    <span>: {item?.featuring}</span>
                  </div>
                ))
              ) : (
                <div className="input_value">
                  <p className="input_name">Primary Featuring</p>{" "}
                  <span>: N/A</span>
                </div>
              )}

              {data?.remixers ? (
                data?.remixers?.map((item, index) => (
                  <div className="input_value">
                    <p className="input_name">
                      {index ? "Secondary Remixer" : "Primary Remixer"}
                    </p>{" "}
                    <span>: {item?.remixer}</span>
                  </div>
                ))
              ) : (
                <div className="input_value">
                  <p className="input_name">Primary Remixer</p>{" "}
                  <span>: N/A</span>
                </div>
              )}
              <div className="input_value">
                <p className="input_name">Song Writer</p>{" "}
                <span>
                  :{" "}
                  {data?.writter ?? (
                    <span className="px-1">
                      N/A 
                    </span>
                  )}
                </span>
              </div>
              {data?.composers ? (
                data?.composers?.map((item, index) => (
                  <div className="input_value">
                    <p className="input_name">
                      {index ? "Secondary Composer" : "Primary Composer"}
                    </p>{" "}
                    <span>: {item?.composer}</span>
                  </div>
                ))
              ) : (
                <div className="input_value">
                  <p className="input_name">Primary Composer</p>{" "}
                  <span>
                    :{" "}
                    <span className="px-1">
                      N/A 
                    </span>
                  </span>
                </div>
              )}
            </div>
            <div className="col-lg-4 col-md-12 item">
              <div className="input_value">
                <p className="input_name">Main Release Date</p>{" "}
                <span>
                  :{" "}
                  {data?.main_release_date ? moment(data?.main_release_date).format("DD MMM YYYY") : (
                    <span className="px-1">
                      N/A 
                    </span>
                  )}
                </span>
              </div>
              {data?.arrangers ? (
                data?.arrangers?.map((item, index) => (
                  <div className="input_value">
                    <p className="input_name">
                      {index ? "Secondary Arranger" : "Primary Arranger"}
                    </p>{" "}
                    <span>: {item?.arranger}</span>
                  </div>
                ))
              ) : (
                <div className="input_value">
                  <p className="input_name">Primary Arranger</p>{" "}
                  <span>: N/A</span>
                </div>
              )}
              {data?.producers ? (
                data?.producers?.map((item, index) => (
                  <div className="input_value">
                    <p className="input_name">
                      {index ? "Secondary Producer" : "Primary Producer"}
                    </p>{" "}
                    <span>: {item?.producer}</span>
                  </div>
                ))
              ) : (
                <div className="input_value">
                  <p className="input_name">Primary Producer</p>{" "}
                  <span>: N/A</span>
                </div>
              )}
              <div className="input_value">
                <p className="input_name">Original Release Date</p>{" "}
                <span>
                  :{" "}
                  {data?.original_release_date ? moment(data?.original_release_date).format("DD MMM YYYY") : (
                    <span className="px-1">
                      N/A 
                    </span>
                  )}
                </span>
              </div>
              <div className="input_value">
                <p className="input_name">Lyrics Language</p>{" "}
                <span>
                  :{" "}
                  {data?.language ? data?.language?.name : "N/A"}
                </span>
              </div>
              <div className="input_value">
                <p className="input_name">Genre</p>{" "}
                <span>
                  :{" "}
                  {data?.genre ? data?.genre?.name : "N/A"}
                </span>
              </div>
              <div className="input_value">
                <p className="input_name">Subgenre</p>{" "}
                <span>
                  :{" "}
                  {data?.subgenre ? data?.subgenre?.name : "N/A"}
                </span>
              </div>
            </div>
            <div className="col-lg-4 col-md-12 item">
              <div className="input_value">
                <p className="input_name">Label Name</p>{" "}
                <span>
                  :{" "}
                  {data?.label ? data?.label?.title : "N/A"}
                </span>
              </div>
              <div className="input_value">
                <p className="input_name">Format</p>{" "}
                <span>
                  :{" "}
                  {data?.format ? data?.format?.name : "N/A"}
                </span>
              </div>
              <div className="input_value">
                <p className="input_name">℗ line</p>{" "}
                <span>
                  :{" "}
                  {data?.p_line ?? (
                    <span className="px-1">
                      N/A 
                    </span>
                  )}
                </span>
              </div>
              <div className="input_value">
                <p className="input_name">© line</p>{" "}
                <span>
                  :{" "}
                  {data?.c_line ?? (
                    <span className="px-1">
                      N/A 
                    </span>
                  )}
                </span>
              </div>
              <div className="input_value">
                <p className="input_name">UPC/EAN</p>{" "}
                <span>: {data?.upc ?? "N/A"}</span>
              </div>
              <div className="input_value">
                <p className="input_name">ISRC</p>{" "}
                <span>: {data?.isrc ?? "N/A"}</span>
              </div>
              <div className="input_value">
                <p className="input_name">Parental Advisory</p>
                <span>
                  :{" "}
                  {data?.parental_advisory ? data?.parental_advisory?.name : "N/A"}
                </span>
              </div>
              <div className="input_value">
                <p className="input_name">Producer Catalogue Number</p>
                <span>: {data?.producer_catalogue_number ?? "N/A"}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CatalogsInfoDetails;
