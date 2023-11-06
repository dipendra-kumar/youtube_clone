import React, { useEffect } from "react";
import InfiniteScroll from "react-infinite-scroll-component";
import { useNavigate } from "react-router-dom";
import { HomePageVideos } from "src/Types";
import Navbar from "src/components/Navbar";
import SearchCard from "src/components/SearchCard";
import Sidebar from "src/components/Sidebar";
import Spinner from "src/components/Spinner";
import { useAppDispatch, useAppSelector } from "src/store/hooks";
import { clearVideos } from "src/store/reducers";
import { getSearchPageVideos } from "src/store/reducers/getSearchPageVideos";

const Search: React.FC = () => {
  const dispatch = useAppDispatch();
  const videos = useAppSelector((state) => state.youtubeApp.videos);
  const navigate = useNavigate();
  const { searchTerm, sideBar } = useAppSelector((state) => state.youtubeApp);

  useEffect(() => {
    dispatch(clearVideos());
    if (searchTerm == "") navigate("/");
    else {
      dispatch(getSearchPageVideos(false));
    }
  }, [dispatch, navigate, searchTerm]);

  return (
    <div className="max-h-screen overflow-hidden  dark:bg-[#0f0f0f] dark:text-white">
      <div style={{ height: "7.5vh" }}>
        <Navbar />
      </div>
      <div className="flex" style={{ height: "92.5vh" }}>
        <Sidebar show={sideBar} />
        {videos.length ? (
          <div className="py-8 pl-8 flex flex-col gap-5 w-full">
            <InfiniteScroll
              dataLength={videos.length}
              next={() => dispatch(getSearchPageVideos(true))}
              hasMore={videos.length < 500}
              loader={<Spinner />}
              height={800}
            >
              <div>
                {videos.map((item: HomePageVideos) => {
                  return <SearchCard data={item} key={item.videoId} />;
                })}
              </div>
            </InfiniteScroll>
          </div>
        ) : (
          <Spinner />
        )}
      </div>
    </div>
  );
};

export default Search;
