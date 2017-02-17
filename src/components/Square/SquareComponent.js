import React, { PropTypes } from 'react';

const SquareComponent = ({value, onClick}) => (
    <button className="square" onClick={onClick}>
        {value}
    </button>
)

SquareComponent.propTypes = {
    value: PropTypes.string,
    onClick: PropTypes.func.isRequired
};

SquareComponent.defaultProps = {
    value: null
}

export default SquareComponent;

