import React from "react"; 
import { Button, Container } from "semantic-ui-react";
import { Link } from "react-router-dom";


const Friends = () => {
  return(
    <Container>
      <div>Friends</div>
      <Button as={ Link } to="/FriendForm" basic color="blue">Add a Friend</Button>
    </Container>
  );
};

export default Friends; 