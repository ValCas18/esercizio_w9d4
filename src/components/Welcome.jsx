import { useState } from "react";
import Alert from "react-bootstrap/Alert";
import Button from "react-bootstrap/Button";

function MyAlert() {
	const [show, setShow] = useState(true);

	if (show) {
		return (
			<Alert variant="primary" onClose={() => setShow(false)} dismissible className="text-center">
				<Alert.Heading>Welcome to our Shop!</Alert.Heading>
				<p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo non ad dolores autem dicta reiciendis?</p>
			</Alert>
		);
	}
	return <Button onClick={() => setShow(true)}>Show Alert</Button>;
}

export default MyAlert;
