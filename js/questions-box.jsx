var React = require('react');
var ReactFire = require('reactfire');
var Firebase = require('firebase');
var FinalScore = require('./final-score');
var QuestionPrompt = require('./questionprompt');
var Timer = require('./timer');
var Score = require('./score');
var Choices = require('./choices');
var QuestionImage = require('./question-image');
var ScoreBoard = require('./score-board');
var rootURL = "https://dazzling-inferno-26.firebaseio.com/";

module.exports = React.createClass({
	getInitialState: function() {
		return {
			currentQuestion: 0, //save to FB
			answerSelections: [],  //save to FB
			timeLeft: this.props.timePerQuestion,
			score: 0, //save to FB
			quizActive: true,
			results: [], //save to FB
			loaded: false,
			items: {},
			quiz: {}
		}
	},
	getDefaultProps: function () {
		return {
			timePerQuestion: 10
		};
	},
	mixins: [ ReactFire ],
	componentWillMount: function() {
		var fb = new Firebase(rootURL + 'items/');
		this.bindAsObject(fb, 'items');

		var fbquiz = new Firebase(rootURL + 'quiz/');
		this.bindAsArray(fbquiz, 'quiz');
		fbquiz.on('value', this.handleDataLoaded);

	},
	handleDataLoaded: function() {
		this.setState({loaded: true});
		console.log("data loaded");
	},
	choiceMade: function(id) {
		var answers = this.state.answerSelections.slice();
		answers.push(id);
		var choiceResults = this.state.results.slice();
		var quizActive;
		if (this.state.quiz[0][this.state.currentQuestion].answer == id) { //correct
			var updatedScore = this.calcScore(this.state.timeLeft);
			choiceResults.push(true);
		}
		else {//incorrect choice
			updatedScore = this.state.score;
			choiceResults.push(false);
		}
		if ((this.state.quiz[0][this.state.currentQuestion].length - 1) <= this.state.currentQuestion) {
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
			timeLeft: this.state.timeLeft - 1
		}
		this.setState(newTimerState);
	},
	componentDidMount: function() {
		this.timer = setInterval(this.tick, 1000);
		// console.log(this.firebaseRefs.items);
		// this.firebaseRefs.items.push(this.state);
		//  console.log("push quiz array once");
		//  this.firebaseRefs.quiz.push(this.props.quiz);

	},
	componentDidUpdate: function() {
		if (this.state.timeLeft < 0) { //check if time expired
			this.choiceMade(false);
		}
	//	this.firebaseRefs.items.push(this.state);
	},
	render: function() {
	if (this.state.loaded) {
		var question = this.state.quiz[0][this.state.currentQuestion];
	}
		return (
			<div className="questionsbox">
				{(this.state.quizActive && this.state.loaded) &&
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
