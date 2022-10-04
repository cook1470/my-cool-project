import { Button } from '@mui/material';
import React from 'react';
import { EventTrain } from '../EventTrain';
import { EventBlock } from './EventBlock';

interface RiverPointStates {
	open: boolean;
}

interface RiverPointProps {
	id: string;
	parent: EventTrain;
}

export class RiverPoint extends React.Component<RiverPointProps, RiverPointStates> {

	constructor(props: RiverPointProps) {
		super(props);
		this.state = {
			open: false
		};
	}

	onButton() {
		console.log(`RiverPoint: [${this.props.id}] 被按下去了。`);
		let parent = this.props.parent;
		if(parent.state.currOpen && parent.state.currOpen !== this) {
			console.log(`發現 [${parent.state.currOpen.props.id}] 是打開的狀態`);
			parent.state.currOpen.close();
		}
		this.setState({ open: !this.state.open }, () => {
			console.log(`把我變成 ${this.state.open} 的狀態。`);
			parent.setState({ currOpen: this.state.open ? this : null as any });
			if(this.state.open) {
				console.log(`告訴父親正在打開的是 [${this.props.id}]`);
			}else {
				console.log(`告訴父親目前沒有正在打開的。`);
			}
			console.log('');
		});
	}

	close() {
		this.setState({ open: false });
		console.log(`[${this.props.id}] 被關掉了。`);
	}

	render() {
		return (
			<div>
				<Button variant="contained" color="primary" onClick={() => this.onButton()}>
					{this.state.open ? 'open' : 'close'}
				</Button>
				<EventBlock />
			</div>
		);
	}
}
