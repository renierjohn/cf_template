import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Placeholder from 'react-bootstrap/Placeholder';

function Card_component(data) {
  return (
      <Card>
        <Card.Img variant="top" src={ data.data.image } />
        <Card.Body>
          <Card.Title>{ data.data.title }</Card.Title>
          <Card.Text>{ data.data.body }</Card.Text>
          <Button variant="primary">{data.data.btn_name}</Button>
        </Card.Body>
      </Card>
  );
}

export default Card_component;
