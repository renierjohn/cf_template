import Breadcrumb from 'react-bootstrap/Breadcrumb';

function Component_Breadcrumb(data) {
  return (
    <>
      <Breadcrumb>
      {
        data.data.field_ws_multi_link.map((link, i) => {
          return <Breadcrumb.Item href={link.url} key={i}>{link.title}</Breadcrumb.Item>
        })
      }
      </Breadcrumb>
    </>
  );
}

export default Component_Breadcrumb;
