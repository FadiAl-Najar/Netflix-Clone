import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

function Header() {
    return(
        <>
        <Navbar bg="primary" variant="light">
        <Container>
          <Navbar.Brand href="/">Netflix</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="/">Home</Nav.Link>
            <Nav.Link href="/favlist">FavList</Nav.Link>
            {/* <Nav.Link href="/trending">Trending</Nav.Link> */}
          </Nav>
        </Container>
      </Navbar>
        </>
    )
}

export default Header;