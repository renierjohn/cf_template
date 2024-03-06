import { useState, useEffect } from 'react'

import Header from './components/Layout_Header'
import Footer from './components/Layout_Footer'
import Content from './components/Layout_Content'
import Sidebar from './components/Layout_Sidebar'

import Fetch from './functions/Fetch'
import DummyFetchData from './functions/DummyFetchData'

import Container from 'react-bootstrap/Container';

import 'bootstrap/dist/css/bootstrap.min.css';

function App() {

  const [data, setData] = useState();

  // Fetch data
  const uuid = `d63b2f40-76ba-41f7-867f-295d33311f8c`;
  const {restData, restLoading} = Fetch(`/${uuid}`);

  useEffect(() => {
    if (!restLoading) {
      setData(restData)
console.log(restData)
    }
    return(() => {})
  }, [restLoading]);

  return(
    <>
      <Header data={data}/>
      <Container>
        <Content data={data}>
          <Sidebar data={data}/>
        </Content>
      </Container>
      <Footer data={data}/>
    </>
  )
}

export default App;
