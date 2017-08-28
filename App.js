const React = require('react');

const { DOM } = React;
const { div, ul, li, button } = DOM;

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      isSayBye: false
    };
  }

  handleClick() {
    this.setState({
      isSayBye: !this.state.isSayBye
    });
  }

  render() {
    const content = this.state.isSayBye ? 'Bye' : 'Hello World';
    return div(null,
      div(null, content),
      button({ onClick: this.handleClick }, 'switch')
    );
  }
}

module.exports = App;
