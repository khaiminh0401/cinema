import { ReactNode } from "react";

interface SRow{
    children: ReactNode
}


const SeatRow = ({children}:SRow) =>{
    return (
        <div className="grid grid-cols-12 gap-10">
            {children}
        </div>
    );
}
export default SeatRow;