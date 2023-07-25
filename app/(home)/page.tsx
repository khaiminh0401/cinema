"use client"
import "./index.css";
import Card from '@components/Card';
import { movieAPI } from "@/util/API/Movie";
import Carousel from "@components/Carousel";
import React, { useEffect } from "react";
import $ from "jquery";
import { useState } from "react";

const Home = async () => {
  // let lists = document.querySelectorAll('.main');
  // const [items,setItems] = useState([lists]);

  const data = await movieAPI.findAll();
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
                  {type.map((s, i) => { return <div key={i} className={`text-wrapper ${i == 2 ? 'text-danger' : ''}`} id={`type_${i}`} >{s}</div>; })}
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
