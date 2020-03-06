import React, { Component } from 'react';

import Posts from './Posts';
import Authenitication from './Authentication';

class Application extends Component {
  
  render() {

    return (
      <main className="Application">
        <h1>Think Piece</h1>
        <Authenitication />
        <Posts />
      </main>
    );
  }
}

export default Application;
