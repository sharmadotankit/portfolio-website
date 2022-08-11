import {Container, Row, Col,Card,Button} from 'react-bootstrap';
import './About.css';

const About  = () =>{
	return(
			<Container style={{backgroundColor:'#21325E',paddingBottom:20}} >
				<Row className ='about-container'>
					<Col>
						<div>
							<h3 style={{color:'#ffffff',textDecoration:'underline',margin:20,fontFamily:'Castoro'}}>About Me</h3>
						</div>
					</Col>
					<Row>
            <Col sm>
							<Card style={{ minHeight:360}} className="my-1">
								<Card.Title style={{textDecoration:'underline'}}>Introduction</Card.Title>
								<Card.Text className="mb-2 text-muted">
									I am an aspiring developer who loves to code and develop things. I have made multiple project based on MERN technology stack.
								</Card.Text>
								<Card.Text className="mb-2 text-muted">
									I am looking for an opportunity where I can hone my skills and use my knowledge to contribute to the growth of the organzation.
								</Card.Text>
								<Card.Title style={{textDecoration:'underline'}}>Experience & Academics</Card.Title>
								<Card.Text className="mb-1 text-muted">
									I have 1.5+ years of experience in IT industry. I have worked on 3rd Integration system which made API call to ERP to perform business functionality. 
								</Card.Text>

							</Card>
						</Col>

						<Col sm>
							<Card style={{ minHeight:360}} className="my-1 ">
								<Card.Title style={{textDecoration:'underline'}}>Skills</Card.Title>
								<Card.Text className="mb-2 text-muted">
								I have done development in the below mentioned technology :
								</Card.Text>

								<Card.Text className="mb-2 text-muted">
									<Button variant="outline-success" size="sm" disabled className='m-1'>Reactjs</Button>
									<Button variant="outline-success" size="sm" disabled className='m-1'>Nodejs</Button>
									<Button variant="outline-success" size="sm" disabled className='m-1'>Expressjs</Button>
									<Button variant="outline-success" size="sm" disabled className='m-1'>Bootstrap</Button>
									<Button variant="outline-success" size="sm" disabled className='m-1'>Nextjs</Button>
									<Button variant="outline-success" size="sm" disabled className='m-1'>Ethereum</Button>
									<Button variant="outline-success" size="sm" disabled className='m-1'>Smart Contracts</Button>
									<Button variant="outline-success" size="sm" disabled className='m-1'>PostgreSQL</Button>
									<Button variant="outline-success" size="sm" disabled className='m-1'>Oracle DB</Button>
								</Card.Text>

								<Card.Text className="mb-2 text-muted">
								I am comfortable with the mentioned languages:
								</Card.Text>

								<Card.Text className="mb-2 text-muted">
									<Button variant="outline-primary" size="sm" disabled className='m-1'>JavaScript</Button>
									<Button variant="outline-primary" size="sm" disabled className='m-1'>Java</Button>
									<Button variant="outline-primary" size="sm" disabled className='m-1'>Solidity</Button>
									<Button variant="outline-primary" size="sm" disabled className='m-1'>SQL</Button>
									<Button variant="outline-primary" size="sm" disabled className='m-1'>HTML5/CSS3</Button>
									<Button variant="outline-primary" size="sm" disabled className='m-1'>C/C++</Button>
								</Card.Text>

							</Card>
						</Col>
          </Row>
				</Row>
			</Container>
		);
}

export default About;
