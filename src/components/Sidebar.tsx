import React from "react";
import {
  MdHomeFilled,
  MdOutlineSlowMotionVideo,
  MdSubscriptions,
  MdOutlineVideoLibrary,
  MdHistory,
  MdOutlineSmartDisplay,
  MdOutlineWatchLater,
  MdThumbUpOffAlt,
  MdSettings,
  MdOutlinedFlag,
  MdOutlineHelpOutline,
  MdOutlineFeedback,
  MdOutlineSportsVolleyball,
} from "react-icons/md";
import { TbMusic, TbDeviceGamepad2 } from "react-icons/tb";
import { FaRegCompass } from "react-icons/fa";
import { GiFilmStrip } from "react-icons/gi";

interface SidebarProps {
  show: boolean;
}

export default function Sidebar(props: SidebarProps) {
  const mainLinks = [
    {
      icon: <MdHomeFilled className="text-xl" />,
      name: "Home",
    },
    {
      icon: <FaRegCompass className="text-xl" />,
      name: "Explore",
    },
    {
      icon: <MdOutlineSlowMotionVideo className="text-xl" />,
      name: "Shorts",
    },
    {
      icon: <MdSubscriptions className="text-xl" />,
      name: "Subscriptions",
    },
  ];

  const secondaryLinks = [
    {
      icon: <MdOutlineVideoLibrary className="text-xl" />,
      name: "Library",
    },
    {
      icon: <MdHistory className="text-xl" />,
      name: "History",
    },
    {
      icon: <MdOutlineSmartDisplay className="text-xl" />,
      name: "Your Videos",
    },
    {
      icon: <MdOutlineWatchLater className="text-xl" />,
      name: "Watch Later",
    },
    {
      icon: <MdThumbUpOffAlt className="text-xl" />,
      name: "Liked Videos",
    },
  ];

  const subscriptionLinks = [
    {
      icon: <TbMusic className="text-xl" />,
      name: "Music",
    },
    {
      icon: <MdOutlineSportsVolleyball className="text-xl" />,
      name: "Sport",
    },
    {
      icon: <TbDeviceGamepad2 className="text-xl" />,
      name: "Gaming",
    },
    {
      icon: <GiFilmStrip className="text-xl" />,
      name: "Films",
    },
  ];

  const helpLinks = [
    {
      icon: <MdSettings className="text-xl" />,
      name: "Settings",
    },
    {
      icon: <MdOutlinedFlag className="text-xl" />,
      name: "Report history",
    },
    {
      icon: <MdOutlineHelpOutline className="text-xl" />,
      name: "Help",
    },
    {
      icon: <MdOutlineFeedback className="text-xl" />,
      name: "Send feedback",
    },
  ];

  const textLinks = [
    [
      "About",
      "Press",
      "Copyright",
      "Contact us",
      "Creator",
      "Advertise",
      "Developers",
    ],
    [
      "Terms",
      "Privacy",
      "Policy & Safety",
      "How YouTube works",
      "Test new features",
    ],
  ];

  return (
    <div
      className={`${
        props.show ? "" : "hidden"
      } w-2/12  transition-all dark:text-white dark:bg-[#0f0f0f] pr-5 pl-3 pb-8 overflow-hidden hover:overflow-y-visible sidebar`}
    >
      <ul className=" flex flex-col py-5 border-b border-[#e5e5e5] dark:border-[#3f3f3f]">
        {mainLinks.map(({ icon, name }) => {
          return (
            <li
              key={name}
              className={` pl-6 py-3 hover:bg-[#f2f2f2]  dark:hover:bg-[#272727]  rounded-lg hover:cursor-pointer ${
                name === "Home" ? "bg-[#e6e6e6] dark:bg-[#3d3d3d]" : ""
              }`}
            >
              <a href="#" className="flex items-center gap-5">
                {icon}
                <span className="text-sm tracking-wider">{name}</span>
              </a>
            </li>
          );
        })}
      </ul>
      <ul className="flex flex-col py-5 border-b border-[#e5e5e5] dark:border-[#3f3f3f]">
        {secondaryLinks.map(({ icon, name }) => {
          return (
            <li
              key={name}
              className={`pl-6 py-3 hover:bg-[#f2f2f2] dark:hover:bg-[#272727]  rounded-lg hover:cursor-pointer`}
            >
              <a href="#" className="flex items-center gap-5">
                {icon}
                <span className="text-sm tracking-wider">{name}</span>
              </a>
            </li>
          );
        })}
      </ul>
      <ul className="flex flex-col py-5 border-b border-[#e5e5e5] dark:border-[#3f3f3f]">
        {subscriptionLinks.map(({ icon, name }) => {
          return (
            <li
              key={name}
              className={`pl-6 py-3 hover:bg-[#f2f2f2] dark:hover:bg-[#272727]  rounded-lg hover:cursor-pointer`}
            >
              <a href="#" className="flex items-center gap-5">
                {icon}
                <span className="text-sm tracking-wider">{name}</span>
              </a>
            </li>
          );
        })}
      </ul>
      <ul className="flex flex-col py-5 border-b border-[#e5e5e5] dark:border-[#3f3f3f]">
        {helpLinks.map(({ icon, name }) => {
          return (
            <li
              key={name}
              className={`pl-6 py-3 hover:bg-[#f2f2f2] dark:hover:bg-[#272727]  rounded-lg hover:cursor-pointer`}
            >
              <a href="#" className="flex items-center gap-5">
                {icon}
                <span className="text-sm tracking-wider">{name}</span>
              </a>
            </li>
          );
        })}
      </ul>
      <ul className="flex gap-2 flex-wrap text-sm p-4 text-zinc-400">
        {textLinks[0].map((name) => {
          return <li key={name}>{name}</li>;
        })}
      </ul>
      <ul className="flex gap-2 flex-wrap text-sm p-4 text-zinc-400">
        {textLinks[1].map((name) => {
          return <li key={name}>{name}</li>;
        })}
      </ul>
      <span className="px-4 text-sm text-zinc-400">&copy; 2023 Google</span>
      <br />
      <p className="px-4 pt-3 text-sm text-zinc-400">
        This clone is made for educational purpose only.
      </p>
    </div>
  );
}
