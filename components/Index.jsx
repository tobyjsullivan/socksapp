'use strict';

var React = require('react');
var ConversationText = require('./ConversationText.jsx');

var Index = React.createClass({
  render: function () {
    return (
      <main>
        <ConversationText content="Welcome to Socks." />
      </main>
    );
  }
});

module.exports = Index;
