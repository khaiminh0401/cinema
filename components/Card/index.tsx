import Image from "next/image";
import Link from "next/link";
import "./index.css"
const Card = ({ ...props }: CardProps) => {
    return (
        <div className={`card ${props.className}`} id={props.id}>
            {/* <div className="group-wrapper">
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
            </div> */}
            <div className="card-header">
                <img className="imgMovie pe-3" alt="Image" src={"/assert/img/movie/" + props.data.poster} />
                <div className="description">
                    <span className="icon"><i className="bi bi-suit-heart-fill "></i></span> 
                    <span className="icon"><i className="bi bi-play-circle-fill m-4"></i></span> 
                    <span className="icon"><i className="bi bi-basket3-fill"></i></span> 
                </div>
            </div>

            <h1 className="text-wrapper pt-3 text-light ">{props.data.name}</h1>
            <p><span className="me-2 text-light"><i className="bi bi-clock"></i> 120 phút</span>
                <span className="me-2  text-light"><i className="bi bi-calendar-minus"></i> 28/07/2023</span>
                <span className="text-danger"><i className="bi bi-star-fill "></i> 8.3/10</span></p>


        </div>
    );
}
export default Card;