
import React from 'react';
import { Card, CardImg, CardText, CardBody,
  CardTitle, CardSubtitle, Button } from 'reactstrap';
  import shoe1 from "../../images/boyshoe.jpg";

const Cards = (post) => {
  return (


      <Card className="card">
        <CardImg top className="card-img"  src={shoe1} alt="Card image cap" />
        <CardBody>
             <CardTitle className="post-title">{post.post.title}</CardTitle>
          <CardText className="card-text">{post.post.detail}</CardText>
          <CardSubtitle className="post-price"> <span className="price-p">Price:</span> Rs {post.post.price}.</CardSubtitle>
          <Button className="view-this">view this</Button>
        </CardBody>
      </Card>
   
  );
};

export default Cards ;