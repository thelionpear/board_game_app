import React, { Component } from 'react';
import axios from 'axios'; 
import { Button, Card, Container } from 'semantic-ui-react'


//needs to do a call to the API to get the user's games from the user_board_game table 
//if the user has no games, it needs to default to "You have no games. Add games to your library by clicking
//"Add Game""
//don't know if "Add Game" should be its own component or a conditional render. 
//I want people to be able to add multiple games at once. Search Games. And have the option to add a game
//not on the list and auto-add it to their library. Also should have a checkbox for 
//"I have played this game before" so their backlog can be easily sorted. 
//if they've clicked on Add a Game, it should no longer render in the other component

class Games extends Component {

  state = { games:[], showGames: false }
//wasn't hitting debugger in componentDidMount because I had Component capitalized. 
//then I was getting a 500 from my server because I didn't have resources :board_games in my routes.rb
//now getting 404
//this error "ActionController::RoutingError (uninitialized constant Api)" in server 
//created an api folder in my controllers folder and moved my proprietery controllers inside it
//new error: app/controllers/api/board_games_controller.rb:15: 
//syntax error, unexpected tINTEGER, expecting keyword_end
//got rid of 422 on line 15 
//new error: LoadError (Unable to autoload constant 
//Api::BoardGamesController, expected 
///Users/michellegarcia/coding_personal_projects/board_game_app/app/controllers/api/board_games_controller.rb
// to define it):
// my has_many :blank didn't have colons in board_game.rb 
//ultimately I had my board_games.js with underscores instead of camelCase 
  componentDidMount() {
//runs when the user wants to add a game from the database
//link to more info and button to add the game if it's not in their library already 
    axios.get('/api/board_games')
      .then(res => {
        this.setState({games: res.data});
      })
  }

  toggleGames = () => {
    this.setState({ showGames: !this.state.showGames })
  }

  getUserGames = () => {
//runs when component mounts and then goes to the Games_List Function
//checks if the user has games user.games? return { the list} : return {<h1>You have no games</h1>}
  }

  addGame = (userId, boardGameId) => {
    axios.post('api/user_board_games', { userId, boardGameId })
      .then(res => {
        console.log(res);
      })
  }

  gamesList = () => {
//gives each game with a link to more info
    const { games } = this.state 
    return games.map( game =>
        <Card key={game.id}>
          <Card.Content>
            <Card.Header>{game.title}</Card.Header>
            <Card.Description>Players: {game.min_players} - {game.max_players}</Card.Description>
            <Card.Description>Company: {game.company}</Card.Description>
            <Card.Description>Time Needed: {game.time_needed}</Card.Description>
          </Card.Content>
          <Card.Content extra>
              <Button basic color='green' onClick={this.addGame}>
                Add to Library
              </Button>
          </Card.Content>
        </Card> 
      )
  }

  render() {
    const { showGames } = this.state 
    return (
      <Container>
        <h1>Games</h1>
        <h3>Your Games</h3> 
        { showGames ? (
            <div>
              <Button basic onClick={this.toggleGames}>Done Adding</Button>
              <Card.Group itemsPerRow={4}>{this.gamesList()}</Card.Group> 
            </div>
        )
          : (
          <Button basic onClick={this.toggleGames}>Add a Game</Button>
        ) 
        }
      </Container>
    )
  }
}

export default Games;