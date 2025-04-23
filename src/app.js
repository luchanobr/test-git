function App() {
  this.state = {
    count: 0,
  };

  this.handleClick = this.handleClick.bind(this);
}

App.prototype.handleClick = function () {
  this.setState({
    count: this.state.count + 1,
  });
};

App.prototype.render = function () {
  return (
    <div>
      <h1>Hello, world!</h1>
      <h2>Count is: {this.state.count}</h2>
      <button onClick={this.handleClick}>Increment</button>
    </div>
  );
};
