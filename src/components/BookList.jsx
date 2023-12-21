import { Col, Container, Row } from "react-bootstrap";
import SingleBook from "./SingleBook";

const BookList = (props) => (
	<Container>
		<h3 className="mb-3 mt-5">Genere: {props.genere}</h3>
		<Row xs={1} md={4} className="g-4">
			{props.booksArray.map((book) => (
				<Col key={book.asin}>
					<SingleBook img={book.img} title={book.title} category={book.category} price={book.price} />
				</Col>
			))}
		</Row>
	</Container>
);

export default BookList;
