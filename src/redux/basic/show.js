const defaultState = {
    counter:0
}

const show = (state=defaultState,action) => {
    switch(action.type){
        case 'loadData':
            return {
                counter:action.data
            }
        default:
            return state
    }
}

module.exports = show