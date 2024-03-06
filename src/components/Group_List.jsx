import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import Card from './Component_Card';
import Image from './Component_Image';

function Group_List(data) {
  return (
    <>
      <h2 className="text-center">{ data.data.field_ws_title }</h2>
      <p className="text-center">{ data.data.field_ws_body }</p>
      <Row>
        {
          data.data.field_list_items.map((data, i) => {
            switch (data.component_id) {
              case 'card':
                return <Col key={i} md={4} sm={6} className='mb-2' ><Card data={data}/></Col>
              case 'image':
                return <Col key={i} md={4} sm={6} className='mb-2' ><Image data={data}/></Col>
              default:
                return <Row key={i}></Row>
            }
          })
        }
      </Row>
    </>
  );
}

export default Group_List;
