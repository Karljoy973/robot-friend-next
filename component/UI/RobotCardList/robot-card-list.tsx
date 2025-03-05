import React from "react";
import RobotCard, { RobotCardArgs } from "../RobotCard/robot-card";

type RobotCardListArgs = { data: RobotCardArgs[] };
const RobotCardList = ({ data }: RobotCardListArgs) => {
	let items = data.map((e) => (
		<li className="mx-4 my-2" key={e.name + e.email + Date.now()}>
			<RobotCard name={e.name} email={e.email} />
		</li>
	));
	return (
		<div>
			<ul className="flex flex-wrap">{items}</ul>
		</div>
	);
};
 
export default RobotCardList;