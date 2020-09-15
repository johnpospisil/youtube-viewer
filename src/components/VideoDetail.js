import React from "react";

const VideoDetail = ({ video }) => {
  if (!video) {
    return <div>Loading...</div>;
  }

  const videoSrc = `https://www.youtube.com/embed/${video.id.videoId}`;

  return (
    <div>
      <div className="embed-responsive embed-responsive-16by9">
        <iframe
          className="embed-responsive-item"
          title={video.snippet.title}
          src={videoSrc}
          allowFullScreen
        ></iframe>
      </div>
      <h4>{video.snippet.title}</h4>
      <p>{video.snippet.description}</p>
      <p className="card-text">
        <small className="text-muted">
          Published: {video.snippet.publishedAt}
        </small>
      </p>
    </div>
  );
};

export default VideoDetail;
