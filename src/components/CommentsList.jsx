import { Container } from "react-bootstrap";
import SingleComment from "./SingleComment";

const CommentList = (review) => (
	<>
		{review.map((singleReview) => (
			<Container key={singleReview._id}>
				<SingleComment author={singleReview.author} rate={singleReview.rate} comment={singleReview.comment} />
			</Container>
		))}
	</>
);
export default CommentList;
