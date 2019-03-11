import { ADD_QUESTION, JUMP_TO_QUESTION } from "../actions/types";

export default function(state = [], action) {
	switch (action.type) {
		case ADD_QUESTION:
			return state.concat([action.question]);

		case JUMP_TO_QUESTION:
			return [...state.slice(0, action.index + 1)];

		default:
			return state;
	}
}
