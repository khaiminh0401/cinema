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
      <div className="layer">
        <div className="group-wrapper">
          <div className="group">
            <div className="overlap">
              <div className="overlap">
                <div className="div">
                  <h1 className="text-wrapper">QUÁI VẬT SÔNG MEKONG</h1>
                  <p className="di-n-vi-n-rose-byrne">
                    <span className="span">Diễn viên:&nbsp;&nbsp;</span>
                    <span className="text-wrapper-2">Rose Byrne, Ty Simpkins, Patrick Wilson</span>
                    <span className="text-wrapper-3">
                      <br />
                    </span>
                    <span className="span">Đạo diễn:&nbsp;&nbsp;</span>
                    <span className="text-wrapper-2">Patrick Wilson</span>
                    <span className="text-wrapper-4">
                      <br />
                    </span>
                    <span className="span">Thể loại: </span>
                    <span className="text-wrapper-2"> Kinh Dị</span>
                    <span className="text-wrapper-5">
                      {" "}
                      <br />
                    </span>

                    <span className="span">Quốc gia:</span>
                    <span className="text-wrapper-3">&nbsp;</span>
                    <span className="span">&nbsp;</span>
                    <span className="text-wrapper-2">
                      Mỹ
                      <br />
                    </span>
                    <span className="span"> Nhà sản xuất:</span>
                    <span className="text-wrapper-2">
                      &nbsp;&nbsp;Sony Pictures Releasing <br />
                    </span>
                    <span className="span">Ngày khởi chiếu:</span>
                    <span className="text-wrapper-6">&nbsp;</span>
                    <span className="text-wrapper-7">&nbsp;</span>
                    <span className="text-wrapper-2">12/7/2023</span>
                  </p>
                </div>
                <div className="group-2">
                  <div className="image-wrapper">
                    <img className="image" alt="Image" src="/assert/img/movie/MP01.png" />
                  </div>
                  <div className="img-wrapper">
                    <img className="img" alt="Image" src="/assert/img/movie/MP02.png" />
                  </div>
                  <div className="group-3">
                    <img className="image-2" alt="Image" src="/assert/img/movie/MP03.png" />
                  </div>
                </div>
              </div>
            </div>
            <p className="p">
              Một con quái vật bí ẩn bỗng xuất hiện từ sông Mekong và tấn công vùng Bueng Kan, nó hủy diệt mọi thứ và
              khiến người dân mất kết nối hoàn toàn với thế giới bên ngoài. Sự kiện gây chấn động toàn Thái Lan này đã
              khiến các cơ quan chức năng cùng những nhà khoa học vô tình đến Bueng Kan đã tiến hành nghiên cứu phải huy
              động tất cả các lực lượng để bắt con quái vật điên rồ này trước khi quá muộn.
            </p>
            <div className="overlap-wrapper">
              <div className="div-wrapper">
                <div className="text-wrapper-8">Đặt vé</div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="container-fluid mx-3">
        <div className="box">
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
        </div>
        <div className="row w-100 mt-3">
          {data?.map((movie: movie) => { return <Card id={`card_${movie.id}`} className="col-4" key={movie.id} data={movie} />; })}
        </div>
      </div>
    </>
  )
}

export default Home;
