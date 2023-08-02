export interface iPerson {
    id: number,
    name: string,
    skills: string[],
}

export interface iPersonState {
    persons: iPerson[]
}

const defaultState: iPersonState = {
    persons: []
};

export const SET_PERSONS = 'SET_PERSONS';

export const personsReducer = (state = defaultState, action: { type: string; payload: iPerson[]; }) => {
    switch(action.type) {
        case SET_PERSONS:
            return {persons: [...action.payload]};
        default:
            return state;
    }
};

