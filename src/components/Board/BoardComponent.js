import React, { Component, PropTypes } from 'react';
import Square from '../Square';

export default class BoardComponent extends Component {
    static propTypes = {
        player: PropTypes.string.isRequired,
        board: PropTypes.array.isRequired,
        onClick: PropTypes.func.isRequired
    };

    constructor(props) {
        super(props);

        this.renderSquare = this.renderSquare.bind(this);
    }

    renderSquare(i) {
        return (
            <Square value={this.props.board[i]} onClick={() => this.props.onClick(i)} />
        );
    }

    render() {
        return (
            <div>
                <div className="status">Player: {this.props.player}'s turn.</div>
                <div className="board-row">
                    {this.renderSquare(0)}
                    {this.renderSquare(1)}
                    {this.renderSquare(2)}
                </div>
                <div className="board-row">
                    {this.renderSquare(3)}
                    {this.renderSquare(4)}
                    {this.renderSquare(5)}
                </div>
                <div className="board-row">
                    {this.renderSquare(6)}
                    {this.renderSquare(7)}
                    {this.renderSquare(8)}
                </div>
            </div>
        );
    }
}
