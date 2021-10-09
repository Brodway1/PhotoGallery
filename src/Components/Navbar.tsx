import "../App.css";
import { RiSunFill } from "react-icons/ri";
import { RiMoonFill } from "react-icons/ri";
import DarkMode from "../../interfaces/DarkMode"


const Navbar = (props: DarkMode) => {
  return (
    <div
      className={`container mx-auto h-1/4 ${
        props.darkMode ? "bg-gray-700" : "bg-gray-200"
      }`}
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
              className={`block w-14 h-8 rounded-full px-5 ${
                props.darkMode ? "bg-gray-600" : "bg-gray-100"
              }`}
            ></div>
            <div
              className={`dot absolute left-1 top-1 w-6 h-6 rounded-full transition ${
                props.darkMode ? "bg-gray-700" : "bg-yellow-300"
              }`}
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
