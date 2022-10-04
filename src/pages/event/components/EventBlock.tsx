import React from "react";

interface EventBlockStates {

}

interface EventBlockProps {

}

export class EventBlock extends React.Component<EventBlockProps, EventBlockStates> {

	constructor(props: EventBlockProps) {
		super(props);
		this.state = {};
	}

	render() {
		return (
			<div>
				EventBlock
			</div>
		);
	}
}
