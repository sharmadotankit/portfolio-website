import {Container,Navbar,Nav} from 'react-bootstrap';
import logoLight from '../../img/logo-light.png';
import './NavigationBar.css';
import Resume from '../Resume/Resume.pdf';


const NavigationBar = ({handleScroll,myHeader,about,portfolio,contactMe}) =>{
	return(
			<Navbar collapseOnSelect expand="lg" variant="dark">
				<Container>
					  <Navbar.Brand className="animate__animated animate__bounce animate__repeat"><img src={logoLight} alt="logo" height={30}/></Navbar.Brand>
					  <Navbar.Toggle aria-controls="responsive-navbar-nav"/>
					  <Navbar.Collapse id="responsive-navbar-nav">
					    <Nav className="me-auto">
					    </Nav>
					    <Nav>
								<Nav.Link href="#Home" onClick={() => {handleScroll(myHeader)}}>Home</Nav.Link>
								<Nav.Link href="#About"  onClick={() => {handleScroll(about)}}>About</Nav.Link>
					      {/* <Nav.Link href="#Experience"  onClick={handleScroll}>Experience</Nav.Link> */}
					      <Nav.Link href="#Projects"   onClick={() => {handleScroll(portfolio)}}>Projects</Nav.Link>
								<Nav.Link href={Resume} download="Resume-Ankit_Sharma.pdf">Resume</Nav.Link>
					    </Nav>
					  </Navbar.Collapse>
					</Container>
			</Navbar>
		);
}


export default NavigationBar;
