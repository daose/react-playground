const reducer = (state = {
    board: Array(9).fill(null),
    player: 'X'
}, action) => {
    switch(action.type) {
        case 'TOGGLE_SQUARE':
            return {
                ...state,
                board: [
                    ...state.board.slice(0, action.data),
                    state.board[action.data] ? null : state.player,
                    ...state.board.slice(action.data + 1)
                ]
            };
        case 'MARK_SQUARE':
            return {
                ...state,
                board: [
                    ...state.board.slice(0, action.data),
                    state.player,
                    ...state.board.slice(action.data + 1)
                ]
            };
        case 'SWITCH_PLAYER':
            return {
                ...state,
                player: state.player === 'X' ? 'O' : 'X'
            };
        default:
            return state;
    }
}

export default reducer;
