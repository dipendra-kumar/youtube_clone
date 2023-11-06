import { useEffect } from "react";
import InfiniteScroll from "react-infinite-scroll-component";
import { HomePageVideos } from "src/Types";
import Navbar from "src/components/Navbar";
import Sidebar from "src/components/Sidebar";
import Spinner from "src/components/Spinner";
import VideoCard from "src/components/VideoCard";
import { useAppDispatch, useAppSelector } from "src/store/hooks";
import { clearVideos } from "src/store/reducers";
import { getHomePageVideos } from "src/store/reducers/getHomePageVideos";

const HomePage = () => {
  const dispatch = useAppDispatch();
  const { videos, sideBar } = useAppSelector((state) => state.youtubeApp);

  useEffect(() => {
    return () => {
      dispatch(clearVideos());
    };
  }, [dispatch]);

  useEffect(() => {
    dispatch(getHomePageVideos(false));
  }, [dispatch]);

  return (
    <div className="max-h-screen overflow-hidden  dark:bg-[#0f0f0f] dark:text-white">
      <div style={{ height: "7.5vh" }}>
        <Navbar />
      </div>
      <div
        className={`${sideBar ? "flex" : "w-screen"}`}
        style={{ height: "92.5vh" }}
      >
        <Sidebar show={sideBar} />
        {videos.length ? (
          <InfiniteScroll
            dataLength={videos.length}
            next={() => dispatch(getHomePageVideos(true))}
            hasMore={videos.length < 500}
            loader={<Spinner />}
            height={800}
          >
            <div className="grid gap-y-14 gap-x-8 grid-cols-4 p-8">
              {videos.map((item: HomePageVideos) => {
                return <VideoCard data={item} key={item.videoId} />;
              })}
            </div>
          </InfiniteScroll>
        ) : (
          <Spinner />
        )}
      </div>
    </div>
  );
};

export default HomePage;
