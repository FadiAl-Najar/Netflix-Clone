import axios from "axios";
// import FavList from './FavList';
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";


function Trending(props) {
  const addCard = (card) => {
    const serverURL = `http://localhost:3001/addMovie`;
    axios
      .post(serverURL, card)
      .then((response) => {
        console.log(response.data);
      })
      .catch((rerror) => {
        console.log(rerror);
      });
  };
  return (
    <>
      <h1>Hi from Trending</h1>
      {props.movieData.map((item) => {
        return (
          <section>
            <Card style={{ width: "18rem" }} key={item.id}>
              <Card.Img variant="top" src={item.poster_path} />
              <Card.Body>
                <Card.Title>{item.title}</Card.Title>
                <Card.Text>{item.overview}</Card.Text>
                <Button
                  variant="primary"
                  onClick={() => {
                    addCard(item);
                  }}
                >
                  Add Card
                </Button>
              </Card.Body>
            </Card>
            {/* <FavList />  */}
          </section>
          
        );
      })}
    </>
  );
}

export default Trending;
