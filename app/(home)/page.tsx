"use client"
import "./index.css";
import Card from '@components/Card';
import { movieAPI } from "@/util/API/Movie";
import Carousel from "@components/Carousel";

const Home = async() => {
  const data = await movieAPI.findAll();
  return (
    <>
      <div className='main'>
        <div className='hover'></div>
      </div>
      <div className="des"></div>
      <section className="box container my-5">
        <h3 className='pb-3'>Phim mới <a className='btn btn-danger float-end'>Xem thêm</a></h3>
        <Carousel>
          {data?.map((movie: movie) => { return <Card id={movie.id} key={movie.id} time={movie.time} year={movie.year_of_manufacture} title={movie.name} src={"/assert/img/movie/" + movie.image} />; })}
        </Carousel>
      </section>
    </>
  )
}

export default Home;
