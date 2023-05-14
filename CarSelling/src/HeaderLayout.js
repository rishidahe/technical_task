
import {Outlet,Link} from "react-router-dom";
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
export function Header(){
    return(
        <div>
            <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
          <Container>
        
       
        <Navbar.Brand href="/home">V-Configurator</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
        <Nav className="me-auto">
            <Nav.Link href="/Home">Home</Nav.Link> 
             <Nav.Link href="/SegmentPage">SegmentPage</Nav.Link>
            {/*<Nav.Link href="/DefaultConfPage">DefaultConfigurationPage</Nav.Link>
             <Nav.Link href="/Registration">Registration</Nav.Link>
             <Nav.Link href="/StandardPage">StandardPage</Nav.Link>  */}
            {/*// <Nav.Link href="/ModelGet">ListModel</Nav.Link>  */} 
      </Nav>
    
      </Navbar.Collapse>
      </Container>
      </Navbar>
      <Outlet />
        </div>
    );
}