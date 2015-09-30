var React = require('react');
var QuestionsBox = require('./questions-box');

var quiz = [
	{
		prompt: "What is Bran unable to do due to his injuries?",
		choices: ["Sleep","Archery","Walk","Eat"],
		answer: 2
	},
	{
		prompt: "Where is Theon Greyjoy tasked with raiding using only one ship by his father?",
		choices: ["Villages along the Stony Shore","Coastal towns of Bear Island","Ports along Blazewater Bay","Cape Kraken"],
		answer: 0
	},
	{
		prompt: "As Maester Luwin is dying, he tells Osha to take Rickon and Bran Stark to",
		choices: ["Riverrun to find their mother","the Wall to find their brother Jon","Rivverun to find Rob", "King's Landing to find Arya and Sansa","find Benjen Stark north of the Wall"],
		answer: 1
	},
	{
		prompt: "What does Arya earn after she helped the Hound in the fight with Polliver's men?",
		choices: ["Horse","Armor","Chicken","Freedom"],
		answer: 0
	},
	{
		prompt: "Who does Robb Stark send to make an alliance with Balon Greyjoy?",
		choices: ["Catelyn","Bran","Lord Umber","Theon"],
		answer: 3
	},
	{
		prompt: "Which city is Ser Loras Tyrell the heir to?",
		choices: ["Riverrun","King's Landing","Highgarden","Winterfell"],
		answer: 2
	},
	{
		prompt: "Who does Sansa beg to light a candle for her in Winterfell?",
		choices: ["Theon","Podrick","Brienne","Roose"],
		answer: 0
	},
	{
		prompt: "What is the number of Lord Commanders that have served when Jon is elected?",
		choices: ["292","731","31","997"],
		answer: 3
	},
	{
		prompt: "What does Bronn save Jaime from being killed by?",
		choices: ["Jaguar","Boar","Rats","Snake"],
		answer: 3
	},
	{
		prompt: "Who says the name of the episode in 'The Wars To Come'?",
		choices: ["Mance","Daenerys","Tyrion","Sam"],
		answer: 0
	}
];

React.render(
	<QuestionsBox quiz={quiz} />, document.getElementById('content')
	);
