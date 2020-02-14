import React, { Component } from 'react';
// import logo from './logo.svg';
import './App.css';
import Comment from './components/Comment';
import List from './components/List';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: ''
      // stat is supposed to be used to store lists and arrays.play around with it and see what happens.
    }

    this.items = [
      { value: 'some stuff', id: 0 },
      { value: 'covalence is extremely hard', id: 1 },
      { value: 'But at least I am trying', id: 2 },
    ];
  }

  handleInputChange = (value) => {
    this.setState({ name: value })
  }

  render() {
    return (
      <div>
        <h1>Welcome to React</h1>
        <input
          placeholder="What's your name?"
          value={this.state.name}
          onChange={(event) => this.handleInputChange(event.target.value)} />
        <List items={this.items} />
        <Comment
          author={{ name: this.state.name, avatarUrl: 'https://horseman.blob.core.windows.net/uploads/3-004280803626208751-screen.jpg' }}
          text='Hi, thanks for the stars in the sky. We enjoy long walks in the dark and gazing at the twilight.'
        />
      </div>
    );

  }
}

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/Aptbfgbfp.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

export default App;
