import Image from "next/image";
import Link from "next/link";

const Card = ({...props}:CardProps) => {
    return (
        <div className="card mx-3" style={{height:"270px",borderRadius:"0"}}>
            <Image className="img-fluid mx-auto" src={props.src} height={"100"} width={"100"} alt="Title" />
            <div className="card-body">
                <h6 className="card-text text-center"><a href={`/movie/${props.id}`}>{props.title}</a></h6>
            </div>
            <div className="card-footer">
                <p className="card-text">{props.year} <span className="float-end"><i className="bi bi-clock-fill"></i> {props.time}</span></p>
            </div>
        </div>

    );
}
export default Card;