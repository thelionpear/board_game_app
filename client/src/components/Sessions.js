import React from "react"; 
import { Button, Container } from 'semantic-ui-react';

//I might not actually need this whole thing. I might 
//just go by rounds only where i can track the game
//the date, the players (through round-players table)
//and their scores on that table too so it has to
//have a slot for the player id, the game session id, and the score
//

const Sessions = () => {

  //function that grabs the user's sessions 

  //if/else function for either displaying the library or 
  //"you do not have any sessions"


  return(
    <Container>
      <div>Sessions</div>
      <Button>Add a Session</Button>
    </Container> 
  );
};

export default Sessions; 