import React from 'react';
import VideoListItem from './video_list_item';

const VideoList = ({ videos, onVideoSelect }) => {
  console.log(onVideoSelect)
  const videoItems = videos.map(video => {
    return (
      <VideoListItem 
        onVideoSelect={onVideoSelect}
        video={video} 
        key={video.etag} />
    );
  })

  return (
    <ul className="col-md-4 list-group" >
       {videoItems}
    </ul>
  );
}

export default VideoList;