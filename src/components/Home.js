import { useEffect, useState } from "react";
// import FavList from './FavList';
import Trending from './Trending';
// import Header from "./Header";


function Home() {
  const [movieData, setMovieData] = useState([])
  const getAllMovie = () => {
    const serverURL = `http://localhost:3001/trending`;
    fetch(serverURL)
      .then((response) => {
        response.json().then(data =>{
          console.log(data);
          setMovieData(data);
        })})}
        useEffect(()=>{
          getAllMovie();
      },[])
  return (
    
    <section>
      {/* <Header /> */}
      {/* <FavList /> */}
      <Trending movieData={movieData}/>
      
    </section>
  );
}

export default Home;
