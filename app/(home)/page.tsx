'use client'

import React, { useState, useEffect } from "react";
import Card from '@components/Card';
import Link from "next/link";
import { movieAPI } from "@/util/API/Movie";
import $, { param } from "jquery";
import { FaAngleLeft, FaAngleRight } from "react-icons/fa";
import "./index.css";
import { useCookies } from "react-cookie";
import { CookiesProvider } from 'react-cookie';


const Home = () => {
  const typesOfMovies = [
    {
      id: 0,
      name: "Phim sắp chiếu"
    },
    {
      id: 1,
      name: "Phim đang chiếu"
    },
    {
      id: 2,
      name: "Phim đã chiếu"
    }
  ]
  const [data, setData] = useState<movie[]>();
  const [cookie,setCookie] = useCookies(["statusId"]);
  const handleCookie = (value:string) =>{
    setCookie("statusId",value);
  }
  useEffect(() => {

    if(cookie.statusId == undefined){
      handleCookie('1');
    }
    const init = async () => {
      $("#next").click(() => {
        let list = $(".main");
        $("#slide").append(list[0]);
      })
      $("#prev").click(() => {
        let list = $(".main");
        $("#slide").prepend(list[list.length - 1]);
      })
      const movie = await movieAPI.findByStatus(cookie.statusId);
      setData(movie)
    }
    init()
  }, [cookie.statusId])
  
  return (
    <CookiesProvider>
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
          <button id="prev"><FaAngleLeft/></button>
          <button id="next"><FaAngleRight/></button>
        </div>
      </div>
      <div className="container">
        <div className="box">
          <div className="group-wrapper">
            <div className="group">
              <div className="overlap-group">
                <div className="div type">
                  {typesOfMovies?.map((movieType, i) => {
                    console.log(`type:[${movieType.id},${cookie.statusId}]`)
                    return (
                      <Link
                        key={i}
                        className={`text-wrapper ${cookie.statusId !=undefined && movieType.id == parseInt(cookie.statusId) ? "text-danger" : "text-decoration-none"}`} id={`type_${i}`}
                        href={{
                          pathname: "",
                        }}
                        onClick={()=>handleCookie(movieType.id+"")}
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

    </CookiesProvider>
  )
}

export default Home;