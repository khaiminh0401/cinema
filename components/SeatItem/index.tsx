import { ReactNode, useState } from "react";
import SeatIcon from "@/common/Icon/SeatIcon";
interface SeatItem{
    children?: ReactNode,
    state: boolean
}

const SeatItem : React.FC<SeatItem> = ({children,state}) => {
    const [choose,setChoose] = useState(false);
    const handleClick = () =>{
        setChoose(!choose);
    }
    let Item = () => state ? <SeatIcon.ItemHasBooked/> : <SeatIcon.ItemDefault/>;

    return (
        <button 
            className={`w-max ${!state && !choose?"bg-blue-gray-600":"bg-transparent"} rounded ${state || !choose? "" : "hover:bg-orange-900"} col-span-1 mx-auto px-2`} 
            type="button" 
            disabled={state}
            onClick={handleClick}
        > 
            {!choose ? <Item/>: <SeatIcon.ItemChoose/>}
            <p>{children}</p>
      </button>
    );
}
export default SeatItem;