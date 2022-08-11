import {Tab,Row,Nav,Col} from 'react-bootstrap';
import ProjectCard from '../ProjectCard/ProjectCard';
import webDevProjects from './WebDevProjects/WebDevProjects';
import web3Projects from './Web3Project/Web3Project';


const Portfolio  = () =>{
	const webDevComponent = webDevProjects.map((project,i)=>{
		return <ProjectCard
						key={i}
						image = {project.image}
						title = {project.title}
						text = {project.text}
						deployed = {project.deployed}
						deployLink={project.deployLink}
						githubLink={project.githubLink}
						techStack={project.techStack}
						screenshots={project.screenshots}
						/>
	});


	const web3Component = web3Projects.map((project,i)=>{
		return <ProjectCard
						key={i}
						image = {project.image}
						title = {project.title}
						text = {project.text}
						deployed = {project.deployed}
						deployLink={project.deployLink}
						githubLink={project.githubLink}
						techStack = {project.techStack}
						screenshots={project.screenshots}
						/>
	});




  return (
		<div style={{padding:10,backgroundColor: '#FFFBE7',paddingBottom:20}}>
				<div>
					<h3 style={{textDecoration:'underline',margin:20}}>Projects</h3>
				</div>
				<Tab.Container id="left-tabs-example" defaultActiveKey="first">
					<Row>
						<Col sm={2}>
							<Nav variant="pills" className="flex-column">
								<Nav.Item style={{cursor:'pointer'}}>
									<Nav.Link eventKey="first">Web Development</Nav.Link>
								</Nav.Item>
								<Nav.Item  style={{cursor:'pointer'}}>
									<Nav.Link  eventKey="second">BlockChain </Nav.Link>
								</Nav.Item>
							</Nav>
						</Col>
						<Col sm={10}>
							<Tab.Content>
								<Tab.Pane eventKey="first">
									{webDevComponent}
								</Tab.Pane>
								<Tab.Pane eventKey="second">
									{web3Component}
								</Tab.Pane>
							</Tab.Content>
						</Col>
					</Row>
				</Tab.Container>
		</div>

  );
}

export default Portfolio;
