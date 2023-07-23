import { movieAPI } from '@/util/API/Movie';
import Image from 'next/image';

export default async function Movie({ params }: any) {
  const movie = await movieAPI.findById(params.id);
  let trailer = movie.trailer.replace("/watch?v=", "/embed/");
  return (
    <div className='container my-3'>
      <div className="row my-3">
        <div className="col-5">
          <iframe src={trailer} className='col-6 w-100' style={{ height: "100%" }} title="YouTube video player" frameBorder={0} allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen />
          {/* <Image className='d-block mx-auto' style={{height:"auto"}} src={`/assert/img/movie/${movie.image}`} width={200} height={270} alt='' /> */}
        </div>
        <section className="col-7 movie-info">
          <h1>{movie.name}</h1>
          <table>
            <tbody>
              <tr>
                <td><i className="bi bi-calendar"></i> Năm sản xuất: {movie.year_of_manufacture}</td>
                <td width={100}></td>
                <td><i className="bi bi-briefcase"></i> Đạo diễn: {movie.director}</td>
              </tr>
              <tr>
                <td><i className="bi bi-globe-americas"></i> Quốc gia: {movie.national}</td>
                <td width={100}></td>
                <td><i className="bi bi-hourglass"></i> Thời lượng: {movie.time}</td>
              </tr>
            </tbody>
          </table>
          <p className='mt-2' style={{ textAlign: "justify" }}><i className="bi bi-arrow-return-right"></i> Nội dung chính: {movie.describe}...</p>
        </section>
      </div>
      <div className="d-block">
        <ul className="nav nav-tabs">
          <li className="nav-item">
            <a className="nav-link active" aria-current="page" href="#">Lịch chiếu</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#">Đánh giá</a>
          </li>
        </ul>
        <section className="my-5">
          <form action="">
            <div className="mb-3 d-flex w-50">
              <input type="date" className='form-control mx-2' />
              <select name="" id="" className='form-select'>
                <option value="">--chọn chi nhánh--</option>
              </select>
            </div>
          </form>
          <table className='w-50 my-5'>
            <tbody>
              <tr>
                <td className='text-center' colSpan={2}>Tân Bình</td>
                <td colSpan={3}><button className='btn btn-primary mx-auto'>16:00:00</button></td>
              </tr>
              <tr>
                <td className='text-center' colSpan={2}>Bình Thạnh</td>
                <td colSpan={3}><button className='btn btn-primary mx-auto'>21:00:00</button></td>
              </tr>
            </tbody>
          </table>
        </section>
      </div>
    </div>
  );
}




