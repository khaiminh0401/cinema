'use client'

import React, { useState, useEffect } from "react";
import Card from '@components/Card';
import Link from "next/link";
import { movieAPI } from "@/util/API/Movie";
import $ from "jquery"
import "./index.css";
import { useSearchParams } from "next/navigation";
import { useCookies } from 'react-cookie';

const Home = () => {
  const [data, setData] = useState<movie[]>();
  const [isSelected, setIsSelected] = useState(false)
  const searchParams = useSearchParams()
  let statusId = searchParams.get("statusId")
  const [cookies, setCookie] = useCookies(['statusId']);

  const statusOfMovie = [
    {
      id: 0,
      name: "Phim sắp chiếu"
    },
    {
      id: 1,
      name: "Phim đang chiếu"
    }
  ]

  useEffect(() => {
    $("#next").click(() => {
      let list = $(".main");
      $("#slide").append(list[0]);
    });

    $("#prev").click(() => {
      let list = $(".main");
      $("#slide").prepend(list[list.length - 1]);
    });

    const fetchMovies = async () => {
      if (statusId === null) statusId = "0"

      const movies = await movieAPI.findByStatus(statusId)
      setData(movies)
    };

    fetchMovies();
  }, [statusId]);


  const handleSetCookie = (event: any) => {
    let id: string = event.target.id
    const cookieValue = id.replace("type_", "");
    const options = { path: '/' };

    setCookie('statusId', cookieValue, options);
  };

  const textColor = isSelected ? "text-danger" : "text-white"

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
      <div className="container mt-5">
        <div className="box">
          <div className="group-wrapper">
            <div className="group">
              <div className="overlap-group">
                <div className="div type">
                  <div className="d-flex justify-content-center text-center">
                    {statusOfMovie?.map((s, i) => {
                      return (
                        <Link
                          key={i}
                          className={`text-wrapper ${textColor} text-decoration-none`} id={`type_${i}`}
                          href={{
                            pathname: ``,
                            query: { statusId: `${s.id}` },
                          }}
                          onClick={handleSetCookie}
                        >
                          {s.name}
                        </Link>
                      )
                    })}
                  </div>
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