import React from 'react';

const VideoListItem = ({video, onVideoSelect}) => {
  const { thumbnails, title } = video.snippet;
  const { url: imageUrl } = thumbnails.default;
  return (
    <li className="list-group-item" onClick={() => onVideoSelect(video)} >
      <div className="video-list media">
        <div className="media-left">
          <img className="media-object" src={imageUrl} />
        </div>
        <div className="media-body">
          <div className="media-heading">
            {title}
          </div>
        </div>
      </div>
    </li>
  );
}

export default VideoListItem;