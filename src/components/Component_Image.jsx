import Image from 'react-bootstrap/Image';

function Component_Image(data) {
  return(
    <>
      { data.data.field_ws_link === undefined ?
        <Image
          height="200vh"
          src={data.data.field_ws_image.url.replace('public://', 'http://d10.docksal.site/sites/default/files/')}
          alt={data.data.field_ws_image.alt} fluid/>
        :
        <a href={data.data.field_ws_link.url}>
          <Image
            height="200vh"
            src={data.data.field_ws_image.url.replace('public://', 'http://d10.docksal.site/sites/default/files/')}
            alt={data.data.field_ws_image.alt} fluid/>
        </a>
      }
    </>
  )
}

export default Component_Image;
