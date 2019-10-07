import React from 'react';



export default class GraphData extends React.Component {
  constructor(props) {
      super(props);
  }

  render() {
      return (
          <div>
      <h1>total Connect {this.props.data.totalConnections}</h1>
      <h1>zeroCount {this.props.data.zeroCount}</h1>
      <h1>oneCount {this.props.data.oneCount}</h1>
      <h1>twoCount {this.props.data.twoCount}</h1>
      <h1>threeCount {this.props.data.threeCount}</h1>
      <h1>fourCount {this.props.data.fourCount}</h1>
      <h1>fiveCount {this.props.data.fiveCount}</h1>
      </div>
      );
  }
}