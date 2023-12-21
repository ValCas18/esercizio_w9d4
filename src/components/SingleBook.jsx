import { Component } from "react";
import { Badge } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";

class SingleBook extends Component {
	state = {
		selected: false,
	};
	render() {
		return (
			<Card className="h-100" style={{ borderWidth: "2px", borderColor: this.state.selected ? "red" : "grey" }}>
				<Card.Img
					variant="top"
					src={this.props.img}
					className="image"
					onClick={() => this.setState({ selected: !this.state.selected })}
				/>
				<Card.Body className="d-flex flex-column justify-content-end align-items-center">
					<Card.Title>{this.props.title}</Card.Title>
					<Card.Text>
						{this.props.category.toUpperCase()} - <Badge className="bg-success"> {this.props.price} €</Badge> €
					</Card.Text>
					<Button variant="primary">Buy!</Button>
				</Card.Body>
			</Card>
		);
	}
}

export default SingleBook;
