import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';

function NavbarCreation(props) {
  return (
    <Navbar bg="light" expand="lg">
      <Container>
        <Navbar.Brand href='/user'>{props.name}</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="/wishlist">WishList</Nav.Link>
            <Nav.Link href="/create">Create</Nav.Link>
            {/* <Nav.Link href="/delete">Delete</Nav.Link> */}
            <Nav.Link href="/update">Update</Nav.Link>
            <Nav.Link href="/">LogOut</Nav.Link>


            {/* <NavDropdown title="Securities" id="basic-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">All</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">Search By ID</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">Search By Name</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">Search By Date Range</NavDropdown.Item>
            </NavDropdown> */}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavbarCreation;