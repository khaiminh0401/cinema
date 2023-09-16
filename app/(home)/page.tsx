'use client'
import { CardDefault } from "@/components/Card";
import { movieAPI } from "@/util/API/Movie";
import Link from "next/link";
import { useEffect, useState } from "react";
import { useCookies } from "react-cookie";
import { FaAngleLeft, FaAngleRight } from "react-icons/fa";
import "./index.css";

const Home = () => {
  const [data, setData] = useState<movie[]>();
  const [moviesNowShowing, setMoviesNowShowing] = useState<movie[]>();
  const [cookie, setCookie] = useCookies(["statusId"]);
  const [currentIndex, setCurrentIndex] = useState({
    prev: 0, next: 5
  });
  const statusOfMovie = [
    {
      id: 0,
      name: "Phim sắp chiếu"
    },
    {
      id: 1,
      name: "Phim đang chiếu"
    }
  ];
  useEffect(() => {
    const init = async () => {
      const movie = await movieAPI.findByStatus(cookie.statusId);
      setData(movie);
      setMoviesNowShowing(movie);
    }
    init()
    if (cookie.statusId == undefined) {
      handleCookie('1');
    };
  }, [cookie.statusId])

  const handleCookie = (value: string, event?: any) => {
    if (event != undefined) event.preventDefault();
    setCookie("statusId", value);
  }
  const handleClick = (e: any) => {
    if (e.target.id == 'next') {
      const prevIndex = currentIndex.prev + 1;
      const nextIndex = currentIndex.next + 1;
      if (data && nextIndex - 5 != data.length) {
        const newShow = data?.slice(prevIndex, nextIndex);
        setMoviesNowShowing(newShow)
        setCurrentIndex({ prev: prevIndex, next: nextIndex })
      }
    }
    if (e.target.id == 'prev') {
      const prevIndex = currentIndex.prev - 1;
      const nextIndex = currentIndex.next - 1;
      console.log(prevIndex);
      if (data && prevIndex != -1) {
        const newShow = data?.slice(prevIndex, nextIndex);
        setMoviesNowShowing(newShow)
        setCurrentIndex({ prev: prevIndex, next: nextIndex })
      }
    }
  }

  return (
    (<div key={1}>
      {(data?.length != 0) &&
        <>
          <div className="lll">
            <div id="slide" >
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
              <button id="prev" onClick={handleClick}><FaAngleLeft size={40} id="prev" /></button>
              <button id="next" onClick={handleClick}><FaAngleRight size={40} id="next" /></button>
            </div>
          </div>
        </>
      }

      <div className="group" >
        <div className="overlap-group">
          <div className="div type">
            <div className="flex flex-row justify-center text-center" >
              {statusOfMovie.map((status, i) => {
                return (<div key={i} className="p-4 mt-3 " >
                  <Link
                    className={`text-3xl font-bold ${status.id == cookie.statusId ? "text-red-900" : "text-white"}`} id={`type_${i}`}
                    href={{
                    }}
                    onClick={(event) => {
                      handleCookie(status.id + "", event);
                    }}

                  >
                    {status.name}
                  </Link>
                </div>)
              })}
            </div>
          </div>
        </div>
      </div>
      <div className="mt-3 mx-auto flex flex-row justify-start flex-wrap w-4/5 " id="movie">
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
    </div>)

  )
}

export default Home;