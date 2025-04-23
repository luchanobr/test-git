function createRouter() {
  return {
    render: function () {
      return <div>Hello, world!</div>;
    },
  };
}

function generateRoutes() {
  return {
    "/": createRouter,
    "/about": createRouter,
  };
}
