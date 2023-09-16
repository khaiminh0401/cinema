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
    <Card className="max-w-fit max-h-fit mx-3 bg-transparent hover:bg-brown-800 hover:scale-105 transition-transform">
      <CardHeader floated={false} className="h-72">
        <img src={"/assert/img/movie/" + props.data.poster} className="object-cover h-full w-full hover:scale-110 transition-transform"/> 
      </CardHeader>
      <CardBody className="text-center p-0 mt-4">
        <Typography  color="white" className="text-xs hover:text-red-600 md:h-9 h-auto font-semibold">
          <Link href={"/movie-details?id=" + props.data.id} >
            {props.data.name}
          </Link>
        </Typography>
      </CardBody>
      <CardFooter className="flex justify-evenly gap-5 pt-1">
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