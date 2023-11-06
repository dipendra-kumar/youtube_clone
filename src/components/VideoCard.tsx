import React from "react";
import { Link } from "react-router-dom";
import { HomePageVideos } from "src/Types";

interface VideoCard {
  data: HomePageVideos;
}

const VideoCard: React.FC<VideoCard> = ({ data }) => {
  return (
    <div className="w-80 h-60 flex gap-3 flex-col mt-10">
      <Link to={`/watch/${data.videoId}`}>
        <div className="relative">
          <img
            src={data.videoThumbnail}
            className="h-48 w-96 rounded-2xl"
            alt="thumbnail"
          />
          <span className="absolute bottom-3 right-3 text-sm text-white bg-gray-900 px-2 py-0.5 z-10 rounded-md">
            {data.videoDuration}
          </span>
        </div>
        <div className="flex gap-2 mt-4">
          <div className="min-w-fit">
            <a href="#">
              <img
                src={data.channelInfo.image}
                alt="channel"
                className="h-9 w-9 rounded-full"
              />
            </a>
          </div>
          <div>
            <h3>
              <a href="#" className="font-bold line-clamp-2">
                {data.videoTitle}
              </a>
            </h3>
            <div className="text-sm text-gray-400">
              <div>
                <a href="#">{data.channelInfo.name}</a>
              </div>
            </div>
            <div className="flex items-center gap-1 text-gray-400">
              <span className="after:contents-['●'] after:mx-1">
                {data.videoViews} views
              </span>
              <span>{data.videoAge} ago</span>
            </div>
          </div>
        </div>
      </Link>
    </div>
  );
};

export default VideoCard;
