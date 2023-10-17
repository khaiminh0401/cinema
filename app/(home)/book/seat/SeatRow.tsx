import SeatCoupleItem from "@/components/SeatCoupleItem";
import SeatItem from "@/components/SeatItem";

interface SRow {
    data: any,
    row: string,
    onClickButton: (name: string) => any
}
const SeatRow = ({ data, row, onClickButton }: SRow) => {
    let seats = data.map((x: any, i: number) => {
        return <SeatItem onClick={onClickButton} key={i} obj={x} />
    });
    if (row.charAt(0) == 'H') {
        seats = data.reduce((total: any, currentValue: any, currentIndex: any, arr: any) => {
            if (currentIndex % 2 != 0 && currentIndex > 0) {
                total.push({
                    booked: currentValue.booked,
                    name: `${arr[currentIndex - 1].name.substring(1)}  -    ${currentValue.name.substring(1)}`
                })
            }
            return total;
        }, []).map((x: any, i: number) => {
            return <SeatCoupleItem key={i} state={x.booked}>{x.name}</SeatCoupleItem>;
        })
    }


    return (

        <div className="flex justify-around gap-3 m-5">
            <div className={`grid ${row.charAt(0) == 'H' ? 'grid-cols-6' : 'grid-cols-12'} grid-rows-1 gap-4 my-5`}>
                {seats}
            </div>
            <div className="w-20 flex justify-center items-center my-5">
            <button className="bg-green-800 text-white rounded w-1/2">{row.charAt(0)}</button>
            </div>
        </div>
    );
}
export default SeatRow;