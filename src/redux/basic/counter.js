const defaultState = {
    count:0
}

const counter = (state=defaultState,action) => {
    switch(action.type){
        case 'increment':
            return {
                counter:state.counter + 1
            }
        default:
            return state
    }
}

module.exports = counter