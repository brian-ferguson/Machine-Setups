import React from 'react';
import PropTypes from 'prop-types';

const SingleInput = (props) => (
	<div className="form-group">
		<label>{props.name}: </label>
		<input
			className="form-input"
			id={props.id}
			name={props.name}
			type={props.type}
			value={props.content}
			onChange={props.controlFunc}
			placeholder={props.placeholder} />
	</div>
);

SingleInput.propTypes = {
	type: PropTypes.oneOf(['text', 'number']).isRequired,
	name: PropTypes.string.isRequired,
	controlFunc: PropTypes.func.isRequired,
	content: PropTypes.oneOfType([
		PropTypes.string,
		PropTypes.number,
	]).isRequired,
	placeholder: PropTypes.string,
	minimum:PropTypes.number,
	increment:PropTypes.number,
};

export default SingleInput;
