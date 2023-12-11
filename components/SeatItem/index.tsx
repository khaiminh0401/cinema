import {useState} from "react";
import SeatIcon from "@/common/Icon/SeatIcon";
import {width} from "dom-helpers";

interface SeatItem{
    obj:any,
    onClick: (name:string) => any
}

const SeatItem : React.FC<SeatItem> = ({obj,onClick}) => {
    const [choose,setChoose] = useState(false);
    const handleClick = () =>{
        setChoose(!choose);
        onClick(obj);
    }
    let Item = () => obj.booked ? <SeatIcon.ItemHasBooked/> : <SeatIcon.ItemDefault/>;

    return (
        <button 
            className={`w-max bg-transparent col-span-1 mx-auto px-2`}
            type="button" 
            disabled={obj.booked}
            onClick={handleClick}
        >
            <p className={"w-6 md:!w-8 lg:!w-10"}>
                {!choose ? <Item/>: <SeatIcon.ItemChoose/>}
            </p>
            <p className={"text-xs md:!text-sm lg:!text-md"}>{obj.name.substring(1)}</p>
      </button>
    );
}
export default SeatItem;