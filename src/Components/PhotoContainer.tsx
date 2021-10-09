import PhotoProps from "../../interfaces/PhotoProps";

const PhotoContainer = (props: PhotoProps) => {
  return (
    <div className="container mx-auto h-1/2">
      <img
        className={`zoom max-h-full rounded-3xl w-full p-3`}
        src={props.url}
        alt={props.name}
      />
      <div>
        <h5 className={"text-left text-xl font-semibold text-green-500 pl-5"}>
          {props.name}
        </h5>
        <span
          className={`text-left pl-5 block ${
            props.darkMode ? "text-white" : "text-black"
          }`}
        >
          Location: {props.location}
        </span>
        <span
          className={`p-3 pl-5 text-left w-full block ${
            props.darkMode ? "text-white" : "text-black"
          }`}
        >
          Description: {props.description}
        </span>
      </div>
    </div>
  );
};

export default PhotoContainer;
