import React, { Component } from 'react';
import { connect } from 'react-redux'
import axios from 'axios'; 

//needs to do a call to the API to get the user's games from the user_board_game table 
//if the user has no games, it needs to default to "You have no games. Add games to your library by clicking
//"Add Game""
//don't know if "Add Game" should be its own component or a conditional render. 
//I want people to be able to add multiple games at once. Search Games. And have the option to add a game
//not on the list and auto-add it to their library. Also should have a checkbox for 
//"I have played this game before" so their backlog can be easily sorted. 
//if they've clicked on Add a Game, it should no longer render in the other component

class Games extends Component {

  state = { games:[] }

  ComponentDidMount() {
//runs when the user wants to add a game from the database
//link to more info and button to add the game if it's not in their library already
    axios.get(`api/games`)
      .then(res => {
        const games = res.data;
        console.log(res.data); 
        this.setState({games});
      })
  }

  Get_User_Games = () => {
//runs when component mounts and then goes to the Games_List Function
//checks if the user has games user.games? return { the list} : return {<h1>You have no games</h1>}
  }

  Games_List = () => {
//gives each game with a link to more info  
  }

  render() {
    return (
      <div>
        <h1>Games</h1>
        <button>Add a Game</button> 
        <h3>Your Games</h3> 
      </div>
    )
  }
}

const mapStateToProps = state => {
  return { user: state.user };
};

export default connect(mapStateToProps)(Games);