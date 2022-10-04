import React from 'react';
import { EventTrain } from '../EventTrain';
import { RiverPoint } from './RiverPoint';

interface TimelineStates {

}

interface TimelineProps {
	eventTrain: EventTrain;
}

export class Timeline extends React.Component<TimelineProps, TimelineStates> {

	constructor(props: TimelineProps) {
		super(props);
		this.state = {};
	}

	render() {
		let eventTrain = this.props.eventTrain;
		return (
			<div>
				<RiverPoint id='0' parent={eventTrain} />
				<RiverPoint id='1' parent={eventTrain} />
				<RiverPoint id='2' parent={eventTrain} />
			</div>
		);
	}
}
