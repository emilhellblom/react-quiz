export const correct = (state = [], action) => {
    console.log('action in results', action)
    switch (action.type) {
        case 'ADD_CORRECT_ANSWER':
            return [...state, action.answer[0]]
        default:
            return state
    }
}