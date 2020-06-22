import { 
    INCREMENT_ROUND,
    INCREMENT_MATCH,
    STORE_FOUND_ID,
    STORE_FOUND_IDS, 
} from './actions';

const initialState = {
    roundCount: 0,
    matchCount: 0,
    id: null,
    matchesFound: []
};

const reducer = (state = initialState, action) => {
    switch(action.type) {
        case INCREMENT_ROUND:
            return {
                ...state,
                roundCount: state.roundCount + 1
            }
        case INCREMENT_MATCH:
                return {
                    ...state,
                    matchCount: state.matchCount + 1
                }
        case STORE_FOUND_ID:
            return {
                ...state,
                id: action.id
            }
        case STORE_FOUND_IDS:
            return {
                ...state,
                matchesFound: [...state.matchesFound, state.id]
            }
        default: return state;
    }
};

export default reducer;