import { UPDATE_ANSWERS } from "../actions/types";

export default function(state = [], action) {
	if (action.type === UPDATE_ANSWERS) return action.answers;

	return state;
}
