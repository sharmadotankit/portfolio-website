import './App.css';
import Navbar from './Components/NavigationBar/NavigationBar';
import MyHeader from './Components/MyHeader/MyHeader';
import About from './Components/About/About';
import Portfolio from './Components/Portfolio/Portfolio';
import Footer from './Components/Footer/Footer';
import {Container, Row, Col} from 'react-bootstrap';
import {useRef} from 'react';

const handleScroll = (elementRef) =>{
  console.log(elementRef);
  console.log("I came here")
    window.scrollTo({
      top:elementRef.current.offsetTop,
      behaviour:'smooth'
    })
}


function App() {

  const navBar = useRef(null);
  const myHeader = useRef(null);
  const about = useRef(null);
  const portfolio = useRef(null);
  const contactMe = useRef(null);

  return (
    <div className="App">
        <Container fluid className="p-0 m-0 ">
          <Row className="sticky-nav" >
            <Col>
              <Navbar handleScroll={handleScroll} navBar={navBar} myHeader={myHeader} about={about} portfolio={portfolio} contactMe={contactMe}/>
            </Col>
          </Row>

          <Row ref={myHeader}>
              <MyHeader />
          </Row>
          <Row  ref={about}>
            <About/>
          </Row>

          <Row  ref={portfolio}>
            <Portfolio/>
          </Row>


          <Row>
            <Footer/>
          </Row>

        </Container>
    </div>
  );
}

export default App;
