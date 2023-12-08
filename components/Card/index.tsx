import {constants} from "@/common/constants";
import {Card} from "antd";
import Link from "next/link";
import {FaRegCalendar, FaRegClock} from "react-icons/fa";
import Image from "next/image";

export function CardDefault({...props}: CardProps) {
    return (
        <Card className="w-64 h-fit m-3 mb-8 hover:scale-110 transition-transform border-none hover:bg-red-700"
              cover={
                  <div className="h-72 w-fit">
                      <Image
                          src={`${constants.URL_IMAGES}${props.data.poster}`}
                          className="object-cover !w-full !h-full transition-transform"
                          width={1000}
                          height={300}
                          alt={`${props.data.name}}`}
                      />
                  </div>
              }

              style={{background: 'black'}}
        >
            <div>
                <div className="text-center h-28">
                    <label className="text-sm block text-white hover:text-red-600 h-14  font-semibold hover:cursor-pointer">
                        {props.data.name}
                    </label>
                    <div className="text-white flex justify-evenly mt-2 h-9">
                        <p
                            className="flex items-center font-normal md:text-base text-xs "
                        >
                            <FaRegClock/> {props.data.time} Phút
                        </p>
                        <p
                            className="flex items-center gap-1.5 font-normal"
                        >
                            <FaRegCalendar/>
                            {props.data.yearofmanufacture}
                        </p>
                    </div>
                </div>
            </div>

        </Card>
    );
}