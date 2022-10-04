import React from 'react';
import { RiverPoint } from './components/RiverPoint';
import { Timeline } from './components/TimeLine';

interface EventTrainStates {
	currOpen: RiverPoint;
}

interface EventTrainProps {

}

export class EventTrain extends React.Component<EventTrainProps, EventTrainStates> {

	constructor(props: EventTrainProps) {
		super(props);
		this.state = {
			currOpen: null as any,
		};
	}

	render() {
		return (
			<div>
				這是 EventTrain 的內容
				<Timeline eventTrain={this} />
			</div>
		);
	}
}
