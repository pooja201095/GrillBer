const initState = {
    data:null,
    fetchError: null
};

export default (state=initState,action) => {
    console.log('in reducer',action);
    switch(action.type) {
        case 'FETCH_ERROR':
            console.log('error');
            return {
                ...state,
                fetchError:action.error
    };

            case 'FETCH_SUCCESS':
                console.log('success');
            return {
                ...state,
                data:action.data,
                fetchError:null
            };

            default:
                    console.log('default',state);
                return state;
    }
}