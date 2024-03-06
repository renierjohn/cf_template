import Accordion from 'react-bootstrap/Accordion';

function Component_Accordion(data) {
  console.log(data)
  return(
    <>
      <h2>{data.data.field_ws_title}</h2>
      <Accordion defaultActiveKey="0">
        {
          data.data.field_ws_accordion_item.map((item, i) => {
            return <Accordion.Item eventKey={i} key={i}>
                <Accordion.Header>{item.field_ws_title}</Accordion.Header>
                <Accordion.Body>{item.field_ws_body}</Accordion.Body>
              </Accordion.Item>
          })
        }
      </Accordion>
    </>
  )
}

export default Component_Accordion;
