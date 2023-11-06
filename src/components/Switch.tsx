import React, { useState } from "react";

interface SwitchProps {
  method: () => void;
  state: boolean;
}

const Switch = (props: SwitchProps) => {
  const [isSelected, setIsSelected] = useState(props.state);

  const handleSwitch = (e: React.MouseEvent<HTMLDivElement>) => {
    e.preventDefault();
    setIsSelected(!isSelected);
    props.method();
  };

  return (
    <div
      className="bg-gray-500 rounded-full cursor-pointer"
      onClick={(e) => handleSwitch(e)}
    >
      <div
        className={`flex w-12 h-6 ${
          isSelected ? " bg-[#383838]" : "bg-[#989898]"
        }  rounded-full hover:opacity-70 duration-100`}
      >
        <span
          className={`h-6 w-6 ${
            isSelected ? "bg-[#fbfbfb]" : "bg-[#383838]"
          }  duration-300 rounded-full ${isSelected ? "ml-6" : ""}`}
        ></span>
      </div>
    </div>
  );
};

export default Switch;
