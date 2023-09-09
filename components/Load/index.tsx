// import dynamic from "next/dynamic";
// import Card from '@components/Card';
// import React, { useState, useEffect } from 'react';
// import HashLoader from "react-spinners/HashLoader";
// //const HashLoader = dynamic(()=>import("react-spinners/HashLoader")); 
// // eslint-disable-next-line react-hooks/rules-of-hooks
// const [data] = useState<movie[]>();
// const Load = () => {


//     const [loading, setLoading] = useState(false);
//     useEffect(() => {
//         setLoading(true);
//         setTimeout(() => {
//             setLoading(false);
//         }, 2000);
//     }, []);



//     return (
//         <div className="row mt-3" id="movie">
//             {loading ? (<HashLoader color="#d63636" />) : (
//                 data?.map((movie: movie) => { return <Card id={`card_${movie.id}`} className="col-6 col-md-3 p-4" key={movie.id} data={movie} />; })
//             )}
//         </div>

//         // <div className="row mt-3" id="movie">
//         //     {data == undefined ? (<HashLoader color="#d63636" />) : (
//         //         data?.map((movie: movie) => { return <Card id={`card_${movie.id}`} className="col-6 col-md-3 p-4" key={movie.id} data={movie} />; })
//         //     )}
//         // </div>
//     );
// }

// export default Load;