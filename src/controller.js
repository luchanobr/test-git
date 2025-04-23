class Controller {
  constructor(state, actions) {
    this.state = state;
    this.actions = actions;
  }

  render() {
    return this.state.render();
  }
}

export default Controller;
