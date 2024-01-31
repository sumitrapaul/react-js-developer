import { useEffect, useState } from "react";
import { Button } from "react-bootstrap";
import Card from "react-bootstrap/Card";
import ListGroup from "react-bootstrap/ListGroup";
import { Link } from "react-router-dom";

const ShowList = () => {
  const [shows, setShows] = useState([]);

  const showsCol = {
    display : 'grid',
    gridTemplateColumns : 'repeat(3,1fr)',
    gap : '40px',
    marginTop : '36px'
  }

  const customButtonStyle = {
    background: "linear-gradient(30deg, #0891b2, #a21caf)",
  };

  const showColor ={
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    marginTop: '20px',
    color: '#701a75'
  }

  useEffect(() => {
    fetch("https://api.tvmaze.com/search/shows?q=all")
      .then((res) => res.json())
      .then((data) => setShows(data));
  }, []);

  return (
   <div>
    <h3 style={showColor}>All Movie Show</h3>
     <div style={showsCol}>
      {shows.map((show) => (
        <Card key={show.show.id} style={{ width: "28rm" }}>
            {show.show.image ? (
          <Card.Img variant="top" src={show.show.image?.original} style={{height : '250px'}} />
            ) : (
                <Card.Img variant="top" src="" alt="Image not available" style={{height : '250px'}} /> 
            )
}
          <Card.Body>
            <Card.Title>{show.show.name}</Card.Title>
            <Card.Text>
             Type: {show.show.type} <br />
             Language: {show.show.language}     
            </Card.Text>
          </Card.Body>
          <ListGroup className="list-group-flush">
            
            <ListGroup.Item>
            <strong>Genres: </strong>
            {
                show.show.genres.map((genre,i) =>(
                    <span key={i}>
                     {i > 0 && ', '}{genre}
                    </span>
                )

                )
            }
            </ListGroup.Item>
            
          </ListGroup>
          <Card.Body>
            <Link to={`/details/${show.show.id}`}><Button style={customButtonStyle}>Details</Button></Link>
          </Card.Body>
        </Card>
      ))}
    </div>
   </div>
  );
};

export default ShowList;
