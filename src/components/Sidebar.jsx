import List from './List_component';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

function Sidebar() {
  return(
    <>
      <Row>
        <Col sm={'hidden'}>
          <List/>
        </Col>
      </Row>
    </>
  )
}

export default Sidebar;
