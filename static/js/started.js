'use strict';

const e = React.createElement;

class TestReact extends React.Component {
  constructor(props) {
    super(props);
    this.state = { liked: false };
  }

  render() {
    if (this.state.liked) {
      return 'You clicked this.';
    }

    return e(
      'button',
      { onClick: () => this.setState({ liked: true }) },
      'React Button'
    );
  }
}

const domContainer = document.querySelector('#react_div');
ReactDOM.render(e(TestReact), domContainer);