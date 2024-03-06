import { useState, useEffect } from 'react'

import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
// import Image from 'react-bootstrap/Image';

import Alert from './Component_Alert';
import Accordion from './Component_Accordion';
import Breadcrumb from './Component_Breadcrumb';
import Card from './Component_Card';
import Carousel from './Component_Carousel';
import Image from './Component_Image';
import List from './Component_List';
import Table from './Component_Table';

import TabGroup from './Group_Tab';
import ListGroup from './Group_List';

function Layout_Content(props) {
  return(
    <>
      { props.data && props.data.main.map((data, i) => {
          switch (data.component_id) {
            case 'alert':
              return <Row className="mb-2" key={i}><Alert data={data}/></Row>
            case 'breadcrumb':
              return <Row className="mb-4" key={i}><Breadcrumb data={data}/></Row>
            case 'carousel':
              return <Row className="mb-4" key={i}><Carousel data={data}/></Row>
            default:
              return <div key={i}></div>
          }
        })
      }

      <Row>
        {/* Main */}
        <Col md={props.data && props.data.sidebar_flag == '1' && props.data.sidebar.length > 0 ? 8 : 12 } xs={12}>
          {
            props.data && props.data.main.map((data, i) => {
              switch (data.component_id) {
                case 'image':
                  return <Row className="mb-2" key={i}><Image data={data} fluid/></Row>
                case 'accordion':
                  return <Row className="mb-2" key={i}><Accordion data={data}/></Row>
                case 'list':
                  return <Row className="mb-2" key={i}><List data={data}/></Row>
                case 'group_list':
                  return <Row className="mb-2" key={i}><ListGroup data={data}/></Row>
                default:
                  return <div key={i}></div>
              }
            })
          }
        </Col>

        {/* Sidebar */}
        <Col md={props.data && props.data.sidebar_flag && props.data.sidebar.length > 0 ? 4 : 12 } xs={12}>
          { props.data && props.data.sidebar_flag == '1' && props.children }
        </Col>

      </Row>
    </>
  )
}

export default Layout_Content;
