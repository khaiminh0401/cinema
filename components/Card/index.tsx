import Image from "next/image";
import Link from "next/link";
import "./index.css"
const Card = ({ ...props }: CardProps) => {
return (
        <div className={`card ${props.className}`} id={props.id}>
            <div className="group-wrapper">
                <div className="group">
                    <img className="image" alt="Image" src={"/assert/img/movie/" + props.data.poster} />
                    <h1 className="text-wrapper">{props.data.name}</h1>
                    <div className="div">
                        <img className="star" alt="Star" src="star-1.svg" />
                        <div className="text-wrapper-2">170 phút</div>
                        <img className="layer" alt="Layer" src="layer-1.svg" />
                        <img className="img" alt="Layer" src="image.svg" />
                    </div>
                </div>
            </div>
        </div>
    );
}
export default Card;