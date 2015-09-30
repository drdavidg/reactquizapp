var React = require('react');

var FinalScore = React.createClass({
	render: function() {
		return (
			<h1>FINAL Score: {this.props.score}</h1>
		);
	}
});

module.exports = FinalScore;
