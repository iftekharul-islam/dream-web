import moment from "moment";
import React from "react";

const CatalogsInfo = ({ data, options }) => {
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
                      <span className="text-danger px-1">required</span>
                    </span>
                  )}
                </span>
              </div>
              <div className="input_value">
                <p className="input_name">Version/Subtitle</p>{" "}
                <span>: {data?.subtitle ?? ""}</span>
              </div>
              {data?.artist ? (
                data?.artist?.map((item, index) => (
                  <div className="input_value">
                    <p className="input_name">
                      {index ? "Secondary Artist" : "Primary Artist"}
                    </p>{" "}
                    <span>
                      :
                      {
                        options?.artist?.find((itm) => itm?.value == item.value)
                          ?.label
                      }
                    </span>
                  </div>
                ))
              ) : (
                <div className="input_value">
                  <p className="input_name">PrimaryArtist</p> :{" "}
                  <span className="px-1">
                    <span className="text-danger px-1">required</span>
                  </span>
                </div>
              )}
              {data?.featuring ? (
                data?.featuring?.map((item, index) => (
                  <div className="input_value">
                    <p className="input_name">
                      {index ? "Secondary Featuring" : "Primary Featuring"}
                    </p>{" "}
                    <span>: {item?.name}</span>
                  </div>
                ))
              ) : (
                <div className="input_value">
                  <p className="input_name">Primary Featuring</p>{" "}
                  <span>: </span>
                </div>
              )}

              {data?.remixer ? (
                data?.remixer?.map((item, index) => (
                  <div className="input_value">
                    <p className="input_name">
                      {index ? "Secondary Remixer" : "Primary Remixer"}
                    </p>{" "}
                    <span>: {item?.name}</span>
                  </div>
                ))
              ) : (
                <div className="input_value">
                  <p className="input_name">Primary Remixer</p> <span>: </span>
                </div>
              )}
              <div className="input_value">
                <p className="input_name">Song Writer</p>{" "}
                <span>
                  :{" "}
                  {data?.writter?.length > 0 ? (
                    data?.writter?.split(" ")?.length >= 2 ? (
                      data?.writter
                        .split(" ")
                        .every((word) => word?.length >= 3) ? (
                        data?.writter
                      ) : (
                        <span className="px-1">
                          <span className="text-danger px-1">Invalid Name</span>
                        </span>
                      )
                    ) : (
                      <span className="px-1">
                        <span className="text-danger px-1">Invalid Lastname</span>
                      </span>
                    )
                  ) : (
                    <span className="px-1">
                      <span className="text-danger px-1">required</span>
                    </span>
                  )}
                </span>
              </div>
              {data?.composer ? (
                data?.composer?.map((item, index) => (
                  <div className="input_value">
                    <p className="input_name">
                      {index ? "Secondary Composer" : "Primary Composer"}
                    </p>{" "}
                    <span>
                  :{" "}
                  {item?.name?.length > 0 ? (
                    item?.name?.split(" ")?.length >= 2 ? (
                      item?.name
                        .split(" ")
                        .every((word) => word?.length >= 3) ? (
                          item?.name
                      ) : (
                        <span className="px-1">
                          <span className="text-danger px-1">Invalid Name</span>
                        </span>
                      )
                    ) : (
                      <span className="px-1">
                        <span className="text-danger px-1">Invalid Lastname</span>
                      </span>
                    )
                  ) : (
                    <span className="px-1">
                      <span className="text-danger px-1">required</span>
                    </span>
                  )}
                </span>
                  </div>
                ))
              ) : (
                <div className="input_value">
                  <p className="input_name">Primary Composer</p>{" "}
                  <span>
                    :{" "}
                    <span className="px-1">
                      <span className="text-danger px-1">required</span>
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
                  {data?.main_release_date ? (
                    moment(data?.main_release_date).format("DD MMM YYYY")
                  ) : (
                    <span className="px-1">
                      <span className="text-danger px-1">required</span>
                    </span>
                  )}
                </span>
              </div>
              {data?.arranger ? (
                data?.arranger?.map((item, index) => (
                  <div className="input_value">
                    <p className="input_name">
                      {index ? "Secondary Arranger" : "Primary Arranger"}
                    </p>{" "}
                    <span>: {item?.name}</span>
                  </div>
                ))
              ) : (
                <div className="input_value">
                  <p className="input_name">Primary Arranger</p> <span>: </span>
                </div>
              )}
              {data?.producer ? (
                data?.producer?.map((item, index) => (
                  <div className="input_value">
                    <p className="input_name">
                      {index ? "Secondary Producer" : "Primary Producer"}
                    </p>{" "}
                    <span>: {item?.name}</span>
                  </div>
                ))
              ) : (
                <div className="input_value">
                  <p className="input_name">Primary Producer</p> <span>: </span>
                </div>
              )}
              <div className="input_value">
                <p className="input_name">Original Release Date</p>{" "}
                <span>
                  :{" "}
                  {data?.original_release_date ? (
                    moment(data?.original_release_date).format("DD MMM YYYY")
                  ) : (
                    <span className="px-1">
                      <span className="text-danger px-1">required</span>
                    </span>
                  )}
                </span>
              </div>
              <div className="input_value">
                <p className="input_name">Lyrics Language</p>{" "}
                <span>
                  :{" "}
                  {options?.language?.find(
                    (itm) => itm?.value == data?.language_id
                  )?.label ?? (
                    <span className="px-1">
                      <span className="text-danger px-1">required</span>
                    </span>
                  )}{" "}
                </span>
              </div>
              <div className="input_value">
                <p className="input_name">Genre</p>{" "}
                <span>
                  :{" "}
                  {options?.genre?.find((itm) => itm?.value == data?.genre_id)
                    ?.label ?? (
                    <span className="px-1">
                      <span className="text-danger px-1">required</span>
                    </span>
                  )}
                </span>
              </div>
              <div className="input_value">
                <p className="input_name">Subgenre</p>{" "}
                <span>
                  :{" "}
                  {options?.genre
                    ?.find((itm) => itm?.value == data?.genre_id)
                    ?.subgenres?.find((itm) => itm?.value == data?.subgenre_id)
                    ?.label ?? (
                    <span className="px-1">
                      <span className="text-danger px-1">required</span>
                    </span>
                  )}
                </span>
              </div>
            </div>
            <div className="col-lg-4 col-md-12 item">
              <div className="input_value">
                <p className="input_name">Label Name</p>{" "}
                <span>
                  :{" "}
                  {options?.label?.find((itm) => itm?.value == data?.label_id)
                    ?.label ?? (
                    <span className="px-1">
                      <span className="text-danger px-1">required</span>
                    </span>
                  )}
                </span>
              </div>
              <div className="input_value">
                <p className="input_name">Format</p>{" "}
                <span>
                  :{" "}
                  {options?.format?.find((itm) => itm?.value == data?.format_id)
                    ?.label ?? (
                    <span className="px-1">
                      <span className="text-danger px-1">required</span>
                    </span>
                  )}
                </span>
              </div>
              <div className="input_value">
                <p className="input_name">℗ line</p>{" "}
                <span>
                  :{" "}
                  {data?.p_line ?? (
                    <span className="px-1">
                      <span className="text-danger px-1">required</span>
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
                      <span className="text-danger px-1">required</span>
                    </span>
                  )}
                </span>
              </div>
              <div className="input_value">
                <p className="input_name">UPC/EAN</p>{" "}
                <span>: {data?.upc ?? ""}</span>
              </div>
              <div className="input_value">
                <p className="input_name">ISRC</p>{" "}
                <span>: {data?.isrc ?? ""}</span>
              </div>
              <div className="input_value">
                <p className="input_name">Parental Advisory</p>
                <span>
                  :{" "}
                  {options?.advisory?.find(
                    (itm) => itm?.value == data?.parental_advisory_id
                  )?.label ?? ""}
                </span>
              </div>
              <div className="input_value">
                <p className="input_name">Producer Catalogue Number</p>
                <span>: {data?.producer_catalogue_number ?? ""}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CatalogsInfo;
