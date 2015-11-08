'use strict';

var React = require('react');
var ReactDOM = require('react-dom');
var Router = require('react-router');
var Route = require('react-router').Route;
var DefaultRoute = require('react-router').DefaultRoute;
var Root = require('./components/Root.jsx');
var Index = require('./components/Index.jsx');

let routes = (
  <Route handler={Root} path='/'>
    <DefaultRoute handler={Index} />
  </Route>
);

Router.run(routes, function (Handler) {
  ReactDOM.render(<Handler/>, document.getElementById('app'));
});
