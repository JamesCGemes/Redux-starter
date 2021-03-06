function postComments(state = [], action) {
    switch(action.type){
        case 'ADD_COMMENT':
            return [...state,{
                user: action.author,
                text: action.comment
            }];
        case 'REMOVE_COMMENT':
            return [
                //Start at the begining of the array upto the one we want to delete.
                ...state.slice(0,action.i),
                //Returns everything after the one we wanted to delete.
                ...state.slice(action.i + 1)
            ]
        default:
            return state
    }
    return state;

}
function comments(state = [], action) {
    if(typeof action.postId !== 'undefined') {
        return {
            ...state,
            [action.postId]: postComments(state[action.postId], action)
        }
    }
    return state;

}

export default comments;