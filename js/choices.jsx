var React = require('react');

module.exports = React.createClass({
	render: function() {
		var clickHandler = this.props.onClick;
		var styles = {
			height: '100px',
			width: '300px',
			fontSize: '160%',
			fontWeight: '500',
			margin: '0 auto'
		}

		var choices = this.props.choices.map(function(choice, i) {
			return (
				<div key={i}>
					<button style={styles} className='button-xlarge pure-button'
						onClick={clickHandler.bind(null, i)}>{choice}</button>
				</div>
			);
		});

		// es6:
		// var choices = this.props.choices.map((choice, i) => <li key={i}>{choice}</li>);

		return (
			<div>
				{choices}
			</div>
		);
	}
});
