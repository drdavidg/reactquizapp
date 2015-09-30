var React = require('react');

module.exports = React.createClass({
	render: function() {
		return (
			<h2>Time Left: {this.props.timeLeft}</h2>
		);
	}
});
