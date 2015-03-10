
var React = require('react');
var classnames = require('classnames');

var NavItem = React.createClass({

  getDefaultProps: function() {
    return {
      label: false,
      inverse: false,
      flush: true,
      big: false,
      justified: false,
      block: false,
    }
  },

  render: function() {
    var linkClass = 
      classnames(
        'button', 'button-transparent',
        { block: this.props.block },
        { white: this.props.inverse },
        { py2: this.props.big },
        { 'center flex-auto': this.props.justified },
        { mr1: !this.props.flush });
    var label = this.props.label || this.props.children || false;
    return (
      <a {...this.props} className={linkClass}>
        {label} 
      </a>
    )
  }

});

module.exports = NavItem;
