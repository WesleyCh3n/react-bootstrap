import { useState, useEffect } from 'react';
import { Container,
         Nav, Navbar, NavDropdown,
         Card, Button, Tab, Tabs, ProgressBar } from 'react-bootstrap'


function App(){
  return (
    <div>
      <MyNav />
      <MyCard />
      <MyTab />
    </div>
  );
}

const MyNav = () => {
  return(
    <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
      <Container>
        <Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="#features">Features</Nav.Link>
            <Nav.Link href="#pricing">Pricing</Nav.Link>
            <NavDropdown title="Dropdown" id="collasible-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
            </NavDropdown>
          </Nav>
          <Nav>
            <Nav.Link href="#deets">Login</Nav.Link>
            <Nav.Link eventKey={2} href="#memes">
              Register
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

const MyCard = () => {
  return(
    <Container className='py-3'>
      <Card>
        <Card.Header>
          <Nav variant="pills" defaultActiveKey="#first">
            <Nav.Item>
              <Nav.Link href="#first">Active</Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link href="#link">Link</Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link href="#disabled" disabled>
                Disabled
              </Nav.Link>
            </Nav.Item>
          </Nav>
        </Card.Header>
        <Card.Body>
          <Card.Title>Special title treatment</Card.Title>
          <Card.Text>
            With supporting text below as a natural lead-in to additional content.
          </Card.Text>
          <Button variant="primary">Go somewhere</Button>
        </Card.Body>
      </Card>
    </Container>
  )
}

const MyTab = () => {
  return(
    <Container>
    <Tabs defaultActiveKey="home" id="uncontrolled-tab-example" className="mb-3">
      <Tab eventKey="home" title="Home">
    <HomeTab />
      </Tab>
      <Tab eventKey="profile" title="Profile">
        Another content
      </Tab>
      <Tab eventKey="contact" title="Contact">
        The other content
      </Tab>
    </Tabs>
    </Container>
  );
}

const HomeTab = () => {
  const [progress, setProgress] = useState(0);

  // useEffect(() => {
    // if (progress == 100) {
      // return
    // }
    // setInterval(() => {
      // setProgress(progress => progress + 1);
    // }, 1000)
  // })

  return(
    <div>
      <Card className="text-center">
        <Card.Body>
          <Card.Title>Card Title</Card.Title>
          <Card.Subtitle className="mb-2 text-muted">Card Subtitle</Card.Subtitle>
          <Card.Text>
            Some quick example text to build on the card title and make up the bulk of
            the card's content.
            <ProgressBar now={progress} label={`${progress}%`} />
          </Card.Text>
          <Button variant="outline-primary" onClick={()=>console.log("test")}>Start Pulling</Button>
        </Card.Body>
      </Card>
    </div>
  )
}

export default App;
