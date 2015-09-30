var React = require('react');

module.exports = React.createClass({
	render: function () {
		return (
			<h1>Current Score: {this.props.score}</h1>
		);
	}
});
