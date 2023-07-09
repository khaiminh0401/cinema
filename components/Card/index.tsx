import Image from "next/image";

const Card = ({...props}:CardProps) => {
    return (
        <div className="card mx-2" style={{height:"324px"}}>
            <Image className="img-fluid mx-auto" src={props.src} height={"100"} width={"100"} alt="Title" />
            <div className="card-body">
                <h4 className="card-title">{props.title}</h4>
                <p className="card-text">{props.year}</p>
            </div>
        </div>

    );
}
export default Card;