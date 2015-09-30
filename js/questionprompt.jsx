var React = require('react');


var QuestionPrompt = React.createClass({
	render: function() {
		return (
			<h1>{this.props.question}</h1>
		);
	}
});


module.exports = QuestionPrompt;
