import Image from 'react-bootstrap/Image';

function Image_component(data) {
  return(
    <>
      <a href={data.link ? data.link : '#' }>
        <Image src={ data.src } fluid/>
      </a>
    </>
  )
}

export default Image_component;
