import React, {Component} from 'react';
import PropTypes from 'prop-types';
import StartComponent from './StartComponent';

class MainComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isStartOpen: true
    };
  }

  startGame = () => {
    console.log('--- ', 'start game');
    this.closeAllView();
    // this.setState({isStartOpen: false});
  };

  render() {
    return (
      <div>
        {this.getBody()}
      </div>
    );
  }

  closeAllView() {
    this.setState({isStartOpen: false});
  }

  getBody() {
    if (this.state.isStartOpen) {
      return (
        <StartComponent
          startGame = {this.startGame}
        />
      );
    }

    return (
      <div>all close</div>
    );
  }
}

MainComponent.propTypes = {
  article: PropTypes.object.isRequired
};

export default MainComponent;
