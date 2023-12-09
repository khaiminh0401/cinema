import {ReactNode, useState} from "react";
import SeatIcon from "@/common/Icon/SeatIcon";

interface SeatItem{
    children?: ReactNode,
    state: boolean
}

const SeatCoupleItem : React.FC<SeatItem> = ({children,state}) => {
    const [choose,setChoose] = useState(false);
    const handleClick = () =>{
        setChoose(!choose);
    }
    let Item = () => state ? <SeatIcon.ItemCoupleHasBooked/> : <SeatIcon.ItemCoupleDefault/>;

    return (
        <button 
            className={`w-max bg-transparent mx-auto px-2`} 
            type="button" 
            disabled={state}
            onClick={handleClick}
        >
            <section className={"w-7 md:!w-10 lg:!w-16 mx-auto"}>{!choose ? <Item/>: <SeatIcon.ItemCoupleChoose/>}</section>
            <p className={"text-xs md:!text-sm lg:!text-md"}>{children}</p>
      </button>
    );
}
export default SeatCoupleItem;