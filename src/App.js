import React from 'react';
import './App.css';
const quotes = require('./quotes.json');

class App extends React.Component {
  constructor(props) {
    super(props);
    const quote = this.randomQuote()
    this.state = {
      quote: quote.quote,
      author: quote.author
    }
    this.randomQuote = this.randomQuote.bind(this);
    this.handleClick = this.handleClick.bind(this);
  }
  
  randomQuote() {
    const quote = quotes[Math.floor(Math.random() * quotes.length)]
    return {
      quote: quote.Quote,
      author: quote.Author
    }
  }

  handleClick() {
    const quote = this.randomQuote();
    this.setState({
      quote: quote.quote,
      author: quote.author
    });
  }

  render() {
    return (
      <body className='body'>
        <div id='quote-box' className='quote-box'>
          <p id='text'>"{this.state.quote}"</p>
          <p id='author'>-{this.state.author}</p>
          <button id='new-quote' onClick={this.handleClick}>New Quote</button>
          <a id='tweet-quote' href='https://www.twitter.com/intent/tweet' target='_blank'>Tweet what must be twote</a>
        </div>
      </body>
    )
  }
}

export default App;
