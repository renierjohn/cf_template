import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

function ListGroup(data) {
  return (
    <>
      <h2 className="text-center">{ data.title }</h2>
      <Row>
        {
          data.item.map((data, i) => {
            return (<Col key={i} md={4} sm={6} className='mb-2'>{data}</Col>)
          })
        }
      </Row>
    </>
  );
}

export default ListGroup;
