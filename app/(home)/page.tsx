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
  const handleCookie = (event: any, value: string) => {
    setCookie("statusId", value);
    event.preventDefault();
  }


  useEffect(() => {
    if (cookie.statusId == undefined) {
      handleCookie('', '1');
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

  console.log(moviesNowShowing)

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
                    <div className="content">
                      <div className="name h2">{m.name}</div>
                      <div className="des mb-4">{m.describe}</div>
                      <Link
                        key={m.id}
                        className={`text-wrapper text-decoration-none text-light fw-bold`} id={`nowShowing_${i}`}
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

            {(moviesNowShowing?.length == 1) ? <></> : <div className="buttons">
              <button id="prev"><FaAngleLeft size={40} /></button>
              <button id="next"><FaAngleRight size={40} /></button>
            </div>}
          </div>
        </>
      }

      <div className="container mt-5">
        <div className="box">
          <div className="group-wrapper">
            <div className="group">
              <div className="overlap-group">
                <div className="div type">
                  <div className="d-flex flex-row-reverse justify-content-center text-center">
                    {statusOfMovie?.map((status, i) => {
                      return (
                        <Link
                          key={i}
                          className={`text-wrapper ${status.id == parseInt(cookie.statusId) ? "text-danger" : 'text-white'} text-decoration-none`} id={`type_${i}`}
                          href={{
                          }}
                          onClick={(event) => {
                            handleCookie(event, status.id + "");
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
          </div>
        </div>
        <div className="row mt-3" id="movie">
          {data?.map((movie: movie, index) => {
            return <Link
              key={movie.id}
              className={`text-wrapper text-decoration-none col-6 col-md-3 p-4`} id={`${index}`}
              href={{
                pathname: `/movie-details`,
                query: { id: movie.id }
              }}
            >
              <Card id={`card_${movie.id}`} className="" key={movie.id} data={movie} />
            </Link>
          })}
        </div>
      </div>
    </CookiesProvider>
  )
}

export default Home;