import ListGroup from 'react-bootstrap/ListGroup';

function Component_List(data) {
  return (
    <>
      <h2>{data.data.field_ws_title}</h2>
      <ListGroup>
        {
          data.data.field_ws_list_item.map((data, i) => {
            return <ListGroup.Item key={i}>{data.field_ws_title} {data.field_ws_body}</ListGroup.Item>
          })
        }
      </ListGroup>
    </>
  );
}

export default Component_List;
