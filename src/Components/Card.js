import React from 'react';
import { Card } from 'react-bootstrap';


const Cards = (props) => {
  const src = `http://openweathermap.org/img/wn/${props.imgSrc}@2x.png`;
    return (
    
//     <Card>
//   <Card.Body>
//     <Card.Title>{props.date}</Card.Title>
//     <Card.Subtitle className="mb-2 text-muted">Card Subtitle</Card.Subtitle>
//     <Card.Text>
//       {props.data}
//     </Card.Text>
//     <Card.Text>
//       {props.data}
//     </Card.Text>
//     <Card.Link href="#">Card Link</Card.Link>
//     <Card.Link href="#">Another Link</Card.Link>
//   </Card.Body>
// </Card>
<div>
  <h2>{props.date}</h2>
  <h3>°{props.temp}</h3>
  <p>{props.data}</p>
  <img  src={src}/>
</div>
    )
}

export default Cards;