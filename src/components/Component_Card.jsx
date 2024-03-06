import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Placeholder from 'react-bootstrap/Placeholder';

function Component_Card(data) {
  return (
      <Card>
        <Card.Img variant="top"
          height="200vh"
          src={data.data.field_ws_image.url.replace('public://', 'http://d10.docksal.site/sites/default/files/')}
          alt={data.data.field_ws_image.alt}/>
        <Card.Body>
          <Card.Title>{ data.data.field_ws_title }</Card.Title>
          <Card.Text>{ data.data.field_ws_body }</Card.Text>
          <Button variant="primary"
            link={data.data.field_ws_link ? data.data.field_ws_link.url : '#'}>
            {data.data.field_ws_link ? data.data.field_ws_link.title : 'Click Here'}
          </Button>
        </Card.Body>
      </Card>
  );
}

export default Component_Card;
