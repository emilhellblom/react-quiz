export const ADD_CORRECT_ANSWER = 'ADD_CORRECT_ANSWER'
export const ADD_INCORRECT_ANSWER = 'ADD_INCORRECT_ANSWER'
export const RESET_GAME = 'RESET_GAME'

export const addCorrectAnswer = answer => {
    console.log(answer)
    return {
        type: ADD_CORRECT_ANSWER,
        answer
    }
}

export const addIncorrectAnswer = answer => {
    console.log('answers', answer)
    return {
        type: ADD_INCORRECT_ANSWER,
        answer
    }
}

export const resetGame = () => {
    return {
        type: RESET_GAME,
        payload: []
    }
}