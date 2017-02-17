import React, { Component } from 'react';
import { connect } from 'react-redux';
import BoardComponent from './BoardComponent';

class BoardContainer extends Component {
    static calculateWinner(squares) {
        const lines = [
            [0, 1, 2],
            [3, 4, 5],
            [6, 7, 8],
            [0, 3, 6],
            [1, 4, 7],
            [2, 5, 8],
            [0, 4, 8],
            [2, 4, 6],
        ];
        for (let i = 0; i < lines.length; i++) {
            const [a, b, c] = lines[i];
            if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
                return squares[a];
            }
        }
        return null;
    }

    constructor(props) {
        super(props);

        this.handleClick = this.handleClick.bind(this);
    }

    componentWillReceiveProps(nextProps) {
        if(BoardContainer.calculateWinner(nextProps.board)) {
            console.log('someone won');
        }
    }

    handleClick(i) {
        if(this.props.board[i]) return;
        this.props.markSelected(i);

        this.props.switchPlayer();
    }

    render() {
        return (
            <BoardComponent
                player={this.props.player}
                board={this.props.board}
                onClick={this.handleClick} />
        );
    }
}

const mapStateToProps = (state) => ({
    board: state.board,
    player: state.player
});

const mapDispatchToProps = (dispatch) => ({
    markSelected: (i) => dispatch({type: 'MARK_SQUARE', data: i}),
    switchPlayer: () => dispatch({type: 'SWITCH_PLAYER'})
});

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(BoardContainer);
