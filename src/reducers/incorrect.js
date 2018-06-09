export const incorrect = (state = [], action) => {
    console.log('action in results', action)
    switch (action.type) {
        case 'ADD_INCORRECT_ANSWER':
            return [...state, action.answer[0]]
        case 'RESET_GAME':
            return action.payload
        default:
            return state
    }
}