import React from "react";
import shortid from "shortid";
import UploadIcon from "../../Component/assets/icons/Upload.svg";

const ImageUploadForm = ({ data, onChange }) => {
  const filesizes = (bytes, decimals = 2) => {
    if (bytes === 0) return "0 Bytes";
    const k = 1024;
    const dm = decimals < 0 ? 0 : decimals;
    const sizes = ["Bytes", "KB", "MB", "GB", "TB", "PB", "EB", "ZB", "YB"];
    const i = Math.floor(Math.log(bytes) / Math.log(k));
    return parseFloat((bytes / Math.pow(k, i)).toFixed(dm)) + " " + sizes[i];
  };

  const handleFileUpload = (e) => {
    if (e.target.files[0]) {
      const reader = new FileReader();
      reader.onloadend = () => {
        const img = new Image();
        img.src = reader?.result;
        img.onload = () => {
          if (img?.width == 3000 && img?.height == 3000) {
            onChange({ image: e.target.files[0] });
            onChange({ selectedImage: reader.result });
            onChange({
              ImageInfo: {
                id: shortid.generate(),
                filename: e.target.files[0].name,
                fileimage: reader.result,
                datetime:
                  e.target.files[0].lastModifiedDate.toLocaleString("en-IN"),
                filesize: filesizes(e.target.files[0].size),
              },
            });
          } else {
            alert("Please upload an image with dimensions 3000x3000 pixels");
          }
        };
      };
      reader.readAsDataURL(e.target.files[0]);
    }
  };

  return (
    <div>
      <div className="fileupload-view">
        <div className="row justify-content-center p-0">
          <div className="col-12">
            <div className="card">
              <div className="card-body">
                <div className="kb-data-box">
                  <div>
                    <div className="kb-file-upload">
                      <div className="file-upload-box">
                        <input
                          type="file"
                          id="fileupload"
                          className="file-upload-input"
                          accept="image/*"
                          onChange={handleFileUpload}
                        />
                        <div className="img_Up_info">
                          <img src={UploadIcon} alt="" className="mb-2" />
                          <span>
                            Drag and drop or
                            <span className="file-link">Choose your file</span>
                          </span>
                          <span>- Size: 3000*3000px</span>
                          <span>- Format: .jpeg</span>
                        </div>
                      </div>
                    </div>
                    {data?.selectedImage && (
                      <div className="kb-attach-box mb-3">
                        <div className="file-atc-box">
                          <div className="file-image">
                            <img src={data?.selectedImage} alt="" />
                          </div>
                          <div className="file-detail">
                            <h6>{data?.ImageInfo.filename}</h6>
                            <p>
                              <span>Size: {data?.ImageInfo.filesize}</span>
                              <span className="ml-2">
                                Modified Time: {data?.ImageInfo.datetime}
                              </span>
                            </p>
                            {/* <div className="file-actions">
                              <button
                                type="button"
                                className="file-action-btn"
                                onClick={deleteFile}
                              >
                                Delete
                              </button>
                            </div> */}
                          </div>
                        </div>
                      </div>
                    )}
                    {/* <div className="kb-buttons-box">
                      <button type="submit" className="btn" disabled={files?.length}>
                        Upload
                      </button>
                    </div> */}
                  </div>
                  {/* {files.length > 0 && (
                    <div className="kb-attach-box">
                      <hr />
                      {files.map((data) => {
                        const { id, filename, fileimage, datetime, filesize } = data;
                        return (
                          <div className="file-atc-box" key={id}>
                            <div className="file-image">
                              <img src={fileimage} alt="" />
                            </div>
                            <div className="file-detail">
                              <h6>{filename}</h6>
                              <p>
                                <span>Size: {filesize}</span>
                                <span className="ml-3">
                                  Modified Time: {datetime}
                                </span>
                              </p>
                              <div className="file-actions">
                                <button
                                  className="file-action-btn"
                                  onClick={() => handleDeleteFile(id)}
                                >
                                  Delete
                                </button>
                                <a
                                  href={fileimage}
                                  className="file-action-btn"
                                  download={filename}
                                >
                                  Download
                                </a>
                              </div>
                            </div>
                          </div>
                        );
                      })}
                    </div>
                  )} */}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ImageUploadForm;
