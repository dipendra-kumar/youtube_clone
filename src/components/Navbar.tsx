import { useEffect, useState } from "react";
import { AiOutlineSearch, AiOutlineClose } from "react-icons/ai";
import { GiHamburgerMenu } from "react-icons/gi";
import { BsYoutube } from "react-icons/bs";
import { TiMicrophone } from "react-icons/ti";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "src/store/hooks";
import {
  changeSearchTerm,
  clearSearchTerm,
  clearVideos,
  toggleSideBar,
  toggleTheme,
} from "src/store/reducers";
import Switch from "./Switch";
import { getSearchPageVideos } from "src/store/reducers/getSearchPageVideos";

const Navbar: React.FC = () => {
  const location = useLocation();
  const navigate = useNavigate();

  const dispatch = useAppDispatch();
  const { searchTerm, darkMode } = useAppSelector((state) => state.youtubeApp);

  const handleSearch = async () => {
    if (location.pathname !== "/search") navigate("/search");
    dispatch(clearVideos());
    dispatch(getSearchPageVideos(false));
  };
  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add("dark");
      localStorage.setItem("darkMode", "true");
    } else {
      document.documentElement.classList.remove("dark");
      localStorage.removeItem("darkMode");
    }
  }, [darkMode]);

  return (
    <div
      className={`w-full flex justify-between items-center px-9 h-14 opacity-95 sticky top-0 z-50 dark:bg-black  dark:text-white`}
    >
      <div className="flex gap-8 items-center text-2xl">
        <div
          className="cursor-pointer"
          // onClick={handleThemeSwitch}
          onClick={() => {
            dispatch(toggleSideBar());
          }}
        >
          <GiHamburgerMenu />
        </div>
        <Link to="/">
          <div className="flex gap-3 items-center justify-center">
            <BsYoutube className="text-3xl text-red-600" />
            <span className="text-xl font-bold tracking-tighter">YouTube</span>
          </div>
        </Link>
      </div>
      <div className="w-[40%] flex items-center justify-center gap-5">
        <form
          className="w-[100%]"
          onSubmit={(e) => {
            e.preventDefault();
            handleSearch();
          }}
        >
          <div className="flex w-[100%] gap-5 items-center border border-[#2b2b2b] rounded-full overflow-hidden pl-5">
            <div className="flex w-[100%] items-center h-10 px-4 pr-0">
              <div className="relative w-[100%] flex">
                <input
                  type="text"
                  placeholder="Search"
                  className="w-[97%] dark:bg-transparent focus:outline-none border-none pr-6"
                  value={searchTerm}
                  onChange={(e) => dispatch(changeSearchTerm(e.target.value))}
                />
                {searchTerm && (
                  <AiOutlineClose
                    className="absolute right-2 top-1/2 transform -translate-y-1/2 w-[45px] h-[45px] p-2 text-2xl cursor-pointer hover:dark:bg-[#3d3d3d] hover:bg-slate-200 rounded-full  "
                    onClick={() => dispatch(clearSearchTerm())}
                  />
                )}
              </div>
              <button className="w-16  flex items-center justify-center bg-gray-300 dark:bg-[#ffffff14] p-3 hover:bg-slate-200">
                <AiOutlineSearch className="text-xl" />
              </button>
            </div>
          </div>
        </form>
        <div className="text-xl p-3 rounded-full  bg-gray-300  dark:bg-[#272727] hover:dark:bg-[#3d3d3d] cursor-pointer hover:bg-slate-200 ">
          <TiMicrophone />
        </div>
      </div>
      <div className="flex gap-5 items-center text-xl">
        <Switch
          method={() => {
            dispatch(toggleTheme());
          }}
          state={darkMode}
        />
        <img
          src="https://yt3.ggpht.com/yti/ADpuP3NVw4Cl0Zgz3nFIbWSLTU_-VZ2Ipq_PksIPJ8ek5_s=s88-c-k-c0x00ffffff-no-rj"
          alt="profile-logo"
          className="w-9 h-9 rounded-full"
        />
      </div>
    </div>
  );
};

export default Navbar;
