import React from "react";
import { v7 as uuidv7 } from "uuid";
import RobotCard from "../RobotCard/robot-card";
import { RobotCardArgs } from "types/types";

type RobotCardListArgs = { data: RobotCardArgs[] };
const RobotCardList = ({ data }: RobotCardListArgs) => {
	let items = data.map((e) => (
		<li className="mx-4 my-2" key={uuidv7()}>
			<RobotCard {...e} />
		</li>
	));
	return (
		<div>
			<ul className="flex flex-wrap">{items}</ul>
		</div>
	);
};

export default RobotCardList;
