import React from 'react';

export default class Instructor extends React.Component {
  render() {
    return (
      <div>
        <header>Hands of Five</header>
        <h1>Instructor View</h1>
        <form>
          <label>Topic:
        <input type="text"></input>
          </label>
          <button onClick={this.handle}>Post</button>
        </form>

        <h3>Current Question: Lorem Epsum</h3>

      </div>
    )
  }
}