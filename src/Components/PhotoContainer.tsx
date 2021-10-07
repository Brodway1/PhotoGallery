import PhotoProps from "../../interfaces/PhotoProps"

const PhotoContainer = (props: PhotoProps) => {
    return (
        <div className="container mx-auto h-1/4">
            <img className={"object-contain"} src={props.url} alt={props.name} />
            <div>
                <h5>{props.name}</h5>
                <span>{props.location}</span>
            </div>
        </div>
    )
}

export default PhotoContainer;