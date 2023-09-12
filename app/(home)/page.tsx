'use client'
import React, { useState, useEffect } from "react";
import Link from "next/link";
import { movieAPI } from "@/util/API/Movie";
import $, { param } from "jquery";
import { FaAngleLeft, FaAngleRight } from "react-icons/fa";
import "./index.css";
import { useCookies } from "react-cookie";
import { CookiesProvider } from 'react-cookie';
import { CardDefault } from "@/components/Card";

const Home = () => {
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


  const [data, setData] = useState<movie[]>();
  const [moviesNowShowing, setMoviesNowShowing] = useState<movie[]>();
  const [cookie, setCookie] = useCookies(["statusId"]);
  const handleCookie = (value: string, event?: any) => {
    if (event != undefined) event.preventDefault();
    setCookie("statusId", value);
  }


  useEffect(() => {
    if (cookie.statusId == undefined) {
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
      setData(movie);

      // Đang test nên để findAll, vì findMoviesNowShowing không có data trong database
      const mv = await movieAPI.findAll();
      setMoviesNowShowing(mv);
    }
    init()
  }, [cookie.statusId])

  return (
    <CookiesProvider>
      {/* Slide show hiện khi có phim đang chiếu trong ngày */}
      {(moviesNowShowing?.length == 0) ? <></> :
        <>
          <div className="lll">
            <div id="slide">
              {moviesNowShowing?.map((m, i) => {
                return (
                  <div key={m.id} className="main" style={{ backgroundImage: `url('/assert/home/${m.poster}')` }}>
                    <div className="content rounded-md">
                        <div className="font-bold text-lg mx-4 ">{m.name}</div>
                        <div className="mb-4 m-4 text-white">{m.describe}</div>
                        <Link
                          key={m.id}
                          className={`font-bold hover:text-red-900 m-4`} id={`nowShowing_${i}`}
                          href={{
                            pathname: `/movie-details`,
                            query: { id: m.id }
                          }}
                        >
                          Xem thêm
                        </Link>
                      </div>
                  </div>
                );
              })}
            </div>
            <div className="buttons">
              <button id="prev"><FaAngleLeft size={40} /></button>
              <button id="next"><FaAngleRight size={40} /></button>
            </div>
          </div>
        </>
      }

      <div className="container ">
        <div className="group">
          <div className="overlap-group">
            <div className="div type">
              <div className="flex flex-row justify-content-center text-center">
                {statusOfMovie?.map((status, i) => {
                  return (
                    <Link
                      key={i}
                      className={`text-wrapper ${status.id == parseInt(cookie.statusId) ? "text-danger" : 'text-white'} text-decoration-none`} id={`type_${i}`}
                      href={{
                      }}
                      onClick={(event) => {
                        handleCookie(status.id + "", event);
                      }}
                    >
                      {status.name}
                    </Link>
                  )
                })}
              </div>
            </div>
          </div>
        </div>
        <div className="mt-3 flex flex-row justify-center" id="movie">
          {data?.map((movie: movie, index) => {
            return (
              <>
                <Link
                  key={movie.id}
                  className="basis-1/4" id={`${index}`}
                  href={{
                    pathname: `/movie-details`,
                    query: { id: movie.id }
                  }}>
                  <CardDefault id={`card_${movie.id}`} key={movie.id} className="" data={movie} />
                </Link>
              </>
            )
          })}
        </div>
      </div>
    </CookiesProvider>
  )
}

export default Home;