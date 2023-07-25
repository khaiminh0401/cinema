"use client"
import "./index.css";
import Card from '@components/Card';
import Carousel from "@components/Carousel";
import { movieAPI } from "@/util/API/Movie";
import React, { use, useEffect, useState } from "react";
import dynamic from 'next/dynamic';


const Home = () => {
  const [data, setData] = useState<movie[]>();

  useEffect(() => {
    const movie = async () => {
      const movie = await movieAPI.findAll();
      console.log(movie);
      setData(movie);
    }
    movie();
  }, [])


  const type = ["PHIM SẮP CHIẾU", "PHIM ĐANG CHIẾU", "SUẤT CHIẾU ĐẶC BIỆT"];


  
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
        {/* <div className="box">
          <div className="group-wrapper">
            <div className="group">
              <div className="overlap-group">
                <div className="div type">
                  {type.map((s, i) => { return <div key={i} className={`text-wrapper ${i == 1 ? 'text-danger' : ''}`} id={`type_${i}`} >{s}</div> })}
                </div>
                <img className="vector" alt="Vector" src="vector-1.svg" />
              </div>
            </div>
          </div>
        </div> */}
        <div className="row mt-3">
          {data?.map((movie: movie) => { return <Card id={`card_${movie.id}`} className="col-6 col-md-3 p-4" key={movie.id} data={movie} />; })}
        </div>
      </div>

    </>
  )
}

export default Home;
