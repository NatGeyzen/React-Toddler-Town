export const INCREMENT_ROUND = 'INCREMENT_ROUND';
export const INCREMENT_MATCH = 'INCREMENT_MATCH';
export const STORE_FOUND_ID = 'STORE_FOUND_ID';
export const STORE_FOUND_IDS = 'STORE_FOUND_IDS';

export const incrementRound = (count) => {
    return {
        type: INCREMENT_ROUND,
        roundCount: count
    };
};

export const incrementMatch = (count) => {
    return {
        type: INCREMENT_MATCH,
        matchCount: count
    };
};

export const storeFoundId = (id) => {
    return {
        type: STORE_FOUND_ID,
        id: id
    };
};

export const storeFoundIds = (matchesFound, id) => {
    return {
        type: STORE_FOUND_IDS,
        matchesFound: matchesFound,
        id: id
    };
};