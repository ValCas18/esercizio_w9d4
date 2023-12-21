import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import fantasy from "../data/fantasy.json";
import { Badge, Col, Container, Row } from "react-bootstrap";

const MyCard = (props) => (
	<Container>
		<h3 className="mb-3">Genere: {props.genere}</h3>
		<Row xs={1} md={4} className="g-4">
			{fantasy.map((book) => (
				<Col key={book.asin}>
					<Card className="h-100">
						<Card.Img variant="top" src={book.img} className="image" />
						<Card.Body className="d-flex flex-column justify-content-end align-items-center">
							<Card.Title>{book.title}</Card.Title>
							<Card.Text>
								{book.category.toUpperCase()} - <Badge className="bg-success"> {book.price} €</Badge>
							</Card.Text>
							<Button variant="primary">Buy!</Button>
						</Card.Body>
					</Card>
				</Col>
			))}
		</Row>
	</Container>
);

export default MyCard;
