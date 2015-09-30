var React = require('react');
var ReactFireMixin = require('reactfire');
var FinalScore = require('./final-score');
var QuestionPrompt = require('./questionprompt');
var Timer = require('./timer');
var Score = require('./score');
var Choices = require('./choices');
var QuestionImage = require('./question-image');
var ScoreBoard = require('./score-board');


module.exports = React.createClass({
	getInitialState: function() {
		return {
			currentQuestion: 0,
			answerSelections: [],
			timeLeft: this.props.timePerQuestion,
			score: 0,
			quizActive: true,
			results: []
		}
	},
	getDefaultProps: function () {
		return {
			timePerQuestion: 10
		};
	},
	mixins: [ ReactFireMixin ],
	componentWillMount: function() {
		this.bindAsObject(new Firebase(myFirebaseRef + 'items/'), 'items');
	},
	choiceMade: function(id) {
		var answers = this.state.answerSelections.slice();
		answers.push(id);
		var choiceResults = this.state.results.slice();


		if (quiz[this.state.currentQuestion].answer == id) { //correct
			var updatedScore = this.calcScore(this.state.timeLeft);
			choiceResults.push(true);
		}
		else {//incorrect choice
			updatedScore = this.state.score;
			choiceResults.push(false);
		}


		if ((quiz.length - 1) <= this.state.currentQuestion) {
			clearInterval(this.timer);
			quizActive = false;
		}
		else {
			quizActive = true;
		}

		var newState = {
			currentQuestion: this.state.currentQuestion + 1,
			answerSelections: answers,
			timeLeft: this.props.timePerQuestion,
			score: updatedScore,
			quizActive: quizActive,
			results: choiceResults
		};
		this.setState(newState);

	},
	calcScore: function(timeLeft) {
		var newScore = this.state.score + 10;
		if (this.state.timeLeft > 5) {
			newScore += 2;
		}
		return newScore;
	},
	tick: function() {
		var newTimerState = {
			currentQuestion: this.state.currentQuestion,
			answerSelections: this.state.answerSelections,
			timeLeft: this.state.timeLeft - 1,
			score: this.state.score,
			quizActive: true,
			results: this.state.results
		}
		this.setState(newTimerState);
	},
	componentDidMount: function() {

		this.timer = setInterval(this.tick, 1000);
	},
	componentDidUpdate: function() {
		if (this.state.timeLeft < 0) { //check if time expired
			this.choiceMade(false);
		}
	},
	render: function() {
		console.log(this.state);
		var question = this.props.quiz[this.state.currentQuestion];
		return (
			<div className="questionsbox">
				{this.state.quizActive &&
					<div>
						<QuestionPrompt question={question.prompt} />
						<Choices choices={question.choices} onClick={this.choiceMade} />
						<Timer timeLeft={this.state.timeLeft} />
						<Score score={this.state.score} />
						<QuestionImage currentQuestion={this.state.currentQuestion} />
					</div>
					|| <FinalScore score={this.state.score} />
				}
				<ScoreBoard results={this.state.results} />
			</div>
		);
	}
});
