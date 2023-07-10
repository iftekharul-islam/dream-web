import React from "react";
import UploadIcon from "../../Component/assets/icons/Upload.svg";

const AudioUploadForm = ({ data, onChange }) => {
  const fileSizes = (bytes, decimals = 2) => {
    if (bytes === 0) return "0 Bytes";
    const k = 1024;
    const dm = decimals < 0 ? 0 : decimals;
    const sizes = ["Bytes", "KB", "MB", "GB", "TB", "PB", "EB", "ZB", "YB"];
    const i = Math.floor(Math.log(bytes) / Math.log(k));
    return parseFloat((bytes / Math.pow(k, i)).toFixed(dm)) + " " + sizes[i];
  };

  const handleInputChange = (e) => {
    const file = e.target.files[0];
    onChange({ file: file });
  };

  return (
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
                        onChange={handleInputChange}
                        accept="audio/*"
                      />
                      <div className="img_Up_info">
                        <img src={UploadIcon} alt="" className="mb-2" />
                        <span>
                          Drag and drop or
                          <span className="file-link">
                            Choose your audio file
                          </span>
                        </span>
                        <span>- Format: .wav</span>
                      </div>
                    </div>
                  </div>
                  <div className="kb-attach-box mb-3">
                    {data?.file && data?.file.name.match(/.(mp3|wav)$/i) ? (
                      <div className="audio-preview">
                        <audio controls>
                          <source
                            src={URL.createObjectURL(data?.file)}
                            type="audio/mpeg"
                          />
                          Your browser does not support the audio element.
                        </audio>
                      </div>
                    ) : null}
                    {data?.file && (
                      <div className="file-detail">
                        <h6>{data?.file.name}</h6>
                        <p>
                          <span>Size: {fileSizes(data?.file.size)}</span>
                          <span className="ml-2">
                            Modified Time:{" "}
                            {data?.file.lastModifiedDate.toLocaleString(
                              "en-IN"
                            )}
                          </span>
                        </p>
                        {/* <div className="file-actions">
                          <button
                            type="button"
                            className="file-action-btn"
                            onClick={deleteSelectedFile}
                          >
                            Delete
                          </button>
                        </div> */}
                      </div>
                    )}
                  </div>
                  {/* <div className="kb-buttons-box">
                    <button type="submit" className="btn" disabled={file}>
                      Upload
                    </button>
                  </div> */}
                </div>
                {/* {file && (
                  <div className="kb-attach-box">
                    <hr />
                    {file.filename.match(/.(mp3|wav)$/i) ? (
                      <div className="audio-preview">
                        <audio controls>
                          <source src={file.fileAudio} type="audio/mpeg" />
                          Your browser does not support the audio element.
                        </audio>
                      </div>
                    ) : (
                      <div className="file-image">
                        <i className="far fa-file-audio"></i>
                      </div>
                    )}
                    <div className="file-detail">
                      <h6>{file.filename}</h6>
                      <p>
                        <span>Size: {file.filesize}</span>
                        <span className="ml-3">Modified Time: {file.datetime}</span>
                      </p>
                      <div className="file-actions">
                        <button className="file-action-btn" onClick={deleteFile}>
                          Delete
                        </button>
                        <a href={file.fileAudio} className="file-action-btn" download={file.filename}>
                          Download
                        </a>
                      </div>
                    </div>
                  </div>
                )} */}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AudioUploadForm;
