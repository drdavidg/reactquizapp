var React = require('react');

module.exports = React.createClass({
	render: function() {
		var imageStyle = {
			width: '30%',
			float: 'right'
		};
		return (
			<img style={imageStyle} src={"img/" + (this.props.currentQuestion + 1) + ".jpg"}></img>
		);
	}
});
