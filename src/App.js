import './App.css';
import React, {Component} from "react";
import Navbar from "./navbar.js";
import Joke from "./joke.js"

class App extends Component{

    constructor(props){
      super(props);
      this.state = {
        test: false,
        itemJoke: "",
      };
    }
    componentDidMount(){
      this.randJoke();
    }

    randJoke = () => {
      fetch("http://api.icndb.com/jokes/random")
      .then(response => response.json())
        .then(json => {
            this.setState({
              test: true,
              itemJoke: json.value,
            })
        })
    }
    
    render() {
      
      
      var {test, item1} = this.state;
      if(!test){
        return <div>Loading...</div>
      }
      else{
        return (

          <div className="App">
            <Navbar randJoke={() => this.randJoke}/>
            <Joke item1={this.state.itemJoke}/>
          </div>
        );
      }
    }

}

export default App;
