var React = require('react');

var Score = React.createClass({
	render: function () {
		return (
			<h1>Current Score: {this.props.score}</h1>
		);
	}
});

module.exports = Score;
