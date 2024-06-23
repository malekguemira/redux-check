
import {
    ADD_TASK,
    DELETE_TASK,
    DONE_TASK,
    EDIT_TASK,
} from '../actionType'

const initialState = {
    listTasks: [
        { id: 56, caption: 'Daily Meeting', isDone: false },
        { id: 889, caption: 'Visit Sfax', isDone: false },
        { id: 994, caption: 'Client Meeting', isDone: false },
        { id: 668, caption: 'Presentation of objectif March', isDone: false },
    ],
}

const taskReducer = (state = initialState, { type, payload }) => {
    switch (type) {
        case ADD_TASK:
            return { ...state, listTasks: [...state.listTasks, payload] }

        case DELETE_TASK:
            return {
                ...state,
                listTasks: [...state.listTasks.filter((el) => el.id !== payload)],
            }
        case DONE_TASK:
            return {
                ...state,
                listTasks: state.listTasks.map((elt) =>
                    elt.id === payload ? { ...elt, isDone: !elt.isDone } : elt
                ),
            }
        case EDIT_TASK:
            return {
                ...state,
                listTasks: state.listTasks.map((elt) =>
                    elt.id === payload.id ? { ...elt, caption: payload.newCaption } : elt
                ),
            }
        default:
            return state
    }
}

export default taskReducer
