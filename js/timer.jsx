var React = require('react');

var Timer = React.createClass({
	render: function() {
		return (
			<h2>Time Left: {this.props.timeLeft}</h2>
		);
	}
});

module.exports = Timer;
