import React from "react";

const VideoCard = ({ info }) => {
  //   console.log(info);
  //   const { snippet, statistics } = info;
  //   const { channelTitle, title, thumbnails } = snippet;
  return (
    <div className="p-2 m-2 w-60 h-60 shadow-lg">
      <img
        className="rounded-lg "
        alt="video"
        src={info.snippet.thumbnails.medium.url}
      />
      <ul>
        <li className="font-bold py-1 line-clamp-2">{info.snippet.title}</li>
        <li>{info.snippet.channelTitle}</li>
        <li>{info.statistics.viewCount} Views</li>
      </ul>
    </div>
  );
};

export const AdVideoCard = ({ info }) => {
  return (
    <div className="p-1 m-1 border border-red-400">
      <VideoCard info={info} />
    </div>
  );
};

export default VideoCard;
