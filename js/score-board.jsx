var React = require('react');

module.exports = React.createClass({
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
