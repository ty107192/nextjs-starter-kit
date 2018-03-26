import {ADD_LIFE, SUB_LIFE} from './';

export const addLife = payload => ({
    type: ADD_LIFE,
    payload
});

export const subLife = payload => ({
    type: SUB_LIFE,
    payload
});
