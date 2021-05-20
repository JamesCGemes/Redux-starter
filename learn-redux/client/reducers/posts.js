// reducer takes in two things:

//the action, info on what happened
// copy of the current state.

function posts(state = [], action) {
    console.log(state, action);
    return state;

}

export default posts;