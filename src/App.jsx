import Header from './components/Header'
import Footer from './components/Footer'
import Content from './components/Content'
import Sidebar from './components/Sidebar'

import Container from 'react-bootstrap/Container';

import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return(
    <>
      <Header/>
      <Container>
        <Content>
          <Sidebar />
        </Content>
      </Container>
      <Footer />
    </>
  )
}

export default App;
