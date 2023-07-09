"use client"
import "./index.css";
import Card from '@/components/Card';
import { use, useEffect, useState } from 'react';
import { movieAPI } from "@/util/API/Movie";
import Carousel from "@/components/Carousel";
function limit(c: any) {
  return c.filter((x: any, i: any) => {
    if (i <= (c - 1)) { return true }
  })
}

function skip(c: any) {
  return c.filter((x: any, i: any) => {
    if (i > (c - 1)) { return true }
  })
}

const Home = () => {
  const data = use(movieAPI.findAll());
  const cardElement = data.map((movie) => { return <Card key={movie.id} year={movie.year_of_manufacture} title={movie.name} src={"/assert/img/movie/" + movie.image} />; });

  return (
    <>
      <div className='main'>
        <div className='hover'></div>
      </div>
      <section className="box container my-5">
        <h3 className='pb-3'>Phim mới <a className='btn btn-danger float-end'>Xem thêm</a></h3>
        <Carousel>
          {cardElement}
        </Carousel>
      </section>
    </>
  )
}

export default Home;
