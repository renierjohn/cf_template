import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import Accordion from './Component_Accordion';
import Card from './Component_Card';
import Image from './Component_Image';
import List from './Component_List';

function Layout_Sidebar(props) {
console.log(props.data)
  return(
    <>
      <Row>
        <Col sm={'hidden'}>
          { props.data && props.data.sidebar.map((data, i) => {
              switch (data.component_id) {
                case 'accordion':
                  return <Row className="mb-2" key={i}><Accordion data={data}/></Row>
                case 'card':
                  return <Row className="mb-2" key={i}><Card data={data}/></Row>
                case 'image':
                  return <Row className="mb-2" key={i}><Image data={data} fluid/></Row>
                case 'list':
                  return <Row className="mb-2" key={i}><List data={data}/></Row>
                default:
                  return <div key={i}></div>
              }
            })
          }
        </Col>
      </Row>
    </>
  )
}

export default Layout_Sidebar;
