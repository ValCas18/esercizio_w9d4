import { Component } from "react";

class CommentsArea extends Component {
  state = {
    
  }

  fetchComments = async (elementId) => {
    try{
      const response = await fetch("https://striveschool-api.herokuapp.com/api/comments/" + elementId, {
        headers: {
        "Authorization": "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NTcxZDc2ZjBkOGEyMDAwMThhNDhhNjAiLCJpYXQiOjE3MDMxNzE3NTYsImV4cCI6MTcwNDM4MTM1Nn0.Py9CbjcMQhz4iiWhcmminLi8La7jOYD6HZrk2tyxdEo"
        }
        });
  }
    catch (err) {
    console.log(err);
  }

	render() {
		return <>
    
    </>;
	}
}

export default CommentsArea;
