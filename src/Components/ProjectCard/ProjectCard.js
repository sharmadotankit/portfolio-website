import {Card,Button,Modal} from 'react-bootstrap';
import gitHubLogo from '../../img/github.png';
import {useState} from 'react';

const ProjectCard = (props)=>{
  const {image,title,text,deployed,deployLink,githubLink,techStack,screenshots} = props;

  const screenshotsComponent = screenshots.map((ss,i)=>{
    return (
              <a href={ss} target="_blank">
                <img src={ss} style={{width:'45%',height:'230px',borderRadius:5,border:'1px solid black',margin:'10px'}} key={i} />
              </a>
           );
  })

  const techStackComponent = techStack.map((tech,i)=>{
    return <Button key={i} variant="outline-danger"  size="sm" disabled className='m-1' style={{fontSize:'12px',}}>{tech}</Button>;
  });

  const [show, setShow] = useState(false);

  return (
    <div style={{display:'inline-block'}}>
      <Card className="animate__animated animate__pulse animate__repeat" style={{ maxWidth:'19rem',margin:10,backgroundColor:'#21325E',boxShadow: "4px 10px 4px #9E9E9E", textAlign: 'left'}} >
        <Card.Img style={{ height: '12rem'}} variant="top"  src={image} />
        <Card.Body>
          <Card.Title style={{color: '#f8f9fa',textDecoration:'underline',marginBottom:'20px'}}>{title}</Card.Title>
          <Button variant="outline-light" onClick={() => setShow(true)}>Show Details</Button>
        </Card.Body>
      </Card>

      <Modal
        show={show}
        onHide={() => setShow(false)}
        dialogClassName="modal-100w"
        aria-labelledby="example-custom-modal-styling-title"
        size="lg"
      >
      <div style={{backgroundColor: '#FFFBE7',borderRadius:'10px'}}>
        <Modal.Header closeButton>
          <Modal.Title id="example-custom-modal-styling-title">
          {title}
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <p>
          {text}
          </p>

          <Card.Text>
          Technology Stack :
          {techStackComponent}
          </Card.Text>

          <a href={githubLink}>
          <img  alt="github Button" style={{border:"1px solid black", margin : 10,borderRadius:5,backgroundColor:'white'}} src={gitHubLogo} height="40"/>
          </a>

          <a href={deployLink}>
          {(deployed?<Button variant="outline-dark">Go to Site</Button>:null)}
          </a>

          <div>
            <h3>Screenshots :</h3>
            {screenshotsComponent}
          </div>

        </Modal.Body>
      </div>
      </Modal>



    </div>

  );
}

export default ProjectCard;
