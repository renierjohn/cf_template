import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import Alert from './Component_Alert';
import Accordion from './Component_Accordion';
import Breadcrumb from './Component_Breadcrumb';
import Card from './Component_Card';
import Carousel from './Component_Carousel';
import Image from './Component_Image';
import Table from './Component_Table';

import TabGroup from './Group_Tab';
import ListGroup from './Group_List';

function Layout_Content(data) {
  const card_data = [
    {
      'title': 'Card Title A',
      'body': `Some quick example text to build on the card title and make up the bulk of the card's content.`,
      'image': 'https://www.etatvasoft.com/insights/wp-content/uploads/2017/02/b-thumb-img9.jpg',
      'link': '/test',
      'btn_name': 'Learn More'
    },
    {
      'title': 'Card Title B',
      'body': `Some quick example text to bulk of the card's content.`,
      'image': 'https://www.etatvasoft.com/insights/wp-content/uploads/2017/02/b-thumb-img9.jpg',
      'link': '/testb',
      'btn_name': 'Learn More'
    },
    {
      'title': 'Card Title C',
      'body': `Some quick ard title and make up the bulk of the card's content.`,
      'image': 'https://www.etatvasoft.com/insights/wp-content/uploads/2017/02/b-thumb-img9.jpg',
      'link': '/testc',
      'btn_name': 'Learn More'
    },
    {
      'title': 'Card Title D',
      'body': `Some quick ard title and make up the bulk of the card's content.`,
      'image': 'https://www.etatvasoft.com/insights/wp-content/uploads/2017/02/b-thumb-img9.jpg',
      'link': '/testD',
      'btn_name': 'Learn More'
    }
  ]

  const image_list = [
    {
      'src': 'https://www.etatvasoft.com/insights/wp-content/uploads/2017/02/b-thumb-img9.jpg',
      'link': '/test'
    },
    {
      'src': 'https://www.etatvasoft.com/insights/wp-content/uploads/2017/02/b-thumb-img9.jpg',
      'link': ''
    },
    {
      'src': 'https://www.etatvasoft.com/insights/wp-content/uploads/2017/02/b-thumb-img9.jpg',
      'link': ''
    },
    {
      'src': 'https://www.etatvasoft.com/insights/wp-content/uploads/2017/02/b-thumb-img9.jpg',
      'link': ''
    }
  ]


  return(
    <>
      {/* ALert */}
      <Row className="mb-2">
        <Alert/>
      </Row>

      {/* BreadCrumb */}
      <Row className="mb-4">
        <Breadcrumb/>
      </Row>

      {/* Banner */}
      <Row className="mb-3">
        <Carousel/>
      </Row>

      {/* Main Body */}
      <Row className="mb-4">
        <Col md={8} xs={12}>

          {/* Tab */}
          <Row className="mb-2">
            <h2>Tab Sample</h2>
            <TabGroup/>
          </Row>

          {/* Accordion */}
          <Row className="mb-2">
            <h2>Accordion Sample</h2>
            <Accordion />
          </Row>

          {/* Card List */}
          <Row className="mb-2">
            <ListGroup
              title='Card Sample'
              item={ card_data.map((data, i) => {return <Card key={i} data={data}/>}) }
            />
          </Row>

          {/* Image List */}
          <Row className="mb-2">
            <ListGroup
              title='Image List Sample'
              item={ image_list.map((data, i) => {return <Image key={i} src={data.src} link={data.link}/>}) }
            />
          </Row>

          {/* Table */}
          <Row className="mb-2">
            <h2>Table Sample</h2>
            <Table/>
          </Row>

        </Col>

        {/* Sidebar */}
        <Col md={4} xs={12} className='d-none d-sm-block'>
          { data.children }
        </Col>
      </Row>
    </>
  )
}

export default Layout_Content;
