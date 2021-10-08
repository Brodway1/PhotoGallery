import "../App.css";
import { RiSunFill } from "react-icons/ri";
import { RiMoonFill } from "react-icons/ri";

const Navbar = (props: any) => {
  return (
    <div
      className={`container ${
        props.darkMode ? "bg-gray-700" : "bg-gray-200"
      } mx-auto h-1/4`}
    >
      <div className={"flex items-center justify-center w-full mb-12 "}>
        <div className={"pr-2"}>
          <RiSunFill className={"text-yellow-300"} />
        </div>
        <label className={"flex items-center cursor-pointer"}>
          <div className={"relative"}>
            <input
              checked={props.darkMode}
              type="checkbox"
              className={"sr-only"}
              onChange={() => props.setDarkMode(!props.darkMode)}
            />
            <div
              className={`block ${
                props.darkMode ? "bg-gray-600" : "bg-gray-100"
              } w-14 h-8 rounded-full px-5`}
            ></div>
            <div
              className={`dot absolute left-1 top-1 ${
                props.darkMode ? "bg-gray-700" : "bg-yellow-300"
              } w-6 h-6 rounded-full transition`}
            ></div>
          </div>
          <div className={"pl-2"}>
            <RiMoonFill className={"text-gray-300"} />
          </div>
        </label>
      </div>
    </div>
  );
};

export default Navbar;
