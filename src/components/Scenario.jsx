import React, { Component } from "react"

import { isEmpty as _isEmpty } from "lodash"

import { library } from "@fortawesome/fontawesome-svg-core"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faUser, faTimes } from "@fortawesome/free-solid-svg-icons"

import { getMediaType } from "../utils.js"

library.add(faUser, faTimes)

export default class Scenario extends Component {
	constructor(props) {
		super(props)

		this.state = {
			selectedSectionIndex: null,
			contentHidden: true
		}
	}

	render() {
		const { Media, sections } = this.props.question

		const selectedSection =
			this.state.selectedSectionIndex !== null ? sections[this.state.selectedSectionIndex] : null

		if (Media) {
			var mediaType = getMediaType(Media)
		}

		return (
			<div
				className="scenario"
				style={{
					minHeight: _isEmpty(sections) ? undefined : "300px"
				}}
			>
				{Media && (
					<div>
						{mediaType.key === "image" && <img src={Media} alt={Media} />}

						{mediaType.key === "video" && (
							<video autoPlay>
								<source src={Media} type={"video/" + mediaType.extension} />
								Your browser does not support HTML5 videos.
							</video>
						)}

						{mediaType.key === "unknown" && <p className="red-text">Unable to determine media type.</p>}
					</div>
				)}

				<div className="overlay">
					{/* Current Section */}
					{
						<div className="currentSection">
							<div
								className="avatar"
								onClick={() => this.setState({ contentHidden: !this.state.contentHidden })}
							>
								<FontAwesomeIcon icon="user" size="2x" color="#555" />
							</div>

							<div className={"sectionContent " + (this.state.contentHidden ? " collapsed" : "")}>
								<div className="content">
									<h3 className="secondary-text margin-bottom-sm">
										{selectedSection ? selectedSection.title : null}
									</h3>
									<span
										dangerouslySetInnerHTML={{
											__html: selectedSection ? selectedSection.content : null
										}}
									/>
								</div>
								<div onClick={() => this.setState({ contentHidden: true })} className="closeButton">
									<FontAwesomeIcon icon="times" color="red" />
								</div>
							</div>
						</div>
					}

					{/* Tabs */}
					{!_isEmpty(sections) && (
						<div className="sectionTabs">
							{sections.map((section, index) => {
								let classNames = ["translucent-light"]
								if (index === this.state.selectedSectionIndex) {
									classNames.push("selected")
								}
								return (
									<button
										onClick={() =>
											this.setState({
												selectedSectionIndex: index,
												contentHidden: false
											})
										}
										className={classNames.join(" ")}
										key={index}
									>
										{section.label}
									</button>
								)
							})}
						</div>
					)}
				</div>
			</div>
		)
	}
}
