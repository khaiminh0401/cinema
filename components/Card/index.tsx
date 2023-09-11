import Image from "next/image";
import Link from "next/link";
import { FaHeart, FaVideo, FaStar, FaRegClock, FaRegCalendar } from "react-icons/fa";
const Card = ({ ...props }: CardProps) => {
    return (
        <div className={`card ${props.className}`} id={props.id}>
            <div className="card-header">
                <img className="imgMovie pe-3" alt="Image" src={"/assert/img/movie/" + props.data.poster} />
                <div className="description d-flex flex-column mb-3">
                    <span className="icon"><FaHeart/></span>
                    <span className="icon"><FaVideo/></span>
                    <span className="icon"><FaStar/></span>
                </div>
            </div>

            <Link
                href={"/movie-details?id=" + props.data.id}
                className="text-wrapper text-decoration-none pt-3 text-light "
            >
                {props.data.name}
            </Link>
            <p><span className="me-2 text-light"><FaRegClock/> 120 phút</span>
                <span className="me-2  text-light"><FaRegCalendar/> 28/07/2023</span>
                <span className="text-danger"><FaStar/> 8.3/10</span></p>


        </div>
    );
}
export default Card;