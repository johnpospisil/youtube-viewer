import "./VideoItem.css";
import React from "react";

const VideoItem = ({ video, onVideoSelect }) => {
  return (
    <div onClick={() => onVideoSelect(video)} className="video-item">
      <div className="card mb-3">
        <div className="row no-gutters">
          <div className="col-md-4">
            <img
              src={video.snippet.thumbnails.medium.url}
              alt={video.snippet.title}
              className="video-img card-img"
            />
          </div>
          <div className="col-md-8">
            <div className="card-body">
              <h5 className="card-title">{video.snippet.title}</h5>
              {/* <p className="card-text">{video.snippet.description}</p> */}
              <p className="card-text">
                <small className="text-muted">
                  Published: {video.snippet.publishedAt}
                </small>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default VideoItem;
