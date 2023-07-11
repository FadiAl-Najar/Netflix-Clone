import axios from "axios";
import { useState, useEffect } from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
// import FavList from './FavList';
function FavList() {
  const [favArr, setFavArr] = useState([]);

  const getFavMovies = () => {
    const serverURL = `http://localhost:3001/favlist`;
    fetch(serverURL).then((respons) => {
      respons.json().then((data) => {
        setFavArr(data);
        console.log(data);
      });
    });
  };
  useEffect(() => {
    getFavMovies();
  }, []);

  const deleteMovie = (cardId) => {
    const serverURL = `http://localhost:3001/deleteMovie/${cardId}`;
    axios
      .delete(serverURL, cardId)
      .then((response) => {
        console.log(response.data);
      })
      .catch((rerror) => {
        console.log(rerror);
      });
  };

  return (
    <>
      <h1>Hi Form FavList</h1>
      {favArr.map(item=>{
        return(
            <section>
                 <Card style={{ width: "18rem" }} key={item.id}>
              <Card.Img variant="top" src={item.poster_path} />
              <Card.Body>
                <Card.Title>{item.title}</Card.Title>
                <Card.Text>{item.overview}</Card.Text>
                <Button
                  variant="primary"
                  onClick={() => {
                    deleteMovie(item.id);
                  }}
                >
                 Delete Movie
                </Button>
              </Card.Body>
            </Card>
            </section>
        )
      })}
      
      {/* <FavList />  */}
    </>
  );
}

export default FavList;
