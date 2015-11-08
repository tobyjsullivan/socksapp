'use strict';

var React = require('react');
require('./ConversationText.less');

var ConversationText = React.createClass({
  render: function() {
    return (
      <p className='convo-text'>
        {this.props.content}
      </p>
    );
  }
});

module.exports = ConversationText;
