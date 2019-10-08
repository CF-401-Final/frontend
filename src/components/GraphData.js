import React from 'react';

export default class GraphData extends React.Component {
    constructor(props) {
        super(props);
    }
    //expecting an array from the data, currently an object. Find a way to convert to array via frontend.
    render() {
        return (
            <div>
                <p>total Connected: {this.props.data.totalConnections}</p>
                <p>zeroCount: {this.props.data.zeroCount}//
                    oneCount: {this.props.data.oneCount}//
                    twoCount: {this.props.data.twoCount}//
                    threeCount: {this.props.data.threeCount}//
                    fourCount {this.props.data.fourCount}//
                    fiveCount: {this.props.data.fiveCount}</p>
            </div>
        );
    }
}