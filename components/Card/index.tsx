import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Typography,
} from "@material-tailwind/react";
import Link from "next/link";
import { FaRegClock, FaRegCalendar } from "react-icons/fa";
export function CardDefault({ ...props }: CardProps) {
  return (
    <Card className="max-w-full w-fit mx-3 bg-transparent">
      <CardHeader floated={false} className="max-h-96 min-h-full h-none">
        <img src={"/assert/img/movie/" + props.data.poster}/>
      </CardHeader>
      <CardBody className="text-center p-0 mt-2">
        <Typography variant="h6" color="white" className="hover:text-red-600 md:h-20 h-auto ">
          <Link href={"/movie-details?id=" + props.data.id} >
            {props.data.name}
          </Link>
        </Typography>
      </CardBody>
      <CardFooter className="flex justify-center gap-7 pt-2 ">
        <Typography
          color="white"
          className="flex items-center gap-1.5 font-normal md:text-base text-xs"
        >
          <FaRegClock />
          {props.data.time} Phút
        </Typography>
        <Typography
          color="white"
          className="flex items-center gap-1.5 font-normal"
        >
          <FaRegCalendar />
          {props.data.yearofmanufacture}
        </Typography>
      </CardFooter>
    </Card>
  );
}