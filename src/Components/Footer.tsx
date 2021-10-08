import { RiGithubFill } from "react-icons/ri";
const Footer = (props: any) => {
  return (
    <div className={`container mx-auto text-xl py-5 ${props.darkMode ? "text-white" : "text-black"}`}>
      <span className={""}>Made by Grzegorz Niemas</span>
      <a href="https://github.com/Brodway1">
        <RiGithubFill size={"2em"} className={`mx-auto my-5`}/>
      </a>
    </div>
  );
};

export default Footer;
