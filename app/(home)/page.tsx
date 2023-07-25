'use client'

import React, { useState, useEffect } from "react";
import Card from '@components/Card';
import Carousel from "@components/Carousel";
import Link from "next/link";
import Button from "@/components/Button/page";
import { movieTypeAPI } from "@/util/API/MovieType";
import { movieAPI } from "@/util/API/Movie";
import "./index.css";

const Home = () => {
  const typesOfMovies = [
    {
      id:0,
      name:"Phim sắp chiếu"
    },
    {
      id:1,
      name:"Phim đang chiếu"
    },
    {
      id:2,
      name:"Phim đã chiếu"
    }
  ]
  useEffect(() => {    
    $("#next").click(()=>{
      let list = $(".main");
      $("#slide").append(list[0]);
    })
    $("#prev").click(()=>{
      let list = $(".main");
      $("#slide").prepend(list[list.length-1]);
    })
    const movie = async () => {
      const movie = await movieAPI.findAll()
      setData(movie)
    }
    movie()
  }, [])

  const [data, setData] = useState<movie[]>();


  return (
    <>
      <div className="lll">
        <div id="slide">
          <div className="main" style={{ backgroundImage: "url('/assert/home/monPhai.jpg')" }}>
            <div className="content">
              <div className="name">Phố đêm</div>
              <div className="des">Tinh ru anh di chay pho, chua kip chay pho thi anhchay mat tieu</div>
              <button className="text-dark">See more</button>
            </div>
          </div>

          <div className="main" style={{ backgroundImage: "url('/assert/home/nguocDong.jpg')" }}>
            <div className="content">
              <div className="name">Quái vật sông MeKong</div>
              <div className="des">Tinh ru anh di chay pho, chua kip chay pho thi anhchay mat tieu</div>
              <button className="text-dark">See more</button>
            </div>
          </div>
          <div className="main" style={{ backgroundImage: "url('/assert/home/monPhai.jpg')" }}>
            <div className="content">
              <div className="name">Phố đêm</div>
              <div className="des">Tinh ru anh di chay pho, chua kip chay pho thi anhchay mat tieu</div>
              <button className="text-dark">See more</button>
            </div>
          </div>
          <div className="main" style={{ backgroundImage: "url('/assert/home/gioihan.png')" }}>
            <div className="content">
              <div className="name">Quái vật sông mekong</div>
              <div className="des">Tinh ru anh di chay pho, chua kip chay pho thi anhchay mat tieu</div>
              <button className="text-dark">See more</button>
            </div>
          </div>
          <div className="main" style={{ backgroundImage: "url('/assert/home/kisa.jpg')" }}>
            <div className="content">
              <div className="name">Phố đêm</div>
              <div className="des">Tinh ru anh di chay pho, chua kip chay pho thi anhchay mat tieu</div>
              <button className="text-dark">See more</button>
            </div>
          </div>
          <div className="main" style={{ backgroundImage: "url('/assert/home/Rectangle.png')" }}>
            <div className="content">
              <div className="name">Phố đêm</div>
              <div className="des">Tinh ru anh di chay pho, chua kip chay pho thi anhchay mat tieu</div>
              <button className="text-dark">See more</button>
            </div>
          </div>
        </div>
        <div className="buttons">
          <button id="prev"><i className="fa-solid fa-angle-left" /></button>
          <button id="next"><i className="fa-solid fa-angle-right" /></button>
        </div>
      </div>
      <div className="container">
        <div className="box">
          <div className="group-wrapper">
            <div className="group">
              <div className="overlap-group">
                <div className="div type">
                  {typesOfMovies?.map((movieType, i) => {
                    return (
                      <Link
                        key={i}
                        className={`text-wrapper ${i == 1 ? 'text-danger' : ''}`} id={`type_${i}`}
                        href={{
                          pathname: "",
                          query: { id: `${movieType.id}` },
                        }}
                      >
                        {movieType.name}
                      </Link>
                    )
                  })}
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="row mt-3">
          {data?.map((movie: movie) => { return <Card id={`card_${movie.id}`} className="col-6 col-md-3 p-4" key={movie.id} data={movie} />; })}
        </div>
      </div>

    </>
  )
}

export default Home;