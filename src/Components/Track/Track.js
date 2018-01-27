
import React from 'react';
import './Track.css';

class Track extends React.Component {

  renderAction(remove) {
    if (remove) {
      return '-';
    }
    return '+';
  }

  render() {
    return (
      <div className="Track">
        <div className="Track-information">
          <h3>Track name</h3>
          <p>artist | album</p>
        </div>
        <a className="Track-action">{this.renderAction(this.props.isRemoval)}</a>
      </div>
    );
  }
}

export default Track;
