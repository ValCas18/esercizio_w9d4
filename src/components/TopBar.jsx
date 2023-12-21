import { Container, Nav, Navbar } from "react-bootstrap";

const MyTopBar = () => (
	<Navbar bg="warning" data-bs-theme="dark" className="mb-3">
		<Container>
			<Navbar.Brand href="#">My First NavBar</Navbar.Brand>
			<Nav className="me-auto">
				<Nav.Link href="#">Home</Nav.Link>
				<Nav.Link href="#">About</Nav.Link>
				<Nav.Link href="#">Browse</Nav.Link>
			</Nav>
		</Container>
	</Navbar>
);

export default MyTopBar;
