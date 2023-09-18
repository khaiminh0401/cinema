'use client'
import { CardDefault } from "@/components/Card";
import SelectOption from "@/components/Select";
import { HomeAPI } from "@/util/API/Home";
import { movieAPI } from "@/util/API/Movie";
import { Input } from 'antd';
import $ from "jquery";
import Link from "next/link";
import { useEffect, useState } from "react";
import { useCookies } from "react-cookie";
import { FaAngleLeft, FaAngleRight } from "react-icons/fa";
import "./index.css";
import { SearchProps } from "antd/es/input";
const { Search } = Input;
type SelectedType = {
  movieType: movieType[],
  country: country[],
  branch: branch[]
}
const Home = () => {
  const [data, setData] = useState<movie[]>();
  const [dataSelect, setSelect] = useState<SelectedType | undefined>();
  const [moviesNowShowing, setMoviesNowShowing] = useState<movie[]>();
  const [cookie, setCookie] = useCookies(["statusId"]);
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
      const mv = await movieAPI.findByStatus('1');
      setMoviesNowShowing(mv);
      const Selected = await HomeAPI.findAll();
      setSelect(Selected);
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

  const onSearch: SearchProps['onSearch'] = (value, _e, info) => console.log(info?.source, value);

  return (
    (<div key={1}>
      {(moviesNowShowing?.length != 0) &&
        <>
          <div className="lll">
            <div id="slide" >
              {moviesNowShowing?.map((m, i) => {
                return (
                  <div key={m.id} className="main" style={{ backgroundImage: `url('http://localhost:8080/images/movie/${m.poster}')` }}>
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
              <button id="prev" ><FaAngleLeft size={40} id="prev" /></button>
              <button id="next" ><FaAngleRight size={40} id="next" /></button>
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
      <div className="search justify-evenly flex">
        <SelectOption className="bg-white text-black border-3 w-40 " id="1" name="Quốc gia" options={
          dataSelect?.country.map((value, i) => (
            {
              value: i + 1,
              label: value.name
            }
          ))
        } />
        <SelectOption className="bg-white text-black border-3 w-40 " id="2" name="Thể loại" options={
          dataSelect?.movieType.map((value, i) => (
            {
              value: i + 1,
              label: value.name
            }
          ))
        } />
        <SelectOption className="bg-white text-black border-3 w-40 " id="3" name="Chi nhánh" options={
          dataSelect?.branch.map((value, i) => (
            {
              value: i + 1,
              label: value.name
            }
          ))
        } />
        <Search
          allowClear
          onSearch={onSearch}
          style={{ width: 304 }}
          className="justify-self-end"
        />
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