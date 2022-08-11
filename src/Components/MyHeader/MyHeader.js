import dp from '../../img/dp.png';
import {Container, Row, Col} from 'react-bootstrap';
import './MyHeader.css';

const MyHeader  = () =>{
	return(
		<Container fluid className="p-0 m-0">
			<Row style={{
			backgroundColor: '#FFFBE7'}}>
				<Col md={6} className="left-bg">
					<div>
							<img id="dp" src={dp} alt="DP"/>
					</div>
				</Col>

				<Col md={6}>
					<div className='right-wrapper'>
						<h2 className='intro'> Namaste , I am </h2>
						<h1 className='name'>Ankit Sharma</h1>
						<h4>& I am a</h4>
						<div className='skill-title'>
							<div  className='skill-title-wrapper'>
								 <div className='skill-title-item'>Web Developer</div>
								 <div className='skill-title-item'>Java Developer</div>
								 <div className='skill-title-item'>Blockchain Noob</div>
								 <div className='skill-title-item'>Learner</div>
							</div>
						</div>
					</div>
				</Col>
			</Row>
		</Container>
		);
}

export default MyHeader;
