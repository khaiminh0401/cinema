import {
  Card,
  CardBody,
  CardFooter,
  CardHeader,
  Typography,
} from "@material-tailwind/react";
import Link from "next/link";
import { FaRegCalendar, FaRegClock } from "react-icons/fa";
export function CardDefault({ ...props }: CardProps) {
  return (
    <Card className="max-w-fit max-h-fit mx-3 bg-transparent">
      <CardHeader floated={false} className="h-72">
        <img src={"/assert/img/movie/" + props.data.poster} className="object-cover h-full w-full hover:scale-110 transition-transform"/> 
      </CardHeader>
      <CardBody className="text-center p-0 mt-4">
        <Typography  color="white" className="text-xs hover:text-red-600 md:h-20 h-auto font-semibold">
          <Link href={"/movie-details?id=" + props.data.id} >
            {props.data.name}
          </Link>
        </Typography>
      </CardBody>
      <CardFooter className="flex justify-center gap-5 pt-2 ">
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