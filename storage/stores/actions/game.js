
import { ADD_LIFE, SUB_LIFE } from './'

export function addLife(life) {
    return {
        type: ADD_LIFE,
        life
    }
}

export function subLife(life) {
    return {
        type: SUB_LIFE,
        life
    }
}