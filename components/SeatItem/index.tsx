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
            className="w-max hover:bg-seat col-span-1 mx-auto" 
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