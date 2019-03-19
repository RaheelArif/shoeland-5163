
import React from 'react';
import { Card, CardImg, CardText, CardBody,
  CardTitle, CardSubtitle, Button } from 'reactstrap';
  import shoe1 from "../../images/boyshoe.jpg";

const Cards = (post) => {
  return (


      <Card className="card">
        <CardImg top className="card-img"  src={shoe1} alt="Card image cap" />
        <CardBody>
          <CardTitle>{post.post.title}</CardTitle>
          <CardSubtitle>{post.post.price}</CardSubtitle>
          <CardText className="card-text">{post.post.detail}</CardText>
          <Button>Button</Button>
        </CardBody>
      </Card>
   
  );
};

export default Cards ;