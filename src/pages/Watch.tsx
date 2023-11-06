import React, { useEffect, useState } from "react";
import { BiLike, BiDislike } from "react-icons/bi";
import { HiScissors } from "react-icons/hi";
import { MdOutlinePlaylistAdd } from "react-icons/md";
import { FaShare } from "react-icons/fa";
import { BsThreeDots } from "react-icons/bs";
import { useNavigate, useParams } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "src/store/hooks";
import { getRecommendedVideos } from "src/store/reducers/getRecommendedVideos";
import { getVideoDetails } from "src/store/reducers/getVideoDetails";
import Navbar from "src/components/Navbar";
import { WatchCard } from "src/components/WatchCard";

const Watch = () => {
  const [showMoreStatus, setShowMoreStatus] = useState<boolean>(false);
  const { id } = useParams();
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const { currentPlaying, recomendedVideos } = useAppSelector(
    (state) => state.youtubeApp
  );

  useEffect(() => {
    if (id) {
      dispatch(getVideoDetails(id));
      setShowMoreStatus(false);
    } else {
      navigate("/");
    }
  }, [id, navigate, dispatch]);

  useEffect(() => {
    if (currentPlaying && id) {
      dispatch(getRecommendedVideos(id));
    }
  }, [currentPlaying, dispatch, id]);

  return (
    <>
      {currentPlaying && currentPlaying?.videoId === id && (
        <div className="max-h-screen overflow-hidden dark:bg-[#0f0f0f] dark:text-white">
          <div style={{ height: "7.5vh" }}>
            <Navbar />
          </div>
          <div className="flex w-full" style={{ height: "92.5vh" }}>
            <div className="flex gap-y-10 gap-x-20 p-7 mx-10 mr-0 w-full overflow-auto">
              <div style={{ maxWidth: "1000px" }}>
                <div>
                  <iframe
                    width="1050"
                    height="550"
                    src={`https://www.youtube.com/embed/${id}?autoplay=1`}
                    title="YouTube video player"
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                  ></iframe>
                  <div className="mt-5">
                    <p className="text-xl">{currentPlaying.videoTitle}</p>
                    <div className="flex justify-between mt-4">
                      <div className="text-sm text-gray-400">
                        <span className="after:content-['•'] after:mx-1">
                          {currentPlaying.videoViews} views
                        </span>
                        <span> {currentPlaying.videoAge} ago</span>
                      </div>
                      <div className="flex items-center gap-4 uppercase ">
                        <div className="flex items-center gap-1 cursor-pointer bg-[#cccccc] dark:bg-[#272727] hover:bg-[#e5e5e5] hover:dark:bg-[#3e3f40] px-3 py-2 rounded-full">
                          <BiLike className="text-xl" />
                          <strong>{currentPlaying.videoLikes}</strong>
                        </div>
                        <div className="flex items-center gap-1 cursor-pointer bg-[#cccccc] dark:bg-[#272727] hover:bg-[#e5e5e5] hover:dark:bg-[#3e3f40] px-3 py-2 rounded-full">
                          <BiDislike className="text-xl" />
                          <strong>dislike</strong>
                        </div>
                        <div className="flex items-center gap-1 cursor-pointer bg-[#cccccc] dark:bg-[#272727] hover:bg-[#e5e5e5] hover:dark:bg-[#3e3f40] px-3 py-2 rounded-full">
                          <FaShare className="text-xl" />
                          <strong>share</strong>
                        </div>
                        <div className="flex items-center gap-1 cursor-pointer bg-[#cccccc] dark:bg-[#272727] hover:bg-[#e5e5e5] hover:dark:bg-[#3e3f40] px-3 py-2 rounded-full">
                          <HiScissors className="text-xl" />
                          <strong>clip</strong>
                        </div>
                        <div className="flex items-center gap-1 cursor-pointer bg-[#cccccc] dark:bg-[#272727] hover:bg-[#e5e5e5] hover:dark:bg-[#3e3f40] px-3 py-2 rounded-full">
                          <MdOutlinePlaylistAdd className="text-xl" />
                          <strong>save</strong>
                        </div>
                        <div className="flex items-center gap-1 cursor-pointer bg-[#cccccc] dark:bg-[#272727] hover:bg-[#e5e5e5] hover:dark:bg-[#3e3f40] px-3 py-2 rounded-full">
                          <BsThreeDots className="text-xl" />
                        </div>
                      </div>
                    </div>
                    <div className="flex gap-4 flex-col dark:bg-[#272727] my-5 p-3  rounded-xl">
                      <div className=" flex items-center gap-5 mr-5 mt-4">
                        <div>
                          <img
                            src={currentPlaying.channelInfo.image}
                            alt=""
                            className="rounded-full h-12 w-12"
                          />
                        </div>
                        <div className="w-5/6">
                          <h5 className="text-sm">
                            <strong>{currentPlaying.channelInfo.name}</strong>
                          </h5>
                          <h6 className="text-gray-400 text-xs">
                            {currentPlaying.channelInfo.subscribers} subscribers
                          </h6>
                        </div>
                        <div>
                          <button className="uppercase bg-black text-white  dark:bg-white dark:text-black font-bold  rounded-full px-5 py-3 text-sm tracking-wider">
                            subscribe
                          </button>
                        </div>
                      </div>
                      <div
                        className={`${
                          !showMoreStatus ? "max-h-16 overflow-hidden" : ""
                        } text-sm w-11/12`}
                      >
                        <pre
                          style={{
                            fontFamily: `"Roboto", sans-serif`,
                          }}
                          className="whitespace-pre-wrap"
                        >
                          {currentPlaying.videoDescription}
                        </pre>
                      </div>
                      <div>
                        <button
                          className="uppercase text-sm cursor-pointer"
                          onClick={() => setShowMoreStatus(!showMoreStatus)}
                        >
                          Show {showMoreStatus ? "less" : "more"}
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="flex flex-col gap-3">
                {recomendedVideos.length &&
                  recomendedVideos.map((item) => {
                    return <WatchCard data={item} key={item.videoId} />;
                  })}
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Watch;
