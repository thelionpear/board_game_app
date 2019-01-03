import React, { Component } from 'react';
import axios from 'axios'; 
import { connect } from 'react-redux';
import { Button, Card, Container, Dropdown, Grid } from 'semantic-ui-react'


//needs to do a call to the API to get the user's games from the user_board_game table 
//if the user has no games, it needs to default to "You have no games. Add games to your library by clicking
//"Add Game""
//don't know if "Add Game" should be its own component or a conditional render. 
//I want people to be able to add multiple games at once. Search Games. And have the option to add a game
//not on the list and auto-add it to their library. Also should have a checkbox for 
//"I have played this game before" so their backlog can be easily sorted. 
//if they've clicked on Add a Game, it should no longer render in the other component

class Games extends Component {

  state = { games:[], user_games: [], showGames: false, sort: "A-Z" }
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
    const userId = this.props.user.id 
    axios.get('/api/board_games')
      .then(res => {
        console.log(res.data)
        this.setState({games: res.data});
      })
    axios.get(`/api/users/${userId}/board_games`)
      .then(res => {
        console.log(res.data); 
        this.setState({user_games: res.data});
      } )
      
  }

  toggleGames = () => {
    this.setState({ showGames: !this.state.showGames })
  }

  removeGame = (id) => {
    const userId = this.props.user.id 
    axios.delete(`/api/users/${userId}/board_games/${id}`)
      .then(res => {
        console.log(res);
      })
  }

  addGame = (id) => {
    const userId = this.props.user.id 
    axios.post(`api/users/${userId}/board_games`, { userId, id })
      .then(res => {
        console.log(res);
      })
  }

  dropDownMenu = () => {
    return  ( <Dropdown text='Sort'>
              <Dropdown.Menu>
                <Dropdown.Item text='A-Z' onClick={() => this.setState({sort: "A-Z"}) }/>
                <Dropdown.Item text='Z-A' onClick={() => this.setState({sort: "Z-A"})} />
                <Dropdown.Item text='Time Needed' onClick={() =>this.setState({sort: "Time Needed"})}  />
              </Dropdown.Menu>
            </Dropdown>
    )
  }

  userLibrary = () => {
    const {user_games, sort} = this.state 
    switch(sort) {
      case 'A-Z':
        user_games.sort(function(game1, game2){
          if(game1.title < game2.title) {return -1; }
          if(game1.title > game2.title) {return 1; }
          return 0; 
        }); 
        break; 
      case 'Z-A':
      user_games.sort(function(game1, game2){
        if(game1.title > game2.title) {return -1; }
        if(game1.title < game2.title) {return 1; }
        return 0; 
      }); 
        break; 
      case 'Time Needed': 
        user_games.sort(function(game1,game2){
          return game1.time_needed-game2.time_needed 
        }) 
        break; 
      default: 
      user_games.sort(function(game1, game2){
        if(game1.title < game2.title) {return -1; }
        if(game1.title > game2.title) {return 1; }
        return 0; 
      }); 
    }
    return user_games.map( game => 
      <Card key={game.id}>
        <Card.Content>
          <Card.Header>{game.title}</Card.Header>
          <Card.Description>Players: {game.min_players} - {game.max_players}</Card.Description>
          <Card.Description>Company: {game.company}</Card.Description>
          <Card.Description>Time Needed: {game.time_needed}</Card.Description>
        </Card.Content>
        <Card.Content extra> 
              <Button basic color='red' onClick={() => this.removeGame(game.id)}>
                Remove from Library
              </Button>
          </Card.Content>
      </Card> 
    )
  }

  gamesList = () => {
//gives each game with a link to more info
    const { games, user_games } = this.state 
    return games.map( game =>
        <Card key={game.id}>
          <Card.Content>
            <Card.Header>{game.title}</Card.Header>
            <Card.Description>Players: {game.min_players} - {game.max_players}</Card.Description>
            <Card.Description>Company: {game.company}</Card.Description>
            <Card.Description>Time Needed: {game.time_needed}</Card.Description>
          </Card.Content>
          { user_games.include ? (
          <Card.Content extra>
              <Button basic color='green' onClick={() => this.addGame(game.id)}>
                Add to Library
              </Button>
          </Card.Content>
          ) 
            : (
          <Card.Content extra> 
              <Button basic color='red' onClick={() => this.removeGame(game.id)}>
                Remove from Library
              </Button>
          </Card.Content>
          )  
          }
        </Card> 
      )
  }

  render() {
    const { showGames } = this.state 
    return (
      <Container>
        <h1>Games</h1>
        <Grid>
          <Grid.Column floated="left" width={2}>
            <h3>Your Games</h3>
          </Grid.Column> 
          <Grid.Column floated="right" width={2}>
            {this.dropDownMenu()}
          </Grid.Column>
        </Grid>
        <Card.Group itemsPerRow={4}>{this.userLibrary()}</Card.Group>
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

const mapStateToProps = state => {
  return { user: state.user };
};

export default connect(mapStateToProps)(Games);