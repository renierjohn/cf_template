import Alert from 'react-bootstrap/Alert';

function Component_Alert(data) {
  return(
    <>
      <Alert variant={
        data.data.field_ws_serverity.length > 0 ?
        data.data.field_ws_serverity : 'success'}
      >
        <Alert.Heading>{data.data.field_ws_title}</Alert.Heading>
        <hr />
        <p className="mb-0">{data.data.field_ws_body}</p>
      </Alert>
    </>
  )
}

export default Component_Alert;
