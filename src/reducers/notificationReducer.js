const reducer = (state = '', action) => {
    switch (action.type) {
        case 'SET_MESSAGE':
            const newMessage = action.message
            return newMessage
        default:
            return state
    }
}

export const setMessage = (message) => {
    return {
      type: 'SET_MESSAGE',
      message: message
    }
}

export default reducer