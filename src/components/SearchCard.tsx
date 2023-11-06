import React from "react";
import { Link } from "react-router-dom";
import { HomePageVideos } from "src/Types";

interface SearchCard {
  data: HomePageVideos;
}

const SearchCard: React.FC<SearchCard> = ({ data }) => {
  return (
    <div className="flex gap-3 my-5">
      <div className="relative">
        <Link to={`/watch/${data.videoId}`}>
          <img
            src={data.videoThumbnail}
            className="h-48 w-96 rounded-2xl"
            alt="thumbnail"
          />
          <span className="absolute bottom-3 right-3 text-sm text-white bg-gray-900 px-2 py-0.5 z-10 rounded-md">
            {data.videoDuration}
          </span>
        </Link>
      </div>
      <div className="flex flex-col gap-1">
        <h3 className="max-w-2xl">
          <a href="#" className="line-clamp-2">
            {data.videoTitle}
          </a>
        </h3>
        <div>
          <div>
            <span className="after:contents-['●'] after:mx-1">
              {data.videoViews} views
            </span>
            <span>{data.videoAge} ago</span>
          </div>
        </div>
        <div className="min-w-fit my-2">
          <a href="#" className="flex items-center gap-2 text-sm text-gray-400">
            <img
              src={data.channelInfo.image}
              alt="channel-image"
              className="h-9 w-9 rounded-full"
            />
            <span>{data.channelInfo.name}</span>
          </a>
        </div>
        <div className="max-w-2xl line-clamp-2 text-sm text-gray-400">
          <p>{data.videoDescription}</p>
        </div>
      </div>
    </div>
  );
};

export default SearchCard;
