import {Container,Navbar,Nav,Button} from 'react-bootstrap';
import logoLight from '../../img/logo-light.png';

const Footer = () =>{
   return(
     <div>
       <Navbar collapseOnSelect expand="lg" variant="dark"  sticky="top">
         <Container>
            <Navbar.Brand href="#home"><img src={logoLight} alt="logo" height={30}/></Navbar.Brand>
            <Nav className="me-auto">
              <Nav.Link>Made by Ankit Sharma</Nav.Link>
            </Nav>
            <Nav>
              <Nav.Link>In case of you want to connect with me : </Nav.Link>
              <Nav.Link href="mailto:sharmaanki050499@gmail.com"><Button variant="outline-light" size="sm" className='m-1' style={{fontSize:'12px'}}>Send Mail Here</Button></Nav.Link>
            </Nav>
           </Container>
       </Navbar>
     </div>
   );
}

export default Footer;
