import { connect } from "react-redux"

import Main from "./components/Main"
import { bindActionCreators } from "redux"
import * as actionCreators from "./actions"
import * as questionActionCreators from "./actions/questions"

function mapStateToProps(state) {
	return { ...state }
}

function mapDispatchToProps(dispatch) {
	return bindActionCreators(
		{
			...actionCreators,
			...questionActionCreators
		},
		dispatch
	)
}

export default connect(
	mapStateToProps,
	mapDispatchToProps
)(Main)
