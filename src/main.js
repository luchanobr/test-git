function setInitialState(state) {
  return state;
}

function setState(state, action) {
  return action.type === "increment" ? { count: state.count + 1 } : state;
}

function reducer(state, action) {
  return setState(setInitialState(state), action);
}

function fetchCount() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(42);
    }, 1000);
  });
}

function main() {
  const app = new App();
  document.body.appendChild(app.render());
}

main();
