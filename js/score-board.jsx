var React = require('react');

var ScoreBoard = React.createClass({
	render: function() {
			var answerResults = this.props.results.map(function(result, i) {
				return (
					<li key={i}>{result ? "Correct" : "Incorrect"}</li>
				);
			});

			return (
				<div>
					<h2>Scoreboard Results</h2>
					<ol>
						{answerResults}
					</ol>
				</div>
			);
	}
});

module.exports = ScoreBoard;
