import React from "react";

const VideoDetail = ({ video }) => {
  if (!video) {
    return <div>Loading...</div>;
  }
  return (
    <div className="container">
      <h4>{video.snippet.title}</h4>
      <p>{video.snippet.description}</p>
    </div>
  );
};

export default VideoDetail;
